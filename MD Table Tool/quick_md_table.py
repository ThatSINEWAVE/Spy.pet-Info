import json

# Define the mapping of keys to table headers
TABLE_HEADERS = {
    "NUMBER": "entry_number",
    "DISCORD_ID": "id",
    "USERNAME": "username",
    "NICKNAME": "global_name",
    "PROFILE IMAGE": "avatar"
}

# Read data from output.json
with open("output.json", "r") as json_file:
    data = json.load(json_file)

# Generate markdown table
markdown_table = "| " + " | ".join(TABLE_HEADERS.keys()) + " |\n"
markdown_table += "|:" + ":|:".join(["-" * len(header) for header in TABLE_HEADERS.keys()]) + ":|\n"

for entry in data:
    row = "| "
    for header, key in TABLE_HEADERS.items():
        value = entry.get(key, "")
        # Convert None values to empty strings
        if value is None:
            value = ""
        # Convert value to string if it's an integer
        elif isinstance(value, int):
            value = str(value)
        # Encode Unicode characters to prevent encoding errors
        row += value.encode('ascii', 'ignore').decode('ascii') + " | "
    markdown_table += row + "\n"

# Write markdown table to a txt file with UTF-8 encoding
with open("output_md_table.txt", "w", encoding="utf-8") as txt_file:
    txt_file.write(markdown_table)

print("Markdown table has been generated and saved to output_md_table.txt.")
