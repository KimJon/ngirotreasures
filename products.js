
const ngiroProducts = [
    {
        id: 'honey',
        name: 'Raw Wild Honey',
        description: 'Harvested from traditional hives. Pure, raw, and unprocessed. Natural immune support and rich in antioxidants.',
        image: './Honey.jpg',
        prices: {
            USD: 24.00,
            EUR: 22.00,
            KES: 3000
        }
    },
    {
        id: 'seketet',
        name: 'Seketet Herbal Leaves',
        description: 'Traditional medicinal herb used by Samburu communities. Supports digestion and helps relieve stomach discomfort.',
        image: './Seketet Leaves.jpg',
        prices: {
            USD: 18.00,
            EUR: 16.00,
            KES: 2200
        }
    },
    {
        id: 'soursop',
        name: 'Soursop Leaves',
        description: 'Widely known for powerful antioxidant properties. Supports immune health and promotes relaxation.',
        image: './ngiromountain.jpg',
        prices: {
            USD: 22.00,
            EUR: 20.00,
            KES: 2800
        }
    }
];

// Helper to get currency symbol
function getCurrencySymbol(currency) {
    if (currency === 'USD') return '$';
    if (currency === 'EUR') return '€';
    if (currency === 'KES') return 'Ksh ';
    return '$';
}
