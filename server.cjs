const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products data
const products = [
    {
        id: 1,
        name: "Cow Milk",
        category: "cow",
        badge: "Best Seller",
        emoji: "🐄",
        price: 180,
        description: "Haddi mazboot aur calcium se bharpoor.",
        benefits: ["Calcium", "Protein", "Immunity"]
    },
    {
        id: 2,
        name: "Donkey Milk",
        category: "donkey",
        badge: "Premium",
        emoji: "🫏",
        price: 500,
        description: "Skin glow aur immunity booster.",
        benefits: ["Glow", "Immunity", "Hydrating"]
    },
    {
        id: 3,
        name: "Dog Milk",
        category: "dog",
        badge: "Exotic",
        emoji: "🐕",
        price: 800,
        description: "High fat aur protein for puppies.",
        benefits: ["High Fat", "Protein", "Energy"]
    },
    {
        id: 4,
        name: "Camel Milk",
        category: "camel",
        badge: "Superfood",
        emoji: "🐪",
        price: 400,
        description: "Diabetes control aur insulin support.",
        benefits: ["Insulin", "Immunity", "Brain"]
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { products });
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════╗
    ║                                                   ║
    ║   🥛 Bondu Milk Shop - AI Assistant Ready!       ║
    ║                                                   ║
    ║   🌐 Local: http://localhost:${PORT}                 ║
    ║                                                   ║
    ║   📦 Features:                                    ║
    ║   • AI Assistant Chat                             ║
    ║   • Smart Search & Filters                        ║
    ║   • Cart Functionality                            ║
    ║   • Responsive Design                             ║
    ║                                                   ║
    ╚═══════════════════════════════════════════════════╝
    `);
});