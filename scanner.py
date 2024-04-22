import json
import requests
import time

# Replace YOUR_BOT_TOKEN with your actual Discord bot token
DISCORD_BOT_TOKEN = 'YOUR_BOT_TOKEN'

# Set the headers for the Discord API requests
headers = {
    'Authorization': f'Bot {DISCORD_BOT_TOKEN}',
    'Content-Type': 'application/json'
}

# Read the Discord user IDs from the input JSON file
with open('data/ids.json', 'r') as file:
    user_ids = json.load(file)

# Counter for entry numbers
entry_number = 1

# Loop through the user IDs and retrieve information from the Discord API
for user_id in user_ids:
    print(f'Entry {entry_number}: Retrieving information for user ID: {user_id}')
    url = f'https://discord.com/api/v8/users/{user_id}'
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        user_data = response.json()

        # Add entry number to user data
        user_data['entry_number'] = entry_number

        # Append the user information to the output JSON file with a newline character
        with open('scanner_output.json', 'a') as output_file:
            json.dump(user_data, output_file, indent=4)
            output_file.write('\n')  # Add a newline character

        print(f'Entry {entry_number}: Saved information for user ID {user_id}')
    else:
        print(f'Entry {entry_number}: Error retrieving information for user ID {user_id}: {response.status_code}')

    # Increment entry number
    entry_number += 1

    # Add a delay of 1 second between each request
    time.sleep(1)

# Inform that all users have been checked
print('All entries have been processed. User information has been retrieved and saved to scanner_output.json')
