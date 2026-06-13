import json
import urllib.request
import urllib.error
import time

def translate_chunk(texts, target_lang):
    prompt = f"Translate the following JSON array of strings from Polish to {target_lang}. Preserve all HTML tags, structure, and formatting. Output ONLY the raw JSON array containing the translated strings. Do not include markdown codeblocks or any other text.\n\nInput:\n{json.dumps(texts, ensure_ascii=False)}"
    
    data = {
        "model": "qwen2.5-coder:7b",
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.1
        }
    }
    
    req = urllib.request.Request(
        "http://localhost:11434/api/generate",
        data=json.dumps(data).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    
    for _ in range(3):
        try:
            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))
                text = result.get('response', '').strip()
                if text.startswith('```json'):
                    text = text[7:-3]
                elif text.startswith('```'):
                    text = text[3:-3]
                
                translated = json.loads(text.strip())
                if len(translated) == len(texts):
                    return translated
                else:
                    print(f"Warning: length mismatch. Expected {len(texts)}, got {len(translated)}")
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(1)
    
    return texts

def extract_strings(data, path=""):
    strings = {}
    if isinstance(data, dict):
        for k, v in data.items():
            strings.update(extract_strings(v, f"{path}.{k}" if path else k))
    elif isinstance(data, list):
        for i, v in enumerate(data):
            strings.update(extract_strings(v, f"{path}[{i}]"))
    elif isinstance(data, str):
        strings[path] = data
    return strings

def set_string(data, path, value):
    parts = path.split('.')
    current = data
    for part in parts[:-1]:
        if '[' in part:
            list_name, idx = part.split('[')
            idx = int(idx.replace(']', ''))
            current = current[list_name][idx]
        else:
            current = current[part]
    
    last_part = parts[-1]
    if '[' in last_part:
        list_name, idx = last_part.split('[')
        idx = int(idx.replace(']', ''))
        current[list_name][idx] = value
    else:
        current[last_part] = value

def main():
    print("Starting translation to Czech with local Ollama...")
    with open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/pl.json', 'r', encoding='utf-8') as f:
        pl_data = json.load(f)
        
    extracted = extract_strings(pl_data)
    paths = list(extracted.keys())
    texts = [extracted[p] for p in paths]
    
    translated_data = json.loads(json.dumps(pl_data))
    translated_texts = []
    chunk_size = 30
    
    for i in range(0, len(texts), chunk_size):
        chunk = texts[i:i+chunk_size]
        print(f"Translating chunk {i//chunk_size + 1}/{len(texts)//chunk_size + 1}...")
        trans_chunk = translate_chunk(chunk, "Lithuanian")
        translated_texts.extend(trans_chunk)
        
    for i, path in enumerate(paths):
        if i < len(translated_texts):
            set_string(translated_data, path, translated_texts[i])
            
    with open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_lt.json', 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
    print("Finished generating Lithuanian translation!")

if __name__ == "__main__":
    main()
