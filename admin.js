// Admin Panel JavaScript

const ADMIN_PIN = '1234'; // Default PIN - Change this to your secure PIN

// Initialize Admin Page
document.addEventListener('DOMContentLoaded', () => {
    setupAdminLogin();
    setupLogout();
});

// ===== Login Setup =====
function setupAdminLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const adminPin = document.getElementById('adminPin');

    if (!loginBtn) return;

    loginBtn.addEventListener('click', handleLogin);
    adminPin.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}

function handleLogin() {
    const pinInput = document.getElementById('adminPin').value;
    const loginMessage = document.getElementById('loginMessage');

    if (pinInput === ADMIN_PIN) {
        loginMessage.textContent = 'Login successful! Redirecting...';
        loginMessage.className = 'message success';
        setTimeout(() => {
            showAdminDashboard();
        }, 500);
    } else {
        loginMessage.textContent = 'Invalid PIN. Please try again.';
        loginMessage.className = 'message error';
        document.getElementById('adminPin').value = '';
    }
}

function showAdminDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    setupAdminDashboard();
    loadAdminItems();
}

// ===== Logout Setup =====
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                document.getElementById('dashboardSection').style.display = 'none';
                document.getElementById('loginSection').style.display = 'flex';
                document.getElementById('adminPin').value = '';
                document.getElementById('addItemForm').reset();
                document.getElementById('editItemForm').reset();
                document.getElementById('imagePreview').style.display = 'none';
            }
        });
    }
}

// ===== Add Item Form =====
function setupAdminDashboard() {
    const addForm = document.getElementById('addItemForm');
    const itemImage = document.getElementById('itemImage');
    const itemImageUrl = document.getElementById('itemImageUrl');

    if (addForm) {
        addForm.addEventListener('submit', handleAddItem);
    }

    // Image preview for add form
    if (itemImage) {
        itemImage.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    showImagePreview(event.target.result, 'previewImg', 'imagePreview');
                    itemImageUrl.value = '';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (itemImageUrl) {
        itemImageUrl.addEventListener('change', () => {
            if (itemImageUrl.value) {
                showImagePreview(itemImageUrl.value, 'previewImg', 'imagePreview');
            }
        });
    }
}

function showImagePreview(imageSrc, previewImgId, previewContainerId) {
    const previewImg = document.getElementById(previewImgId);
    const previewContainer = document.getElementById(previewContainerId);
    previewImg.src = imageSrc;
    previewContainer.style.display = 'block';
}

function handleAddItem(e) {
    e.preventDefault();

    const name = document.getElementById('itemName').value.trim();
    const category = document.getElementById('itemCategory').value;
    const price = document.getElementById('itemPrice').value;
    const description = document.getElementById('itemDescription').value.trim();
    const imageFile = document.getElementById('itemImage').files[0];
    const imageUrl = document.getElementById('itemImageUrl').value.trim();

    const addMessage = document.getElementById('addMessage');

    // Validation
    if (!name || !category || !price || !description) {
        showMessage(addMessage, 'Please fill in all required fields', 'error');
        return;
    }

    // Get or create image
    let imageData = '';
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imageData = event.target.result;
            addItemToMenu(name, category, price, description, imageData);
        };
        reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
        addItemToMenu(name, category, price, description, imageUrl);
    } else {
        showMessage(addMessage, 'Please provide an image', 'error');
    }
}

function addItemToMenu(name, category, price, description, image) {
    const menuData = getMenuData();
    const newId = Math.max(...menuData.map(item => item.id), 0) + 1;

    const newItem = {
        id: newId,
        name: name,
        category: category,
        price: parseFloat(price),
        description: description,
        image: image
    };

    menuData.push(newItem);
    saveMenuData(menuData);

    const addMessage = document.getElementById('addMessage');
    showMessage(addMessage, `"${name}" added successfully!`, 'success');

    document.getElementById('addItemForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
    loadAdminItems();
}

// ===== Load Admin Items List =====
function loadAdminItems() {
    const itemsList = document.getElementById('itemsList');
    const searchInput = document.getElementById('manageSearch');
    const filterSelect = document.getElementById('manageFilter');

    if (!itemsList) return;

    function displayItems() {
        let items = getMenuData();
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const categoryFilter = filterSelect ? filterSelect.value : '';

        if (searchTerm) {
            items = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }

        if (categoryFilter) {
            items = items.filter(item => item.category === categoryFilter);
        }

        if (items.length === 0) {
            itemsList.innerHTML = '<p style="grid-column: 1/-1; padding: 20px; text-align: center; color: #666;">No items found.</p>';
            return;
        }

        itemsList.innerHTML = items.map(item => `
            <div class="admin-item">
                <img src="${item.image}" alt="${item.name}" class="admin-item-image">
                <div class="admin-item-info">
                    <div class="admin-item-name">${item.name}</div>
                    <span class="admin-item-category">${item.category.replace('-', ' ')}</span>
                    <div class="admin-item-price">₹${item.price}</div>
                    <div class="admin-item-description">${item.description}</div>
                </div>
                <div class="admin-item-actions">
                    <button class="admin-btn admin-btn-edit" onclick="editItem(${item.id})">Edit</button>
                    <button class="admin-btn admin-btn-delete" onclick="deleteItem(${item.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    displayItems();

    if (searchInput) {
        searchInput.addEventListener('input', displayItems);
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', displayItems);
    }
}

// ===== Edit Item =====
function editItem(itemId) {
    const item = getMenuData().find(i => i.id === itemId);
    if (!item) return;

    const editModal = document.getElementById('editModal');
    document.getElementById('editItemName').value = item.name;
    document.getElementById('editItemCategory').value = item.category;
    document.getElementById('editItemPrice').value = item.price;
    document.getElementById('editItemDescription').value = item.description;

    showImagePreview(item.image, 'editPreviewImg', 'editImagePreview');

    const editForm = document.getElementById('editItemForm');
    editForm.onsubmit = (e) => handleEditItem(e, itemId);

    editModal.classList.add('show');
}

function handleEditItem(e, itemId) {
    e.preventDefault();

    const name = document.getElementById('editItemName').value.trim();
    const category = document.getElementById('editItemCategory').value;
    const price = document.getElementById('editItemPrice').value;
    const description = document.getElementById('editItemDescription').value.trim();
    const imageFile = document.getElementById('editItemImage').files[0];
    const imageUrl = document.getElementById('editItemImageUrl').value.trim();

    if (!name || !category || !price || !description) {
        showMessage(document.getElementById('editMessage'), 'Please fill in all required fields', 'error');
        return;
    }

    const menuData = getMenuData();
    const itemIndex = menuData.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;

    let imageData = menuData[itemIndex].image;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imageData = event.target.result;
            updateItemInMenu(itemIndex, name, category, price, description, imageData);
        };
        reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
        updateItemInMenu(itemIndex, name, category, price, description, imageUrl);
    } else {
        updateItemInMenu(itemIndex, name, category, price, description, imageData);
    }
}

function updateItemInMenu(itemIndex, name, category, price, description, image) {
    const menuData = getMenuData();
    menuData[itemIndex] = {
        ...menuData[itemIndex],
        name: name,
        category: category,
        price: parseFloat(price),
        description: description,
        image: image
    };

    saveMenuData(menuData);
    showMessage(document.getElementById('editMessage'), `"${name}" updated successfully!`, 'success');

    setTimeout(() => {
        document.getElementById('editModal').classList.remove('show');
        loadAdminItems();
    }, 500);
}

// ===== Delete Item =====
function deleteItem(itemId) {
    const menuData = getMenuData();
    const item = menuData.find(i => i.id === itemId);

    if (!item) return;

    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
        const updatedData = menuData.filter(i => i.id !== itemId);
        saveMenuData(updatedData);
        loadAdminItems();
        alert(`"${item.name}" has been deleted.`);
    }
}

// ===== Modal Handlers =====
function setupModalHandlers() {
    const editModal = document.getElementById('editModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            editModal.classList.remove('show');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === editModal) {
            editModal.classList.remove('show');
        }
    });

    const editImage = document.getElementById('editItemImage');
    const editImageUrl = document.getElementById('editItemImageUrl');

    if (editImage) {
        editImage.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    showImagePreview(event.target.result, 'editPreviewImg', 'editImagePreview');
                    editImageUrl.value = '';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (editImageUrl) {
        editImageUrl.addEventListener('change', () => {
            if (editImageUrl.value) {
                showImagePreview(editImageUrl.value, 'editPreviewImg', 'editImagePreview');
            }
        });
    }
}

function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `message ${type}`;
    setTimeout(() => {
        element.className = 'message';
    }, 3000);
}

// Setup modal handlers on page load
document.addEventListener('DOMContentLoaded', setupModalHandlers);