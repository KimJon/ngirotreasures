const fs = require('fs');
let content = fs.readFileSync('order.html', 'utf8');

const oldGridRegex = /<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Order Total Preview -->/;

const newGrid = <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <label class="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-green-50">
                                <input type="radio" name="payment" value="M-PESA" class="sr-only" required onchange="document.getElementById('mpesa-info').classList.remove('hidden')">
                                <span class="text-2xl mb-1">📱</span>
                                <span class="text-xs font-bold text-gray-700">M-PESA</span>
                            </label>
                            <label class="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-green-50">
                                <input type="radio" name="payment" value="PayPal" class="sr-only" onchange="document.getElementById('mpesa-info').classList.add('hidden')">
                                <span class="text-2xl mb-1">💳</span>
                                <span class="text-xs font-bold text-gray-700">PayPal</span>
                            </label>
                            <label class="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-green-50">
                                <input type="radio" name="payment" value="Bank Transfer" class="sr-only" onchange="document.getElementById('mpesa-info').classList.add('hidden')">
                                <span class="text-2xl mb-1">🏦</span>
                                <span class="text-xs font-bold text-gray-700">Bank Transfer</span>
                            </label>
                            <label class="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-green-50">
                                <input type="radio" name="payment" value="SWIFT" class="sr-only" onchange="document.getElementById('mpesa-info').classList.add('hidden')">
                                <span class="text-2xl mb-1">🌍</span>
                                <span class="text-xs font-bold text-gray-700">SWIFT</span>
                            </label>
                            <label class="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-green-50">
                                <input type="radio" name="payment" value="Crypto" class="sr-only" onchange="document.getElementById('mpesa-info').classList.add('hidden')">
                                <span class="text-2xl mb-1">₿</span>
                                <span class="text-xs font-bold text-gray-700">Crypto</span>
                            </label>
                        </div>
                        <div id="mpesa-info" class="hidden mt-4 bg-green-50 border border-green-200 p-4 rounded-lg text-sm text-green-800">
                            <p class="font-bold mb-1"><i class="fa-solid fa-mobile-screen mr-2"></i>M-PESA Payment Details:</p>
                            <p><strong>Till Number:</strong> 1531862</p>
                            <p><strong>Phone Number:</strong> 0792465156</p>
                            <p class="mt-2 text-xs opacity-80">You can pay now or after submitting your order via WhatsApp.</p>
                        </div>
                    </div>

                    <!-- Order Total Preview -->;

content = content.replace(oldGridRegex, newGrid);
fs.writeFileSync('order.html', content, 'utf8');
