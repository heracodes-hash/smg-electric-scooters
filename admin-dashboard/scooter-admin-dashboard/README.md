# Scooter Assembly Management System - Admin Dashboard v2.0

## Project Overview

A professional admin dashboard for managing scooter assembly operations with complete engineer management, scooter model creation, and parts inventory tracking.

## Features

### 1. Dashboard
- Quick statistics overview
- Recent engineers list
- Quick action cards
- Real-time inventory status

### 2. Manage Engineers
- ✅ **Auto-generate Engineer ID** (ENG001, ENG002, etc.)
- Add new engineers with full details
- Engineers use auto-generated ID to login
- Delete engineer records
- Track engineer specialization and station

### 3. Add Scooter Model
- ✅ Add **completely NEW scooter models**
- Define motor power, battery capacity, max speed
- ✅ **Manually assign parts** (old or new)
- Multiple parts per scooter with quantities
- Auto-calculate parts summary
- Parts can be existing or new to be added later

### 4. Edit Part List
- ✅ **Add new parts** (scooter-related or non-scooter)
- **Edit existing parts** (price, stock, supplier, quality)
- Delete parts from inventory
- Search functionality (by ID, name, category)
- Quality status tracking (Good, Medium, Low)
- Supports non-scooter items (tools, maintenance, accessories)

### 5. Dashboard Statistics
- Total Scooter Models
- Active Engineers
- Total Parts in Inventory
- Low Stock Items

## Directory Structure

```
scooter-admin-dashboard/
├── index.html           # Main HTML file
├── styles/
│   └── style.css       # Complete CSS styling
├── js/
│   └── app.js          # JavaScript application logic
├── data/               # (For reference)
│   └── parts_database.json
└── README.md           # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Database**: JavaScript objects (ready for MongoDB integration)
- **Architecture**: Single-page application (SPA)
- **No Dependencies**: Pure JavaScript, no frameworks

## How to Use

### Installation
1. Extract the ZIP file
2. Open `index.html` in any modern browser
3. Start using the dashboard immediately!

### Add Engineer
1. Navigate to "Manage Engineers"
2. Click "Add New Engineer"
3. Fill in all details
4. System auto-generates Engineer ID
5. Engineer uses this ID to login

### Add Scooter Model
1. Go to "Add Scooter"
2. Enter model name, motor, battery, speed specs
3. Add required parts with quantities
4. Click "Create Scooter Model"

### Manage Parts
1. Navigate to "Edit Part List"
2. **Add New Part**: Click button and fill details
3. **Edit Part**: Click "Edit" on any part
4. **Delete Part**: Click "Delete" button
5. **Search**: Use search box to find parts

## Database Schema

### Engineers
```json
{
  "id": "ENG001",
  "name": "Rajesh Kumar",
  "email": "rajesh@company.com",
  "phone": "+91-9876543210",
  "station": "Station 1",
  "specialization": "Assembly & Welding",
  "dateCreated": "20 Dec 2025"
}
```

### Scooters
```json
{
  "modelName": "Elite Pro X",
  "motor": "600W",
  "battery": "15Ah",
  "speed": "65km/h",
  "parts": [
    { "id": "P001", "qty": 1 },
    { "id": "P002", "qty": 1 }
  ]
}
```

### Parts
```json
{
  "id": "P001",
  "name": "Brushless Motor (500W)",
  "category": "Powertrain",
  "price": 3500,
  "stock": 45,
  "quality": "Good",
  "supplier": "AutoTech Industries",
  "warranty": "12 months",
  "forScooter": true
}
```

## Key Features

✅ **Auto-generate Engineer ID** - Engineers automatically get ENG001, ENG002, etc. for login

✅ **Custom Scooter Models** - Add unlimited new scooter designs with custom specifications

✅ **Flexible Parts Management** - Add parts related to scooters OR other items (tools, accessories, etc.)

✅ **Update Inventory Only** - No ordering new parts, just track what's in stock

✅ **Search & Filter** - Find parts quickly by ID, name, or category

✅ **Responsive Design** - Works on desktop and mobile devices

✅ **Ready for Backend** - Easily integrate with MongoDB and Node.js APIs

## Integration with Backend

To connect with your backend:

1. Replace in-memory databases with API calls:
```javascript
// Replace this:
let partsDatabase = [...]

// With API call:
fetch('/api/parts')
  .then(res => res.json())
  .then(data => partsDatabase = data)
```

2. Update save operations:
```javascript
fetch('/api/engineers', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newEngineer)
})
```

3. Use REST APIs for all operations:
- GET /api/parts
- POST /api/parts
- PUT /api/parts/:id
- DELETE /api/parts/:id
- GET /api/engineers
- POST /api/engineers
- etc.

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Design

- Desktop: Full-width with fixed sidebar
- Tablet: Adjusted layouts
- Mobile: Hamburger menu (can be added)

## Color Scheme

- **Primary**: #1e3a5f (Dark Blue)
- **Secondary**: #2a5b8e (Medium Blue)
- **Success**: #27ae60 (Green)
- **Danger**: #e74c3c (Red)
- **Background**: #f5f7fa (Light Gray)

## Future Enhancements

- [ ] Mobile menu toggle
- [ ] Export to CSV/Excel
- [ ] Advanced filtering
- [ ] Bulk operations
- [ ] User role management
- [ ] Real-time notifications
- [ ] Database synchronization
- [ ] Audit logs

## Support & Contact

For Team 11 - Scooter Assembly Management System

---

**Version**: 2.0  
**Last Updated**: December 25, 2025  
**Status**: Production Ready ✅
