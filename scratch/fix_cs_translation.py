import json
import urllib.request
import time

def translate_single(text, target_lang="Czech"):
    prompt = f"Translate the following string from Polish to {target_lang}. Preserve all HTML tags, structure, and formatting. Output ONLY the translated string. Do not include markdown or quotes around it if they were not present.\n\nInput: {text}"
    
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
            with urllib.request.urlopen(req, timeout=30) as response:
                result = json.loads(response.read().decode('utf-8'))
                translated = result.get('response', '').strip()
                if translated.startswith('"') and translated.endswith('"') and not text.startswith('"'):
                    translated = translated[1:-1]
                return translated
        except Exception as e:
            print(f"Error translating '{text[:20]}...': {e}")
            time.sleep(1)
    return text

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
    print("Fixing missing Czech translations...")
    with open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/pl.json', 'r', encoding='utf-8') as f:
        pl_data = json.load(f)
    with open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_cs.json', 'r', encoding='utf-8') as f:
        cs_data = json.load(f)
        
    pl_strings = extract_strings(pl_data)
    cs_strings = extract_strings(cs_data)
    
    missing_paths = []
    for path, text in pl_strings.items():
        if path in cs_strings and cs_strings[path] == text:
            if not text.isdigit() and len(text) > 3 and "http" not in text and text not in ["Stranda", "Kisajno", "Fuleda", "Mikołajki", "Mazury", "Mazury Holiday"]:
                missing_paths.append(path)
                
    print(f"Found {len(missing_paths)} strings that need re-translation.")
    
    fixed = 0
    for path in missing_paths:
        orig_text = pl_strings[path]
        print(f"Translating: {orig_text[:50]}...")
        trans_text = translate_single(orig_text)
        if trans_text != orig_text:
            set_string(cs_data, path, trans_text)
            fixed += 1
            print(f"Fixed: {path} -> {trans_text[:50]}...")
            
    with open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_cs.json', 'w', encoding='utf-8') as f:
        json.dump(cs_data, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully fixed {fixed} translations!")

if __name__ == "__main__":
    main()
