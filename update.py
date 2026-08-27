import sys

with open('product.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('<main')
end_idx = content.find('</main>') + 7

new_main = '''<main class="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-brand-light">
    <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row" id="product-detail-container">
            <!-- Injected via JS -->
            <div class="p-12 text-center w-full">Loading product...</div>
        </div>
        
        <div class="mt-16 text-center">
            <a href="index.html#products" class="text-brand-green font-semibold hover:underline">&larr; Back to all products</a>
        </div>
    </div>
</main>'''

js_start = content.find('<script>')
js_end = content.find('</script>', js_start) + 9

new_js = '''<script>
    let currentProduct = null;
    
    function renderProduct() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const allProducts = JSON.parse(localStorage.getItem('ngiro_custom_products') || 'null') || ngiroProducts;
        
        currentProduct = allProducts.find(p => p.id === productId);
        if (!currentProduct) {
            document.getElementById('product-detail-container').innerHTML = '<div class="p-12 text-center text-red-500 w-full">Product not found.</div>';
            return;
        }
        
        document.title = currentProduct.name + " - Ngiro Treasures";
        
        const currency = localStorage.getItem('ngiro_currency') || 'KES';
        const symbol = getCurrencySymbol(currency);
        
        const price = (currentProduct.prices[currency] || currentProduct.prices['KES'] || 0).toFixed(2);
        
        document.getElementById('product-detail-container').innerHTML = 
            <div class="md:w-1/2 bg-gray-100 relative min-h-[400px]">
                <img src="" alt="" class="w-full h-full object-cover object-center absolute inset-0">
            </div>
            <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                <span class="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3 block">Ngiro Treasures</span>
                <h1 class="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4 leading-tight"></h1>
                <div class="text-3xl font-bold text-brand-green mb-6"></div>
                
                <p class="text-gray-600 text-lg mb-8 leading-relaxed"></p>
                
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-8">
                    <button onclick="addToCartAndCheckout('')" class="flex-1 bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition-colors shadow-lg flex justify-center items-center">
                        Buy Now
                    </button>
                    <button onclick="addToCart('')" class="flex-1 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg flex justify-center items-center">
                        <i class="fa-solid fa-cart-plus mr-2"></i> Add to Cart
                    </button>
                </div>
                
                <div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                    <div class="flex items-center text-gray-500 text-sm"><i class="fa-solid fa-leaf text-brand-gold mr-2 text-lg"></i> 100% Natural</div>
                    <div class="flex items-center text-gray-500 text-sm"><i class="fa-solid fa-truck text-brand-gold mr-2 text-lg"></i> Countrywide Delivery</div>
                    <div class="flex items-center text-gray-500 text-sm"><i class="fa-solid fa-seedling text-brand-gold mr-2 text-lg"></i> Sustainably Sourced</div>
                    <div class="flex items-center text-gray-500 text-sm"><i class="fa-solid fa-heart text-brand-gold mr-2 text-lg"></i> Made with Care</div>
                </div>
            </div>
        ;
    }
    
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('ngiro_cart') || '[]');
        let cartQty = JSON.parse(localStorage.getItem('ngiro_cart_qty') || '{}');
        
        if (!cart.includes(productId)) {
            cart.push(productId);
        }
        cartQty[productId] = (cartQty[productId] || 0) + 1;
        
        localStorage.setItem('ngiro_cart', JSON.stringify(cart));
        localStorage.setItem('ngiro_cart_qty', JSON.stringify(cartQty));
        
        updateCartBadge();
        
        const toast = document.createElement('div');
        toast.className = 'fixed top-24 right-4 bg-brand-green text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center transform transition-all duration-300';
        toast.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i> Added to Cart!';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    function addToCartAndCheckout(productId) {
        addToCart(productId);
        window.location.href = 'order.html';
    }
    
    function updateCartBadge() {
        let cart = JSON.parse(localStorage.getItem('ngiro_cart') || '[]');
        const badges = [document.getElementById('cart-badge'), document.getElementById('mobile-cart-badge')];
        let cartQty = JSON.parse(localStorage.getItem('ngiro_cart_qty') || '{}');
        
        let totalItems = 0;
        cart.forEach(id => {
            totalItems += (cartQty[id] || 1);
        });

        badges.forEach(badge => {
            if (badge) {
                badge.textContent = totalItems;
                if (totalItems > 0) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            }
        });
    }
    
    function changeCurrency(currency) {
        localStorage.setItem('ngiro_currency', currency);
        const sel = document.getElementById('currencySelector');
        if (sel) sel.value = currency;
        const mobileSel = document.getElementById('mobileCurrencySelector');
        if (mobileSel) mobileSel.value = currency;
        renderProduct();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const currency = localStorage.getItem('ngiro_currency') || 'KES';
        const sel = document.getElementById('currencySelector');
        if (sel) sel.value = currency;
        const mobileSel = document.getElementById('mobileCurrencySelector');
        if (mobileSel) mobileSel.value = currency;
        
        renderProduct();
        updateCartBadge();
    });
</script>'''

final_content = content[:start_idx] + new_main + content[end_idx:js_start] + new_js + content[js_end:]
with open('product.html', 'w', encoding='utf-8') as f:
    f.write(final_content)
