from docx import Document
import pandas as pd
import glob

# Check docx
doc = Document("/Users/karolbohdanowicz/Downloads/Apartamenty 2/Opisy i zameldowanie.docx")
print("Searching in DOCX for 'sauna'...")
for para in doc.paragraphs:
    if "saun" in para.text.lower() or "sauna" in para.text.lower():
        print(para.text)

# Check Excel
print("\nSearching in Excel...")
excel_files = glob.glob("/Users/karolbohdanowicz/Downloads/Apartamenty 2/*.xlsx")
for f in excel_files:
    try:
        df = pd.read_excel(f)
        for index, row in df.iterrows():
            row_str = " ".join([str(x) for x in row.values]).lower()
            if "saun" in row_str:
                print(f"File: {f}, Row {index}: {row_str}")
    except Exception as e:
        print(f"Error reading {f}: {e}")

