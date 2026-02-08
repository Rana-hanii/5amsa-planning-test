const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Regex to remove 'wow' and 'fade*-animation' classes
// Matches class="..." and removes specific classes within it
content = content.replace(/class="([^"]*)"/g, (match, classNames) => {
    let classes = classNames.split(/\s+/);
    classes = classes.filter(c => !c.match(/^(wow|fade.*-animation)$/));
    return `class="${classes.join(' ')}"`;
});

fs.writeFileSync(indexHtmlPath, content);
console.log('Removed wow and animation classes from index.html');
