const fs = require('fs');
let content = fs.readFileSync('order.html', 'utf8');

const regex = /<label class="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method \*<\/label>[\s\S]*?<div id="mpesa-info"/;

const replacement = <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method *</label>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                        <div id="mpesa-info";

content = content.replace(regex, replacement);
fs.writeFileSync('order.html', content, 'utf8');
