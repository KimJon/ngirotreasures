const fs = require('fs');
const tag = '<meta name="google-site-verification" content="UYRw3lvpKfU8yI7rDibkqUoUFNeD63JhBoYr3vjBmnI">';
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
    let c = fs.readFileSync(file, 'utf8');
    if (!c.includes('google-site-verification')) {
        c = c.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n    ' + tag);
        fs.writeFileSync(file, c, 'utf8');
        console.log('Updated: ' + file);
    } else {
        console.log('Already present: ' + file);
    }
});
