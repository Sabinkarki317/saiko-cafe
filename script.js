// Main JavaScript for Saiko Cafe Website

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Display Featured Items on Home Page
function displayFeaturedItems() {
    const featuredContainer = document.getElementById('featured-items');
    if (!featuredContainer) return;

    const allItems = getMenuData();
    const featured = allItems.slice(0, 6);

    featuredContainer.innerHTML = featured.map(item => `
        <div class="menu-card" onclick="openItemModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <span class="menu-card-category">${item.category.replace('-', ' ')}</span>
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <p class="menu-card-price">₹${item.price}</p>
            </div>
        </div>
    `).join('');
}

// Display All Menu Items with Filtering
function displayMenuItems(filter = 'all', searchTerm = '') {
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) return;

    let items = getMenuData();

    // Filter by category
    if (filter !== 'all') {
        items = items.filter(item => item.category === filter);
    }

    // Filter by search term
    if (searchTerm) {
        items = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (items.length === 0) {
        menuContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No items found.</p>';
        return;
    }

    menuContainer.innerHTML = items.map(item => `
        <div class="menu-card" onclick="openItemModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <span class="menu-card-category">${item.category.replace('-', ' ')}</span>
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <p class="menu-card-price">₹${item.price}</p>
            </div>
        </div>
    `).join('');
}

// Open Item Details Modal
function openItemModal(itemId) {
    const item = getMenuData().find(i => i.id === itemId);
    if (!item) return;

    const modal = document.getElementById('itemModal');
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalName').textContent = item.name;
    document.getElementById('modalCategory').textContent = item.category.replace('-', ' ');
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = `₹${item.price}`;
    document.getElementById('orderBtn').onclick = () => {
        alert(`${item.name} has been added to your order!\n\nTotal: ₹${item.price}\n\nPlease visit the cafe or call for ordering.`);
        modal.classList.remove('show');
    };

    modal.classList.add('show');
}

// Close Modal
function setupModalListeners() {
    const modal = document.getElementById('itemModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
}

// Setup Menu Page Filters and Search
function setupMenuPage() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                const searchTerm = searchInput ? searchInput.value : '';
                displayMenuItems(filter, searchTerm);
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            displayMenuItems(activeFilter, e.target.value);
        });
    }

    displayMenuItems('all');
}

// Setup Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showMessage('formMessage', 'Please fill in all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('formMessage', 'Please enter a valid email address', 'error');
            return;
        }

        // Simulate sending (in real app, send to backend)
        console.log('Form submitted:', { name, email, phone, subject, message });
        showMessage('formMessage', 'Thank you for your message! We will get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Show Message Function
function showMessage(elementId, text, type) {
    const messageEl = document.getElementById(elementId);
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.className = `form-message ${type}`;
    setTimeout(() => {
        messageEl.className = 'form-message';
    }, 5000);
}

// Initialize Page
function initializePage() {
    setupModalListeners();
    displayFeaturedItems();
    setupMenuPage();
    setupContactForm();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initializePage);