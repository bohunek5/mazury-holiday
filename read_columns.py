import pandas as pd
import glob

excel_files = glob.glob("/Users/karolbohdanowicz/Downloads/Apartamenty 2/*.xlsx")
for f in excel_files:
    try:
        df = pd.read_excel(f)
        print(f"File: {f}")
        print("Columns:", list(df.columns))
        print("---")
    except Exception as e:
        print(f"Error: {e}")

