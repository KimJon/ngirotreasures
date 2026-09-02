const fs = require('fs');
const snippet = '<script>if(location.protocol!=="https:")location.replace("https://"+location.host+location.pathname+location.search+location.hash);</script>';
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
    let c = fs.readFileSync(file, 'utf8');
    if (!c.includes('location.protocol')) {
        c = c.replace('<head>', '<head>\n    ' + snippet);
        fs.writeFileSync(file, c, 'utf8');
        console.log('Updated: ' + file);
    } else {
        console.log('Already has redirect: ' + file);
    }
});
