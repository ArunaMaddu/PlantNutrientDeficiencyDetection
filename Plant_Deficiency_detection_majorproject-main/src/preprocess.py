import os
from PIL import Image
import shutil
import logging
import traceback
from sklearn.model_selection import train_test_split
from pathlib import Path

# Setup logging
log_path = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\src\preprocess.log"
logging.basicConfig(filename=log_path, level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

def verify_image(img_path):
    try:
        with Image.open(img_path) as img:
            img.verify()
        return True
    except Exception:
        return False

def preprocess_dataset(data_dir, output_dir, img_size=(224, 224), val_split=0.15, test_split=0.05):
    logging.info(f"Starting preprocessing from {data_dir} to {output_dir}")
    data_path = Path(data_dir)
    out_path = Path(output_dir)
    
    # Create output directories
    for split in ['train', 'val', 'test']:
        (out_path / split).mkdir(parents=True, exist_ok=True)
        
    if not data_path.exists():
        logging.error(f"Data path does not exist: {data_path}")
        return
        
    classes = [d.name for d in data_path.iterdir() if d.is_dir()]
    logging.info(f"Found {len(classes)} classes.")
    
    total_processed = 0
    total_corrupted = 0
    
    for cls in classes:
        cls_dir = data_path / cls
        # Get all image paths
        images = []
        for ext in ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']:
            images.extend(list(cls_dir.glob(ext)))
            
        logging.info(f"Class {cls}: Found {len(images)} raw images.")
        
        if len(images) == 0:
            continue
            
        # Verify images and filter corrupted ones
        valid_images = []
        for img_path in images:
            if verify_image(str(img_path)):
                valid_images.append(img_path)
            else:
                total_corrupted += 1
                
        if len(valid_images) == 0:
            continue
            
        # Split data
        train_val, test = train_test_split(valid_images, test_size=test_split, random_state=42) if test_split > 0 and len(valid_images) > 10 else (valid_images, [])
        val_size_adjusted = val_split / (1.0 - test_split)
        train, val = train_test_split(train_val, test_size=val_size_adjusted, random_state=42) if val_size_adjusted > 0 and len(train_val) > 10 else (train_val, [])
        
        splits = {'train': train, 'val': val, 'test': test}
        
        # Create class directories in splits and process images
        class_processed = 0
        for split_name, split_images in splits.items():
            if not split_images:
                continue
                
            split_cls_dir = out_path / split_name / cls
            split_cls_dir.mkdir(parents=True, exist_ok=True)
            
            for img_path in split_images:
                try:
                    with open(str(img_path), 'rb') as f:
                        with Image.open(f) as img:
                            img = img.convert('RGB')
                            img_resized = img.resize(img_size)
                            out_file = split_cls_dir / img_path.name
                            img_resized.save(str(out_file), 'JPEG')
                    total_processed += 1
                    class_processed += 1
                    
                    if class_processed % 50 == 0:
                        logging.info(f"  Processed {class_processed} images so far in class {cls}...")
                        
                except Exception as e:
                    logging.error(f"Error processing {img_path}: {e}")
                    total_corrupted += 1
        
        logging.info(f"Finished class {cls}. Processed {class_processed} images.")

    logging.info(f"Preprocessing complete. Processed: {total_processed}, Corrupted/Skipped: {total_corrupted}")

if __name__ == "__main__":
    try:
        input_dir = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\data\archive (6)"
        output_dir = r"c:\Users\HP\OneDrive\desktop\PlantDeficiency_major1\data\processed"
        preprocess_dataset(input_dir, output_dir)
    except Exception as e:
        logging.error(f"Fatal error: {traceback.format_exc()}")
