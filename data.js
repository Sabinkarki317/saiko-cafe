// Default menu data for Saiko Cafe
const defaultMenuData = [
    // Coffee
    {
        id: 1,
        name: "Espresso",
        category: "coffee",
        price: 120,
        description: "Strong, concentrated coffee shot. Perfect for a quick caffeine boost.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23D2B48C' width='100' height='100'/%3E%3Cellipse cx='50' cy='30' rx='30' ry='15' fill='%238B4513'/%3E%3Crect x='35' y='35' width='30' height='40' fill='%23A0522D' rx='3'/%3E%3Cpath d='M 60 70 Q 65 75 60 80' fill='none' stroke='%238B4513' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "coffee",
        price: 180,
        description: "Equal parts espresso, steamed milk, and foam. Classic and creamy.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23E8D4C0' width='100' height='100'/%3E%3Cellipse cx='50' cy='25' rx='25' ry='12' fill='%23F5DEB3'/%3E%3Crect x='30' y='35' width='40' height='45' fill='%23D2B48C' rx='3'/%3E%3Cpath d='M 70 45 Q 80 45 80 60 Q 80 70 70 70' fill='none' stroke='%238B4513' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Latte",
        category: "coffee",
        price: 200,
        description: "Smooth espresso with steamed milk and a light layer of foam.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23E5C5A0' width='100' height='100'/%3E%3Cellipse cx='50' cy='22' rx='28' ry='10' fill='%23F5DEB3'/%3E%3Crect x='25' y='30' width='50' height='50' fill='%23D2B48C' rx='4'/%3E%3Cpath d='M 75 40 Q 88 40 88 65 Q 88 75 75 75' fill='none' stroke='%238B4513' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Americano",
        category: "coffee",
        price: 140,
        description: "Espresso shots diluted with hot water. Bold and smooth.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23D4A574' width='100' height='100'/%3E%3Cellipse cx='50' cy='28' rx='26' ry='10' fill='%238B4513'/%3E%3Crect x='28' y='35' width='44' height='48' fill='%23654321' rx='3'/%3E%3Cpath d='M 72 50 Q 82 50 82 65 Q 82 72 72 72' fill='none' stroke='%238B4513' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: "Mocha",
        category: "coffee",
        price: 220,
        description: "Espresso with steamed milk and chocolate. Best of both worlds.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23C9946B' width='100' height='100'/%3E%3Cellipse cx='50' cy='25' rx='25' ry='11' fill='%23D2B48C'/%3E%3Crect x='30' y='34' width='40' height='46' fill='%238B6F47' rx='3'/%3E%3Cpath d='M 70 45 Q 80 45 80 60 Q 80 70 70 70' fill='none' stroke='%235C4033' stroke-width='2'/%3E%3C/svg%3E"
    },

    // Drinks
    {
        id: 6,
        name: "Mango Lassi",
        category: "drinks",
        price: 150,
        description: "Refreshing yogurt-based drink with fresh mango. Perfect for hot days.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23FFF8DC' width='100' height='100'/%3E%3Crect x='30' y='20' width='40' height='60' fill='%23FFD700' rx='5'/%3E%3Cellipse cx='50' cy='20' rx='20' ry='8' fill='%23FFE4B5'/%3E%3Cpath d='M 45 15 L 50 8 L 55 15' fill='%23228B22'/%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: "Lemon Iced Tea",
        category: "drinks",
        price: 120,
        description: "Chilled tea with fresh lemon juice and a touch of honey.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F0F8FF' width='100' height='100'/%3E%3Crect x='30' y='15' width='40' height='65' fill='%23FFE4B5' rx='5'/%3E%3Cellipse cx='50' cy='15' rx='20' ry='7' fill='%23FFFACD'/%3E%3Ccircle cx='50' cy='50' r='8' fill='%23FFD700' opacity='0.6'/%3E%3C/svg%3E"
    },
    {
        id: 8,
        name: "Fresh Orange Juice",
        category: "drinks",
        price: 140,
        description: "Freshly squeezed orange juice. Pure and natural.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23FFF8DC' width='100' height='100'/%3E%3Crect x='30' y='20' width='40' height='55' fill='%23FFA500' rx='5'/%3E%3Cellipse cx='50' cy='20' rx='20' ry='8' fill='%23FFB347'/%3E%3C/svg%3E"
    },
    {
        id: 9,
        name: "Watermelon Smoothie",
        category: "drinks",
        price: 160,
        description: "Blended watermelon with yogurt. Refreshing and healthy.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23FFE4E1' width='100' height='100'/%3E%3Crect x='30' y='20' width='40' height='55' fill='%23FF1493' rx='5'/%3E%3Cellipse cx='50' cy='20' rx='20' ry='8' fill='%23FF69B4'/%3E%3C/svg%3E"
    },

    // Nepali Food
    {
        id: 10,
        name: "Momos (6 pcs)",
        category: "nepali-food",
        price: 150,
        description: "Steamed dumplings filled with meat or vegetables. Served with spicy sauce.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Ccircle cx='35' cy='40' r='12' fill='%23F0E68C' stroke='%238B7355' stroke-width='1'/%3E%3Ccircle cx='65' cy='40' r='12' fill='%23F0E68C' stroke='%238B7355' stroke-width='1'/%3E%3Ccircle cx='50' cy='65' r='12' fill='%23F0E68C' stroke='%238B7355' stroke-width='1'/%3E%3C/svg%3E"
    },
    {
        id: 11,
        name: "Chow Mein",
        category: "nepali-food",
        price: 180,
        description: "Stir-fried noodles with vegetables, chicken, or tofu. Authentic Nepali style.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Crect x='20' y='25' width='60' height='50' fill='%23D4A574' rx='3'/%3E%3Cpath d='M 25 35 Q 35 45 25 55 M 40 35 Q 50 45 40 55 M 55 35 Q 65 45 55 55 M 70 35 Q 75 45 70 55' stroke='%238B7355' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"
    },
    {
        id: 12,
        name: "Dal Bhat",
        category: "nepali-food",
        price: 200,
        description: "Lentil curry with rice. Traditional Nepali comfort food with vegetables.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Cpath d='M 20 30 L 50 50 L 80 30 L 80 70 Q 80 80 70 80 L 30 80 Q 20 80 20 70 Z' fill='%23D2B48C'/%3E%3Cpath d='M 30 50 L 50 70 L 70 50' fill='%23CD853F'/%3E%3C/svg%3E"
    },
    {
        id: 13,
        name: "Sel Roti",
        category: "nepali-food",
        price: 80,
        description: "Sweet fried bread rings. Perfect as a snack with tea or coffee.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Ccircle cx='50' cy='50' r='25' fill='%23CD853F' stroke='%238B4513' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='12' fill='%23F5DEB3'/%3E%3C/svg%3E"
    },
    {
        id: 14,
        name: "Aloo Paratha",
        category: "nepali-food",
        price: 120,
        description: "Fluffed bread stuffed with spiced potatoes. Served with yogurt and pickle.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Ccircle cx='50' cy='50' r='28' fill='%23DEB887' stroke='%238B7355' stroke-width='2'/%3E%3Cpath d='M 50 25 L 60 40 L 50 50 L 40 40 Z' fill='%23CD853F'/%3E%3C/svg%3E"
    },
    {
        id: 15,
        name: "Samosa (3 pcs)",
        category: "nepali-food",
        price: 100,
        description: "Crispy pastry pockets filled with spiced potatoes and peas.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23F5DEB3' width='100' height='100'/%3E%3Cpolygon points='30,40 50,25 70,40 50,55' fill='%23CD853F' stroke='%238B4513' stroke-width='1'/%3E%3Cpolygon points='35,55 50,45 65,55 50,65' fill='%23DEB887' stroke='%238B4513' stroke-width='1'/%3E%3Cpolygon points='40,70 50,60 60,70 50,80' fill='%23F4A460' stroke='%238B4513' stroke-width='1'/%3E%3C/svg%3E"
    }
];

function initializeMenuData() {
    if (!localStorage.getItem('saikoMenuData')) {
        localStorage.setItem('saikoMenuData', JSON.stringify(defaultMenuData));
    }
}

function getMenuData() {
    initializeMenuData();
    return JSON.parse(localStorage.getItem('saikoMenuData') || '[]');
}

function saveMenuData(data) {
    localStorage.setItem('saikoMenuData', JSON.stringify(data));
}

initializeMenuData();