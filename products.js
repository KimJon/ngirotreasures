
const ngiroProducts = [
    {
        id: 'honey_1kg',
        name: '1KG Raw Wild Honey',
        description: 'Pure, raw honey harvested from the rich flora of Mt. Ngiro. Naturally sweet, unprocessed and packed with nutrients, enzymes and antioxidants.',
        image: './1kg Honey.jpg?v=5',
        prices: {
            USD: 7.50,
            EUR: 7.00,
            KES: 1000
        }
    },
    {
        id: 'honey_half_kg',
        name: '1/2KG Raw Wild Honey',
        description: 'Pure, raw honey harvested from the rich flora of Mt. Ngiro. Naturally sweet, unprocessed and packed with nutrients, enzymes and antioxidants.',
        image: './12kg honey .jpeg?v=5',
        prices: {
            USD: 4.00,
            EUR: 3.50,
            KES: 500
        }
    },
    {
        id: 'soursop_tea',
        name: 'Soursop Restore Tea (100g)',
        description: 'A natural herbal blend made from soursop leaves. Traditionally used to support immune health, hormonal balance and overall wellness.',
        image: './soursoup front.jpeg?v=3',
        prices: {
            USD: 4.00,
            EUR: 3.50,
            KES: 500
        }
    },
    {
        id: 'guava_tea',
        name: 'Guava Digest Tea (100g)',
        description: 'A soothing herbal tea made from guava leaves. Supports healthy digestion, reduces bloating and promotes a healthy gut.',
        image: './guava digest front.jpeg?v=3',
        prices: {
            USD: 3.00,
            EUR: 2.80,
            KES: 400
        }
    },
    {
        id: 'seketet',
        name: 'Seketet Le Ngiro (100g)',
        description: 'A traditional African herb known for its cleansing and detoxifying properties. It supports overall wellness and vitality.',
        image: './Seketet Leaves.jpg?v=3',
        prices: {
            USD: 2.50,
            EUR: 2.20,
            KES: 300
        }
    }
];

// Helper to get currency symbol
function getCurrencySymbol(currency) {
    if (currency === 'USD') return '$';
    if (currency === 'EUR') return '\u20AC';
    if (currency === 'KES') return 'Ksh ';
    return 'Ksh ';
}

// FORCE CACHE CLEAR for old custom products to ensure catalogue images show
try {
    localStorage.removeItem('ngiro_custom_products');
} catch (e) {}



