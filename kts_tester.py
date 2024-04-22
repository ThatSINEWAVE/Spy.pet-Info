import requests
import json

def check_guild_for_bot(guild_id):
    url = f"https://kickthespy.pet/getBot?id={guild_id}"
    response = requests.get(url)
    response_data = response.json()
    result = {}

    if response.status_code == 200:
        if "error" in response_data and response_data["error"] == "Bot not found":
            result["message"] = f"No bot found in the guild with ID {guild_id}"
        else:
            bot_id = response_data["id"]
            bot_name = response_data["username"]
            result["message"] = f"Bot {bot_name} ({bot_id}) is present in the guild with ID {guild_id}"
            result["bot_info"] = response_data
    else:
        result["error"] = f"Error: {response.status_code}"

    return result

if __name__ == "__main__":
    guild_id = input("Enter the guild ID to check: ")
    result = check_guild_for_bot(guild_id)

    # Load existing results from the JSON file or initialize an empty list
    try:
        with open("data/kts_tester_output.json", "r") as f:
            results = json.load(f)
    except (FileNotFoundError, json.decoder.JSONDecodeError):
        results = []  # Initialize as an empty list

    # Append the new result to the list
    results.append(result)

    # Save the updated list to the JSON file
    with open("data/kts_tester_output.json", "w") as f:
        json.dump(results, f, indent=4)

    # Print the result
    print(result.get("message", result.get("error", "Unknown error")))