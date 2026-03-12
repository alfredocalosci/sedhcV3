import json
import os
import re
from pathlib import Path
from slugify import slugify

# Path to the JSON file and output directory
json_path = Path("app/assets/data/news_sedhc.json")
output_dir = Path("content/noticias")
output_dir.mkdir(parents=True, exist_ok=True)

def parse_news_json(json_path):
    with open(json_path, encoding="utf-8") as f:
        data = json.load(f)
    # Find the table with news data
    for entry in data:
        if entry.get("type") == "table" and entry.get("name") == "news_sedhc":
            return entry["data"]
    raise ValueError("news_sedhc table not found")

def clean_text(text):
    # Replace problematic encodings, fix line endings
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    # Add more replacements if needed
    return text

def make_md(news):
    title = news.get("TIT_news", "")
    date = news.get("DATA_news", "")
    url = news.get("URL_news", None)
    image_src = f"/img/noticias/{news.get('IMG_news', '').strip()}" if news.get('IMG_news') else ""
    body = clean_text(news.get("TXT_news", ""))
    slug = slugify(title)
    desc = body[:120].replace('\n', ' ') if body else ''
    md = [
        f"---",
        f"title: {title}",
        f"description: {desc}..." if desc else "description: ",
        f"slug: {slug}",
        f"date: {date}",
        f"image: {{\"src\": \"{image_src}\", \"alt\": \"{title}\"}}",
        f"url: {url}" if url else "url: ",
        f"featured: false",
        f"category: []",
        f"---\n",
        body.strip()
    ]
    return "\n".join(md)

def main():
    news_items = parse_news_json(json_path)
    for news in news_items:
        title = news.get("TIT_news", "")
        if not title:
            continue
        slug = slugify(title)
        md_content = make_md(news)
        md_path = output_dir / f"{slug}.md"
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(md_content)
    print(f"Created {len(news_items)} markdown files in {output_dir}")

if __name__ == "__main__":
    main()
