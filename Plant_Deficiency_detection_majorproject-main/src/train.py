import os
import time
import logging
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms, models
from torch.utils.data import DataLoader

# Setup logging
log_path = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\src\train.log"
logging.basicConfig(filename=log_path, level=logging.INFO, 
                    format='%(asctime)s - %(message)s')

def train_model():
    logging.info("Starting PyTorch model training setup...")
    
    # Paths
    train_dir = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\data\processed\train"
    val_dir = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\data\processed\val"
    models_dir = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\models"
    os.makedirs(models_dir, exist_ok=True)
    
    # Device
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    logging.info(f"Using device: {device}")
    
    # Transforms
    train_transforms = transforms.Compose([
        transforms.RandomResizedCrop(224),
        transforms.RandomHorizontalFlip(),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    
    val_transforms = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    
    # Datasets
    logging.info("Loading datasets...")
    train_dataset = datasets.ImageFolder(train_dir, train_transforms)
    val_dataset = datasets.ImageFolder(val_dir, val_transforms)
    
    num_classes = len(train_dataset.classes)
    logging.info(f"Found {num_classes} classes.")
    
    # DataLoaders
    batch_size = 32
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True, num_workers=0)
    val_loader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False, num_workers=0)
    
    # Model
    logging.info("Building MobileNetV2 model...")
    model = models.mobilenet_v2(weights=models.MobileNet_V2_Weights.IMAGENET1K_V1)
    
    # Freeze base
    for param in model.parameters():
        param.requires_grad = False
        
    # Replace classifier
    model.classifier[1] = nn.Linear(model.last_channel, num_classes)
    model = model.to(device)
    
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.classifier.parameters(), lr=0.001)
    
    num_epochs = 5
    best_acc = 0.0
    
    logging.info(f"Starting training for {num_epochs} epochs...")
    
    for epoch in range(num_epochs):
        logging.info(f"Epoch {epoch+1}/{num_epochs}")
        print(f"Epoch {epoch+1}/{num_epochs}")
        
        # Train
        model.train()
        running_loss = 0.0
        running_corrects = 0
        
        for inputs, labels in train_loader:
            inputs = inputs.to(device)
            labels = labels.to(device)
            
            optimizer.zero_grad()
            outputs = model(inputs)
            _, preds = torch.max(outputs, 1)
            loss = criterion(outputs, labels)
            
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item() * inputs.size(0)
            running_corrects += torch.sum(preds == labels.data)
            
        train_loss = running_loss / len(train_dataset)
        train_acc = running_corrects.double() / len(train_dataset)
        
        # Validate
        model.eval()
        val_loss = 0.0
        val_corrects = 0
        
        with torch.no_grad():
            for inputs, labels in val_loader:
                inputs = inputs.to(device)
                labels = labels.to(device)
                
                outputs = model(inputs)
                _, preds = torch.max(outputs, 1)
                loss = criterion(outputs, labels)
                
                val_loss += loss.item() * inputs.size(0)
                val_corrects += torch.sum(preds == labels.data)
                
        val_loss = val_loss / len(val_dataset)
        val_acc = val_corrects.double() / len(val_dataset)
        
        msg = f"loss: {train_loss:.4f} - accuracy: {train_acc:.4f} - val_loss: {val_loss:.4f} - val_accuracy: {val_acc:.4f}"
        logging.info(msg)
        print(msg)
        
        # Save best
        if val_acc > best_acc:
            best_acc = val_acc
            torch.save(model.state_dict(), os.path.join(models_dir, 'best_model.pth'))
            
    # Save final
    torch.save(model.state_dict(), os.path.join(models_dir, 'final_model.pth'))
    logging.info("Training complete. Models saved to " + models_dir)

if __name__ == "__main__":
    train_model()
