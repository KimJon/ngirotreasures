const fs = require('fs');
const glob = require('fs').readdirSync('.');

glob.filter(f => f.endsWith('.html')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace WhatsApp links that end exactly with the number (no query string)
    content = content.replace(/"https:\/\/wa\.me\/254792465156"/g, '"https://wa.me/254792465156?text=Hello%20Ngiro%20Treasures,%20I%20would%20like%20to%20inquire%20about%20your%20products."');
    fs.writeFileSync(file, content, 'utf8');
});
