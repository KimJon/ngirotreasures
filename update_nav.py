import glob
import re

with open('nav.html', 'r', encoding='utf-8') as f:
    nav_html = f.read()

html_files = glob.glob('*.html')
html_files.remove('nav.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use regex to find <nav> ... </nav> block and replace it
    new_content = re.sub(r'<nav.*?</nav>', nav_html, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
