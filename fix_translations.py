old_file = open("../translations_backup_old.ts").read()
new_file = open("src/lib/translations.ts").read()

pl_block_old = old_file.split("    en: {\n")[0]
en_block_new = "    en: {\n" + new_file.split("    en: {\n", 1)[1]

final_file = pl_block_old + en_block_new

with open("src/lib/translations.ts", "w") as f:
    f.write(final_file)
