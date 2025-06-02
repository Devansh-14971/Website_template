const fs = require('fs');
const path = require('path');

// === CONFIG ===
const projectDir = path.join(__dirname, 'AbcQuotePortal'); // Adjust if needed
const githubBaseUrl = 'https://github.com/Devansh-14971/Website_template/blob/main/AbcQuotePortal/';

// === Helper to recursively collect files ===
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.relative(projectDir, filePath).replace(/\\/g, '/'));
        }
    });

    return arrayOfFiles;
}

// === Generate URLs ===
const files = getAllFiles(projectDir);
const urls = files.map(file => githubBaseUrl + file);

// === Save to a text file ===
fs.writeFileSync('github_file_urls.txt', urls.join('\n'), 'utf-8');

console.log(`URLs written to github_file_urls.txt (${urls.length} files)`);