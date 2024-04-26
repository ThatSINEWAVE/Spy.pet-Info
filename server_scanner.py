import requests
import json
import time

# Replace YOUR_BOT_TOKEN with your actual Discord bot token
DISCORD_BOT_TOKEN = "YOUR_BOT_TOKEN"

# Load the list of server IDs from the JSON file
try:
    with open("data/all_tracked_servers_22042024.json", "r") as f:
        server_ids = json.load(f)
except FileNotFoundError:
    print("File 'all_tracked_servers_22042024.json' not found.")
    exit()

entry_number = 1


# Define a function to format the JSON data
def format_json(data):
    formatted_data = json.dumps(data, indent=2)
    return formatted_data


# Loop through each server ID and retrieve server information
for server_id in server_ids:
    url = f"https://discord.com/api/v9/guilds/{server_id}/preview"
    headers = {"Authorization": f"Bot {DISCORD_BOT_TOKEN}"}

    print(f"Entry {entry_number}: Scanning server {server_id}...")

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        server_data = response.json()
        server_data["entry_number"] = entry_number

        # Format the JSON data
        formatted_data = format_json(server_data)

        # Save the formatted data to the JSON file
        with open("data/detailed_all_tracked_servers_22042024.json", "a") as f:
            f.write(formatted_data + "\n")

        print(f"Entry {entry_number}: Server {server_id} scan successful.")
        entry_number += 1
    else:
        error_message = response.json().get("message", "Unknown error")
        error_code = response.json().get("code", "Unknown code")
        print(f"Entry {entry_number}: Error retrieving information for server {server_id}: {response.status_code} - {error_message} (Code: {error_code})")
        entry_number += 1

    # Pause for 1 second before making the next request (don't go lower unless you want to get RL)
    time.sleep(1)


print("Server details saved to server_details.json")
