#!/usr/bin/env python3

import markdown

with open("content.md") as f:
    content = f.read().strip()
    content = markdown.markdown(content, ['extra'])

with open("template.html") as f:
    template = f.read()

with open("index.html", 'w') as f:
    f.write(template.replace("CONTENT", content))

