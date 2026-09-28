const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const popup = `
    <!-- ===== NGIRO RATISH NEW PRODUCT POPUP ===== -->
    <div id="ratish-popup" class="fixed inset-0 z-[999] flex items-center justify-center p-4 hidden">
        <div onclick="closeRatishPopup()" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden" id="ratish-popup-card">
            <div class="absolute top-4 left-4 z-10 bg-brand-gold text-brand-dark text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest shadow">&#x2728; New Product</div>
            <button onclick="closeRatishPopup()" class="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow"><i class="fa-solid fa-xmark"></i></button>
            <div class="h-56 bg-gray-100 overflow-hidden">
                <img src="./ngiro ratish.jpeg" alt="Ngiro Ratish" class="w-full h-full object-cover object-center">
            </div>
            <div class="p-6">
                <p class="text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">Ngiro Treasures &mdash; Just Arrived</p>
                <h2 class="text-2xl font-serif font-bold text-brand-dark mb-2">Ngiro Ratish (100g)</h2>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">A rare traditional herb from Mt. Ngiro, Samburu &mdash; hand-harvested for generations. Boosts energy, immunity and gut health. 100% natural &amp; unprocessed.</p>
                <div class="flex flex-wrap gap-2 mb-5">
                    <span class="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">&#x26A1; Boosts Energy</span>
                    <span class="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">&#x1F6E1; Immune Support</span>
                    <span class="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">&#x1F33F; Gut Health</span>
                    <span class="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">&#x2728; 100% Natural</span>
                </div>
                <div class="flex items-center justify-between mb-5">
                    <div><span class="text-3xl font-bold text-brand-green">Ksh 450</span><span class="text-gray-400 text-sm ml-2">/ 100g</span></div>
                    <span class="text-xs text-gray-400">Also in USD &amp; EUR</span>
                </div>
                <div class="flex gap-3">
                    <a href="product.html?id=ngiro_ratish" onclick="closeRatishPopup()" class="flex-1 bg-brand-green text-white text-center px-4 py-3 rounded-full font-bold hover:bg-green-800 transition-colors shadow text-sm"><i class="fa-solid fa-bag-shopping mr-1"></i> Buy Now</a>
                    <a href="https://wa.me/254792465156?text=Hello%20Ngiro%20Treasures%2C%20I%20am%20interested%20in%20the%20new%20Ngiro%20Ratish%20product." target="_blank" onclick="closeRatishPopup()" class="flex-1 bg-[#25D366] text-white text-center px-4 py-3 rounded-full font-bold hover:bg-green-500 transition-colors shadow text-sm"><i class="fa-brands fa-whatsapp mr-1"></i> Inquire</a>
                </div>
                <button onclick="closeRatishPopup(true)" class="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors py-1">Maybe later &mdash; continue browsing</button>
            </div>
        </div>
    </div>
    <script>
        function showRatishPopup() {
            if (sessionStorage.getItem('ratish_dismissed')) return;
            var popup = document.getElementById('ratish-popup');
            popup.classList.remove('hidden');
            popup.classList.add('flex');
            var card = document.getElementById('ratish-popup-card');
            card.style.cssText = 'transform:scale(0.85);opacity:0;transition:transform 0.4s cubic-bezier(.34,1.56,.64,1),opacity 0.3s ease';
            setTimeout(function(){ card.style.transform='scale(1)'; card.style.opacity='1'; }, 20);
        }
        function closeRatishPopup(dismiss) {
            var card = document.getElementById('ratish-popup-card');
            card.style.transform='scale(0.9)'; card.style.opacity='0';
            setTimeout(function(){
                var popup = document.getElementById('ratish-popup');
                popup.classList.add('hidden'); popup.classList.remove('flex');
            }, 280);
            if (dismiss) sessionStorage.setItem('ratish_dismissed','1');
        }
        setTimeout(showRatishPopup, 3000);
    <\/script>
`;

// Insert before </body>
content = content.replace('</body>', popup + '\n</body>');
fs.writeFileSync('index.html', content, 'utf8');
console.log('Popup added successfully');
