import json
import codecs
import os

def fix_encoding(s):
    # Try to decode as latin1 and encode as utf-8
    if isinstance(s, str):
        try:
            return s.encode('latin1').decode('utf-8')
        except Exception:
            return s
    return s

def fix_dict(d):
    if isinstance(d, dict):
        return {k: fix_encoding(v) if isinstance(v, str) else fix_dict(v) for k, v in d.items()}
    elif isinstance(d, list):
        return [fix_dict(i) for i in d]
    return d

input_path = 'app/assets/data/pubD_sedhc.json'
output_path = 'app/assets/data/pubD_sedhc.fixed.json'

with codecs.open(input_path, 'r', encoding='utf-8', errors='replace') as f:
    data = json.load(f)

fixed = fix_dict(data)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(fixed, f, ensure_ascii=False, indent=2)

print(f"Fixed encoding written to {output_path}")
