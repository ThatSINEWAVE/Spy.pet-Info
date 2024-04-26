import json
import requests
import time
from datetime import datetime
from dateutil.tz import tzutc

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

# Discord Epoch (Discord's Epoch is 2015-01-01T00:00:00.000Z)
discord_epoch = datetime(2015, 1, 1, tzinfo=tzutc())

# List to store user data
user_data_list = []

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

        # Calculate the creation date from the Snowflake ID
        snowflake_id = int(user_id)
        creation_timestamp = (snowflake_id >> 22) + 1420070400000
        creation_date = datetime.fromtimestamp(creation_timestamp / 1000, tz=tzutc())
        user_data['creation_date'] = creation_date.strftime('%Y-%m-%d %H:%M:%S')

        # Construct the avatar URL
        avatar_url = f"https://cdn.discordapp.com/avatars/{user_id}/{user_data['avatar']}?size=1024"
        user_data['avatar'] = avatar_url

        # Append the user data to the list
        user_data_list.append(user_data)

        print(f'Entry {entry_number}: Saved information for user ID {user_id}')
    else:
        print(f'Entry {entry_number}: Error retrieving information for user ID {user_id}: {response.status_code}')

    # Increment entry number
    entry_number += 1

    # Add a delay of 1 second between each request
    time.sleep(1)

# Write the user data list to the output JSON file
with open('data/scanner_output.json', 'a') as output_file:
    json.dump(user_data_list, output_file, indent=4)

# Inform that all users have been checked
print('All entries have been processed. User information has been retrieved and saved to scanner_output.json')
