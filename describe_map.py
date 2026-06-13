import base64
import os
import requests
import json

api_key = os.environ.get("GEMINI_API_KEY")

with open("/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/media__1781255498709.png", "rb") as f:
    img_data = base64.b64encode(f.read()).decode("utf-8")

payload = {
    "contents": [{
        "parts": [
            {"text": "Analyze this map image. There are 5 red circles with text next to them: PARKING, PLAC ZABAW, SAUNA, PLAZA, WYPOZYCZALNIA. For each of these 5, tell me where the TEXT is located relative to the RED CIRCLE (e.g. text is ABOVE the circle, text is BELOW, text is to the LEFT, text is to the RIGHT). Be very precise."},
            {"inline_data": {"mime_type": "image/png", "data": img_data}}
        ]
    }]
}

resp = requests.post(
    f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key={api_key}",
    headers={"Content-Type": "application/json"},
    json=payload
)
print(resp.json()['candidates'][0]['content']['parts'][0]['text'])
