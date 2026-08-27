const fs = require('fs');
const glob = require('fs').readdirSync('.');

glob.filter(f => f.endsWith('.html')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace broken EUR symbols
    content = content.replace(/EUR \(.*?\)/g, 'EUR (€)');
    fs.writeFileSync(file, content, 'utf8');
});
