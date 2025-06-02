import requests

def get_file_urls_from_folder(repo_owner, repo_name, folder_path, branch="main", token=None):
    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/git/trees/{branch}?recursive=1"
    headers = {}
    if token:
        headers["Authorization"] = f"token {token}"
    
    response = requests.get(api_url, headers=headers)
    if response.status_code != 200:
        print("Failed to fetch repo tree:", response.status_code, response.text)
        return []

    data = response.json()
    files = []

    for item in data.get("tree", []):
        if item["type"] == "blob" and item["path"].startswith(folder_path):
            raw_url = f"https://raw.githubusercontent.com/{repo_owner}/{repo_name}/{branch}/{item['path']}"
            files.append(raw_url)
    
    return files

# Your specific case
owner = "Devansh-14971"
repo = "Website_template"
branch = "main"
folder = "Website_template"  # no leading or trailing slash
token = None  # Add GitHub token if needed

urls = get_file_urls_from_folder(owner, repo, folder, branch, token)
print(f"Found {len(urls)} files in '{folder}/':")
for url in urls:
    print(url)

# import os

# # === CONFIG ===
# project_dir = "AbcQuotePortal"  # Relative path to your project folder
# github_base_url = 'https://github.com/Devansh-14971/Website_template/blob/main/AbcQuotePortal/'

# # === Collect all file paths ===
# file_urls = []
# for root, _, files in os.walk(project_dir):
#     for file in files:
#         rel_path = os.path.join(root, file).replace("\\", "/")
#         file_urls.append(github_base_url + rel_path)

# # === Write to file ===
# with open('github_file_urls.txt', 'w', encoding='utf-8') as f:
#     f.write("\n".join(file_urls))

# print(f"✅ Wrote {len(file_urls)} URLs to github_file_urls.txt")