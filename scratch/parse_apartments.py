import re

with open('scratch/mazury.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Look for titles like <h4>...</a></h4> or <h3...>...</h3> or <h2...>...</h2>
# Let's just find anything containing "Apartament" or "Studio" near a description
from html.parser import HTMLParser

class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_h = False
        self.in_desc = False
        self.current_title = ""
        self.current_desc = ""
        self.results = []
        self.record = False

    def handle_starttag(self, tag, attrs):
        if tag in ['h3', 'h4', 'h2']:
            for attr in attrs:
                if attr[0] == 'class' and 'milenia-entity-title' in attr[1]:
                    self.in_h = True
        elif tag == 'div':
            for attr in attrs:
                if attr[0] == 'class' and 'milenia-entity-content' in attr[1]:
                    self.in_desc = True

    def handle_endtag(self, tag):
        if tag in ['h3', 'h4', 'h2'] and self.in_h:
            self.in_h = False
            self.record = True
        elif tag == 'div' and self.in_desc:
            self.in_desc = False
            if self.current_title:
                self.results.append({'title': self.current_title.strip(), 'desc': self.current_desc.strip()})
            self.current_title = ""
            self.current_desc = ""

    def handle_data(self, data):
        if self.in_h:
            self.current_title += data
        elif self.in_desc and self.current_title:
            self.current_desc += data

p = MyParser()
p.feed(html)
for r in p.results:
    print(f"TITLE: {r['title']}")
    print(f"DESC: {r['desc']}")

