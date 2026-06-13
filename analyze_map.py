import pytesseract
from PIL import Image

try:
    img = Image.open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/media__1781255498709.png')
    data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
    print("Found text in media__1781255498709.png:")
    for i in range(len(data['text'])):
        if int(data['conf'][i]) > 10 and data['text'][i].strip():
            print(f"Text: '{data['text'][i]}' at x={data['left'][i]}, y={data['top'][i]}")
except Exception as e:
    print(f"Error reading image: {e}")

