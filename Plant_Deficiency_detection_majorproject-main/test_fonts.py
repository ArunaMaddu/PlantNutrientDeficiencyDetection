import sys
sys.path.append('.')
from app import get_pdf_font, LANG_FONT_FILES
import os

print("Checking font paths...")
for lang, path in LANG_FONT_FILES.items():
    if path:
        exists = os.path.exists(path)
        print(f"{lang}: {path} - {'EXISTS' if exists else 'MISSING'}")
    else:
        print(f"{lang}: Built-in")

print("\nTesting font registration...")
try:
    fn, fnb = get_pdf_font('hi')
    print(f"Hindi font registered: {fn}")
    fn, fnb = get_pdf_font('te')
    print(f"Telugu font registered: {fn}")
except Exception as e:
    print(f"Registration failed: {e}")
