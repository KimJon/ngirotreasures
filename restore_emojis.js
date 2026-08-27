const fs = require('fs');
let content = fs.readFileSync('order.html', 'utf8');

content = content.replace(/ðŸ“±/g, '📱');
content = content.replace(/ðŸ’³/g, '💳');
content = content.replace(/ðŸ ¦/g, '🏦');
content = content.replace(/ðŸŒ /g, '🌍');
content = content.replace(/â‚¿/g, '₿');

fs.writeFileSync('order.html', content, 'utf8');
