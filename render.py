#!/usr/local/bin/python3

import markdown, os

with open(os.path.abspath(os.path.join(os.path.dirname(__file__), "content.md"))) as f:
    content = f.read().strip()
    content = markdown.markdown(content, extensions=['extra'])

with open(os.path.abspath(os.path.join(os.path.dirname(__file__), "template.html"))) as f:
    template = f.read()

with open(os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html")), 'w') as f:
    f.write(template.replace("CONTENT", content))

