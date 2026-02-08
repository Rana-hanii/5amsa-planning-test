const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Regex to remove 'animate__*' classes
// Matches class="..." and filters out classes starting with animate__
content = content.replace(/class="([^"]*)"/g, (match, classNames) => {
    let classes = classNames.split(/\s+/);
    classes = classes.filter(c => !c.startsWith('animate__'));
    return `class="${classes.join(' ')}"`;
});

fs.writeFileSync(indexHtmlPath, content);
console.log('Removed animate__ classes from index.html');
