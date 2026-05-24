// Scooter Assembly Management - Admin Dashboard v2.0

// ============ DATABASES ============

let partsDatabase = [
    { id: 'P001', name: 'Brushless Motor (500W)', category: 'Powertrain', price: 3500, stock: 45, quality: 'Good', supplier: 'AutoTech Industries', warranty: '12 months', forScooter: true },
    { id: 'P002', name: 'Lithium Battery Pack (36V 10Ah)', category: 'Power', price: 8000, stock: 38, quality: 'Good', supplier: 'PowerCell Ltd', warranty: '24 months', forScooter: true },
    { id: 'P003', name: 'Aluminum Frame', category: 'Structure', price: 2500, stock: 52, quality: 'Good', supplier: 'FrameWorks Co', warranty: '24 months', forScooter: true },
    { id: 'P004', name: 'Pneumatic Wheel (8 inch)', category: 'Wheels', price: 1200, stock: 95, quality: 'Good', supplier: 'TireMax Industries', warranty: '6 months', forScooter: true },
    { id: 'P005', name: 'Motor Controller (BLDC)', category: 'Electronics', price: 2200, stock: 40, quality: 'Medium', supplier: 'ElectroLogic Systems', warranty: '12 months', forScooter: true }
];

let scootersDatabase = [
    { modelName: 'ProMax 500', motor: '500W', battery: '10Ah', speed: '60km/h', parts: [{id: 'P001', qty: 1}, {id: 'P002', qty: 1}, {id: 'P003', qty: 1}, {id: 'P004', qty: 2}] },
    { modelName: 'Standard 300', motor: '300W', battery: '8Ah', speed: '45km/h', parts: [{id: 'P001', qty: 1}, {id: 'P002', qty: 1}, {id: 'P003', qty: 1}] }
];

let engineersDatabase = [
    { id: 'ENG001', name: 'Rajesh Kumar', email: 'rajesh@company.com', phone: '+91-9876543210', station: 'Station 1', specialization: 'Assembly & Welding', dateCreated: '20 Dec 2025' },
    { id: 'ENG002', name: 'Priya Singh', email: 'priya@company.com', phone: '+91-8765432100', station: 'Station 2', specialization: 'Electronics & Testing', dateCreated: '21 Dec 2025' }
];

let nextEngineerId = 3;

// ============ NAVIGATION ============

function showSection(event, sectionId) {
    event.preventDefault();
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.closest('.nav-link').classList.add('active');
}

function viewEngineerList(event) {
    event.preventDefault();
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('engineers').classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
}

// ============ MODALS ============

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ============ ENGINEER MANAGEMENT ============

function generateEngineerId() {
    const newId = 'ENG' + String(nextEngineerId).padStart(3, '0');
    nextEngineerId++;
    return newId;
}

function saveEngineer(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const phone = form.elements[2].value;
    const station = form.elements[3].value;
    const specialization = form.elements[4].value;

    const engineerId = generateEngineerId();
    const newEngineer = { id: engineerId, name, email, phone, station, specialization, dateCreated: new Date().toLocaleDateString() };
    engineersDatabase.push(newEngineer);

    alert(`✅ Engineer added successfully!\n\n🆔 ID: ${engineerId}\n👤 Name: ${name}\n📧 Email: ${email}\n\n⚠️ Engineer uses "${engineerId}" to login`);

    form.reset();
    closeModal('engineerModal');
    loadEngineers();
}

function loadEngineers() {
    const tbody = document.getElementById('engineersTable');
    tbody.innerHTML = engineersDatabase.map(eng => `
        <tr>
            <td><span class="engineer-id-badge">${eng.id}</span></td>
            <td>${eng.name}</td>
            <td>${eng.email}</td>
            <td>${eng.station}</td>
            <td>${eng.specialization}</td>
            <td><button class="btn btn-sm btn-danger" onclick="deleteEngineer('${eng.id}')">Delete</button></td>
        </tr>
    `).join('');
}

function deleteEngineer(id) {
    if (confirm('Delete this engineer?')) {
        engineersDatabase = engineersDatabase.filter(e => e.id !== id);
        alert('✅ Engineer deleted');
        loadEngineers();
    }
}

// ============ SCOOTER MANAGEMENT ============

function addPartRow() {
    const container = document.getElementById('partsAssignmentContainer');
    const row = document.createElement('div');
    row.className = 'parts-assignment-row';
    row.innerHTML = `
        <input type="text" placeholder="Part ID (e.g., P001)" class="part-id-input" style="width: 40%;">
        <input type="number" placeholder="Quantity" class="part-qty-input" min="1" value="1" style="width: 30%;">
        <button type="button" class="btn btn-sm btn-secondary" onclick="removePartRow(this)">Remove</button>
    `;
    container.appendChild(row);
    updateScooterPartsSummary();
}

function removePartRow(button) {
    button.parentElement.remove();
    updateScooterPartsSummary();
}

function updateScooterPartsSummary() {
    const container = document.getElementById('partsAssignmentContainer');
    const rows = container.querySelectorAll('.parts-assignment-row');
    const tbody = document.getElementById('scooterPartsSummary');

    let html = '';
    rows.forEach(row => {
        const partId = row.querySelector('.part-id-input').value;
        const qty = row.querySelector('.part-qty-input').value;
        if (partId && qty) {
            const part = partsDatabase.find(p => p.id === partId);
            const partName = part ? part.name : '(New part to be added)';
            html += `<tr><td>${partId}</td><td>${qty}</td><td style="font-size: 12px; color: #666;">${partName}</td></tr>`;
        }
    });

    tbody.innerHTML = html || '<tr><td colspan="3" style="text-align: center; color: #999;">Add parts above</td></tr>';
}

function addScooter(event) {
    event.preventDefault();
    const form = event.target;
    const modelName = form.elements[0].value;
    const motor = form.elements[1].value;
    const battery = form.elements[2].value;
    const speed = form.elements[3].value;

    const container = document.getElementById('partsAssignmentContainer');
    const rows = container.querySelectorAll('.parts-assignment-row');
    const parts = [];

    rows.forEach(row => {
        const partId = row.querySelector('.part-id-input').value;
        const qty = row.querySelector('.part-qty-input').value;
        if (partId && qty) parts.push({ id: partId, qty: parseInt(qty) });
    });

    if (parts.length === 0) {
        alert('❌ Add at least one part!');
        return;
    }

    const newScooter = { modelName, motor: motor + 'W', battery: battery + 'Ah', speed: speed + 'km/h', parts };
    scootersDatabase.push(newScooter);

    alert(`✅ Scooter model added!\n\n🛴 Model: ${modelName}\n⚡ Motor: ${motor}W\n🔋 Battery: ${battery}Ah\n💨 Speed: ${speed}km/h\n📦 Parts: ${parts.length}`);
    resetScooterForm();
}

function resetScooterForm() {
    document.querySelector('#addScooter form').reset();
    const container = document.getElementById('partsAssignmentContainer');
    container.innerHTML = `
        <div class="parts-assignment-row">
            <input type="text" placeholder="Part ID (e.g., P001)" class="part-id-input" style="width: 40%;">
            <input type="number" placeholder="Quantity" class="part-qty-input" min="1" value="1" style="width: 30%;">
            <button type="button" class="btn btn-sm btn-secondary" onclick="removePartRow(this)">Remove</button>
        </div>
    `;
    updateScooterPartsSummary();
}

// ============ PARTS MANAGEMENT ============

function savePart(event) {
    event.preventDefault();
    const form = event.target;
    const partId = form.elements[0].value;

    if (partsDatabase.find(p => p.id === partId)) {
        alert('❌ Part ID already exists!');
        return;
    }

    const newPart = {
        id: partId,
        name: form.elements[1].value,
        category: form.elements[2].value,
        price: parseInt(form.elements[3].value),
        stock: parseInt(form.elements[4].value),
        quality: form.elements[5].value,
        supplier: form.elements[6].value,
        warranty: form.elements[7].value,
        forScooter: document.getElementById('forScooter').checked
    };

    partsDatabase.push(newPart);
    alert(`✅ Part added!\n\n📦 ID: ${partId}\n🏷️ Name: ${newPart.name}\n💰 Price: ₹${newPart.price}`);
    form.reset();
    closeModal('addPartModal');
    loadParts();
}

function updatePart(event) {
    event.preventDefault();
    const partId = document.getElementById('editPartId').value;
    const part = partsDatabase.find(p => p.id === partId);

    if (part) {
        part.stock = parseInt(document.getElementById('editPartStock').value);
        part.price = parseInt(document.getElementById('editPartPrice').value);
        part.quality = document.getElementById('editPartQuality').value;
        part.supplier = document.getElementById('editPartSupplier').value;

        alert(`✅ Part updated!\n\n📦 ${part.name}\n💰 Price: ₹${part.price}\n📊 Stock: ${part.stock}`);
    }

    closeModal('editPartModal');
    loadParts();
}

function editPartUI(partId) {
    const part = partsDatabase.find(p => p.id === partId);
    if (part) {
        document.getElementById('editPartId').value = part.id;
        document.getElementById('editPartStock').value = part.stock;
        document.getElementById('editPartPrice').value = part.price;
        document.getElementById('editPartQuality').value = part.quality;
        document.getElementById('editPartSupplier').value = part.supplier;
        openModal('editPartModal');
    }
}

function deletePart(partId) {
    if (confirm('Delete this part?')) {
        const index = partsDatabase.findIndex(p => p.id === partId);
        if (index > -1) {
            const partName = partsDatabase[index].name;
            partsDatabase.splice(index, 1);
            alert(`✅ Part "${partName}" deleted!`);
            loadParts();
        }
    }
}

function loadParts() {
    const tbody = document.getElementById('partsTable');
    tbody.innerHTML = partsDatabase.map(part => `
        <tr>
            <td><strong>${part.id}</strong></td>
            <td>${part.name}</td>
            <td>${part.category}</td>
            <td>${part.stock}</td>
            <td>₹${part.price.toLocaleString()}</td>
            <td><span class="status-badge status-${part.quality === 'Good' ? 'good' : 'medium'}">${part.quality}</span></td>
            <td>${part.forScooter ? '✓' : '✗'}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editPartUI('${part.id}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deletePart('${part.id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function searchParts() {
    const searchTerm = document.getElementById('partsSearchInput').value.toLowerCase();
    const tbody = document.getElementById('partsTable');
    const filtered = partsDatabase.filter(p => 
        p.id.toLowerCase().includes(searchTerm) || 
        p.name.toLowerCase().includes(searchTerm) || 
        p.category.toLowerCase().includes(searchTerm)
    );

    tbody.innerHTML = filtered.map(part => `
        <tr>
            <td><strong>${part.id}</strong></td>
            <td>${part.name}</td>
            <td>${part.category}</td>
            <td>${part.stock}</td>
            <td>₹${part.price.toLocaleString()}</td>
            <td><span class="status-badge status-${part.quality === 'Good' ? 'good' : 'medium'}">${part.quality}</span></td>
            <td>${part.forScooter ? '✓' : '✗'}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editPartUI('${part.id}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deletePart('${part.id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

// ============ INITIALIZATION ============

document.addEventListener('DOMContentLoaded', function() {
    loadEngineers();
    loadParts();

    window.onclick = function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target == modal) modal.classList.remove('active');
        });
    }
});
