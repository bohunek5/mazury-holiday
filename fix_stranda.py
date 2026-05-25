with open("src/data/stranda-apartments.ts", "r", encoding="utf-8") as f:
    code = f.read()

# Replace literal \n that are outside of strings.
# The python script literally wrote "\n" (backslash n) where it meant an actual newline.
code = code.replace("\\n                ", "\n                ")
code = code.replace("    },\\n", "    },\n")

with open("src/data/stranda-apartments.ts", "w", encoding="utf-8") as f:
    f.write(code)
print("Fixed newlines")
