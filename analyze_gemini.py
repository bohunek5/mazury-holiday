import os
from google import genai
from google.genai import types

try:
    client = genai.Client()
    img_path = '/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/media__1781255498709.png'
    
    with open(img_path, 'rb') as f:
        img_bytes = f.read()

    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=[
            types.Part.from_bytes(data=img_bytes, mime_type='image/png'),
            "List all the labels on this map and their approximate locations (e.g. 'top left', 'center right'). Tell me exactly what the user added to this image (the new text and arrows)."
        ]
    )
    print("Gemini analysis:")
    print(response.text)
except Exception as e:
    print(f"Error: {e}")

