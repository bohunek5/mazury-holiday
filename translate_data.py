import json
import time
from deep_translator import GoogleTranslator

# Target languages: pl, de, en, lt, cs
TARGET_LANGS = ['de', 'en', 'lt', 'cs']
LANG_MAPPING = {
    'de': 'de',
    'en': 'en',
    'lt': 'lt',
    'cs': 'cs'
}

def deduplicate_galleries(data):
    if isinstance(data, dict):
        if "gallery" in data and isinstance(data["gallery"], list):
            # deduplicate list of strings/objects
            seen = set()
            new_gallery = []
            for item in data["gallery"]:
                # If it's a string
                if isinstance(item, str):
                    if item not in seen:
                        seen.add(item)
                        new_gallery.append(item)
                # If it's a dict (e.g., {"original": "...", "thumbnail": "..."})
                elif isinstance(item, dict):
                    # use string representation as key
                    key = json.dumps(item, sort_keys=True)
                    if key not in seen:
                        seen.add(key)
                        new_gallery.append(item)
                else:
                    new_gallery.append(item)
            data["gallery"] = new_gallery
        
        for k, v in data.items():
            deduplicate_galleries(v)
    elif isinstance(data, list):
        for item in data:
            deduplicate_galleries(item)
    return data

def translate_recursive(data, lang_code, translator):
    if isinstance(data, dict):
        new_dict = {}
        for k, v in data.items():
            new_dict[k] = translate_recursive(v, lang_code, translator)
        return new_dict
    elif isinstance(data, list):
        # We don't translate gallery paths or images
        if len(data) > 0 and isinstance(data[0], str) and (data[0].startswith('/') or data[0].endswith('.jpg') or data[0].endswith('.png') or data[0].endswith('.webp')):
            return data
        
        return [translate_recursive(item, lang_code, translator) for item in data]
    elif isinstance(data, str):
        # Don't translate paths, emails, numbers
        if data.startswith('/') or data.endswith('.jpg') or data.endswith('.png') or data.endswith('.webp') or '@' in data or data.startswith('+48') or data.isdigit():
            return data
        # Don't translate very short codes if they look like IDs
        if len(data) <= 2 and data.isupper():
            return data
            
        try:
            translated = translator.translate(data)
            # Sleep slightly to avoid rate limit
            time.sleep(0.1)
            return translated
        except Exception as e:
            print(f"Error translating '{data}': {e}")
            return data
    else:
        return data

def main():
    print("Loading Polish translations...")
    with open('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/pl_translations.json', 'r', encoding='utf-8') as f:
        pl_data = json.load(f)
        
    print("Deduplicating galleries...")
    pl_data = deduplicate_galleries(pl_data)
    
    # Base structure
    final_translations = {
        "pl": pl_data
    }
    
    for lang in TARGET_LANGS:
        print(f"Translating to {lang}...")
        translator = GoogleTranslator(source='pl', target=LANG_MAPPING[lang])
        # Deep copy structure and translate
        translated_data = translate_recursive(pl_data, lang, translator)
        final_translations[lang] = translated_data
        print(f"Finished {lang}.")
        
    print("Saving to full_translations.json...")
    with open('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/full_translations.json', 'w', encoding='utf-8') as f:
        json.dump(final_translations, f, ensure_ascii=False, indent=2)
        
    print("Done!")

if __name__ == "__main__":
    main()
