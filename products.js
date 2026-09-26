
const ngiroProducts = [
    {
        id: 'honey_1litre',
        name: '1 Litre Raw Wild Honey',
        description: 'Pure, raw wild honey harvested from the pristine forests of Mt. Ngiro, Samburu. This 1-litre jar is perfect for families and daily use. Naturally sweet, unprocessed and packed with nutrients, enzymes and antioxidants.',
        image: './ngiro honey display.jpeg?v=1',
        prices: {
            USD: 1.90,
            EUR: 1.75,
            KES: 250
        }
    },
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
    },
    {
        id: 'ngiro_ratish',
        name: 'Ngiro Ratish (100g)',
        description: 'Ngiro Ratish is a rare and treasured traditional herb indigenous to the highlands of Mt. Ngiro in Samburu County, Kenya. Harvested and used for generations by the Samburu community, this powerful herb is prized for its wide range of natural wellness benefits. It is traditionally prepared as a herbal tea or decoction and is known to support energy and vitality, boost immune function, aid digestion and gut health, promote hormonal balance, and cleanse the body of toxins. Each 100g pack is carefully hand-harvested, sun-dried and packaged to preserve its natural potency. 100% natural, unprocessed and free from additives.',
        image: './ngiro ratish.jpeg?v=1',
        images: ['./ngiro ratish.jpeg?v=1', './ratish ngiro.jpeg?v=1'],
        prices: {
            USD: 3.50,
            EUR: 3.20,
            KES: 450
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



