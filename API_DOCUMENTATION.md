# Rail Exchange™ - Complete API Documentation

## Listings API - Full Specification

### Overview
Complete RESTful API for managing marketplace listings including equipment, tools, materials, rentals, services, and real estate.

---

## Listings Endpoints

### 1. Get All Listings
**GET** `/api/listings`

Returns all active listings sorted by creation date (newest first).

**Response:**
```json
{
  "listings": [
    {
      "_id": "...",
      "title": "2018 Ford F550 Hi-Rail Truck",
      "category": "hi-rail",
      "price": 129500,
      "location": "Chicago, IL",
      "sellerId": "...",
      "images": ["url1", "url2"],
      "attributes": {
        "manufacturer": "Ford",
        "year": 2018,
        "condition": "used"
      },
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

**Query:** Filters only active listings (`isActive: true`)

---

### 2. Advanced Search
**POST** `/api/listings/search`

Advanced search with multiple filter criteria.

**Request Body:**
```json
{
  "q": "ford truck",              // Text search (title/description)
  "category": "hi-rail",           // Category filter
  "location": "Chicago",           // Location filter
  "minPrice": 50000,               // Minimum price
  "maxPrice": 150000,              // Maximum price
  "manufacturer": "ford",          // Manufacturer filter
  "yearMin": 2015,                 // Minimum year
  "yearMax": 2020                  // Maximum year
}
```

**Response:**
```json
{
  "listings": [...]
}
```

**Search Logic:**
- Text search: Case-insensitive regex on `title` and `description`
- Category: Exact match
- Location: Case-insensitive regex
- Manufacturer: Case-insensitive regex on `attributes.manufacturer`
- Price range: Numeric comparison
- Year range: Numeric comparison on `attributes.year`
- All filters are optional and combinable

---

### 3. Create Listing
**POST** `/api/listings/create`

Create a new marketplace listing (seller authentication required).

**Request Body:**
```json
{
  "title": "2020 Hi-Rail Pickup Truck",
  "category": "hi-rail",
  "description": "Excellent condition, low miles...",
  "price": 89000,
  "location": "Denver, CO",
  "sellerId": "user_123",
  "images": [],
  "attributes": {
    "manufacturer": "Ford",
    "model": "F350",
    "year": 2020,
    "condition": "used",
    "mileage": 45000
  }
}
```

**Response:**
```json
{
  "listing": {
    "_id": "...",
    "slug": "2020-hi-rail-pickup-truck",
    "isActive": true,
    ...
  }
}
```

**Features:**
- Auto-generates SEO-friendly slug
- Sets `isActive: true` by default
- Requires `sellerId` authentication

---

### 4. Get Listings by Category
**GET** `/api/listings/categories/[cat]`

Get all active listings for a specific category.

**Example:** `/api/listings/categories/hi-rail`

**Response:**
```json
{
  "listings": [...]
}
```

**Supported Categories:**
- `hi-rail`
- `equipment`
- `tools`
- `materials`
- `rental`
- `real-estate`
- `services`

---

### 5. Get/Update/Delete Specific Listing
**GET/PUT/DELETE** `/api/listings/[id]`

#### GET - Retrieve Single Listing
**GET** `/api/listings/abc123`

**Response:**
```json
{
  "listing": {
    "_id": "abc123",
    "title": "...",
    ...
  }
}
```

#### PUT - Update Listing
**PUT** `/api/listings/abc123`

**Request Body:**
```json
{
  "title": "Updated Title",
  "price": 95000,
  "description": "Updated description..."
}
```

**Response:**
```json
{
  "listing": {
    "_id": "abc123",
    ...updated fields
  }
}
```

#### DELETE - Remove Listing
**DELETE** `/api/listings/abc123`

**Response:**
```json
{
  "success": true
}
```

---

### 6. Get User's Own Listings
**GET** `/api/listings/my`

Returns all listings owned by the authenticated user.

**Headers Required:**
```
user-id: [authenticated_user_id]
```

**Response:**
```json
{
  "listings": [
    // All listings where sellerId matches user-id
  ]
}
```

**Sorting:** Newest first (`createdAt: -1`)

---

### 7. Get Listings by Seller
**POST** `/api/listings/by-seller`

Get all active listings from a specific seller.

**Request Body:**
```json
{
  "sellerId": "seller_123"
}
```

**Response:**
```json
{
  "listings": [...]
}
```

**Use Cases:**
- Seller profile pages
- Related listings from same seller
- Seller portfolio display

---

## Rentals API

### Overview
Rentals use the same `Listing` model with `category: "rental"`. This unified approach simplifies data management while allowing rental-specific attributes.

### Rental-Specific Attributes
```json
{
  "category": "rental",
  "attributes": {
    "rateDaily": 500,
    "rateWeekly": 2500,
    "rateMonthly": 8000,
    "availableFrom": "2024-01-01",
    "availableUntil": "2024-12-31",
    "minRentalDays": 7,
    "deliveryAvailable": true,
    "requiresDeposit": true,
    "depositAmount": 5000
  }
}
```

---

### 8. Get All Rentals
**GET** `/api/rentals`

Returns all active rental listings.

**Response:**
```json
{
  "rentals": [
    {
      "_id": "...",
      "title": "Excavator - Daily Rental",
      "category": "rental",
      "location": "Phoenix, AZ",
      "attributes": {
        "rateDaily": 750,
        "rateWeekly": 3500
      }
    }
  ]
}
```

**Query:** `category: "rental"` AND `isActive: true`

---

### 9. Search Rentals
**POST** `/api/rentals/search`

Filter rentals by location and rate.

**Request Body:**
```json
{
  "location": "Phoenix",
  "rateMin": 500,
  "rateMax": 1000
}
```

**Response:**
```json
{
  "rentals": [...]
}
```

**Filters:**
- Location: Case-insensitive regex
- Rate range: Filters on `attributes.rateDaily`
- All filters optional

---

### 10. Get Rentals for Map Display
**GET** `/api/rentals/map`

Optimized endpoint for map display with minimal data.

**Response:**
```json
{
  "rentals": [
    {
      "_id": "...",
      "title": "Excavator Rental",
      "location": "Phoenix, AZ",
      "price": 750,
      "attributes": {...},
      "images": ["url1"],
      "slug": "excavator-rental"
    }
  ]
}
```

**Fields Returned:**
- `title` - Listing name
- `location` - Location string
- `price` - Daily rate
- `attributes` - Full attributes object
- `images` - Image URLs
- `slug` - SEO slug

**Use Case:** Map markers with popups showing basic info

**Note:** Ready for coordinates when you add `lat`/`lng` fields to model

---

### 11. Get Single Rental
**GET** `/api/rentals/[id]`

Get specific rental listing by ID.

**Example:** `/api/rentals/abc123`

**Response:**
```json
{
  "rental": {
    "_id": "abc123",
    "category": "rental",
    ...full listing data
  }
}
```

**Validation:** Ensures `category === "rental"`

---

## Data Model

### Listing Schema
```typescript
{
  _id: ObjectId
  sellerId: String (required)
  category: String (required)
  title: String (required)
  description: String
  price: Number
  location: String (required)
  slug: String (auto-generated)
  
  images: [String]
  
  attributes: Object {
    // Dynamic fields based on category
    manufacturer?: String
    year?: Number
    condition?: String
    model?: String
    mileage?: Number
    
    // Rental-specific
    rateDaily?: Number
    rateWeekly?: Number
    rateMonthly?: Number
    availableFrom?: String
    availableUntil?: String
    minRentalDays?: Number
    deliveryAvailable?: Boolean
    
    // Equipment-specific
    hours?: Number
    serialNumber?: String
    weight?: Number
    
    // Real estate-specific
    squareFeet?: Number
    zoning?: String
    lotSize?: String
  }
  
  isActive: Boolean (default: true)
  isFeatured: Boolean (default: false)
  
  metrics: {
    views: Number
    inquiries: Number
    monthlyViews: Number
    monthlyInquiries: Number
  }
  
  createdAt: Date
  updatedAt: Date
}
```

---

## Authentication & Authorization

### Required Headers
Most endpoints require authentication:

```
user-id: [authenticated_user_id]
Authorization: Bearer [jwt_token]
```

### Permissions

**Public (No Auth Required):**
- GET `/api/listings`
- POST `/api/listings/search`
- GET `/api/listings/categories/[cat]`
- GET `/api/listings/[id]`
- GET `/api/rentals`
- POST `/api/rentals/search`
- GET `/api/rentals/map`
- GET `/api/rentals/[id]`

**Seller Auth Required:**
- POST `/api/listings/create`
- PUT `/api/listings/[id]` (owner only)
- DELETE `/api/listings/[id]` (owner only)
- GET `/api/listings/my`

**Admin Auth Required:**
- DELETE `/api/listings/[id]` (any listing)
- Bulk operations
- Status changes

---

## Error Responses

### Standard Error Format
```json
{
  "error": "Error message description",
  "code": "ERROR_CODE",
  "status": 400
}
```

### Common Error Codes

**400 Bad Request**
```json
{
  "error": "Missing required field: title"
}
```

**401 Unauthorized**
```json
{
  "error": "Authentication required"
}
```

**403 Forbidden**
```json
{
  "error": "You don't have permission to edit this listing"
}
```

**404 Not Found**
```json
{
  "error": "Listing not found"
}
```

**500 Internal Server Error**
```json
{
  "error": "Database connection failed"
}
```

---

## Rate Limiting

**Limits:**
- Public endpoints: 100 requests/minute
- Authenticated: 500 requests/minute
- Admin: Unlimited

**Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```

---

## Pagination

For endpoints returning large datasets, add pagination parameters:

**Query Parameters:**
```
?page=1&limit=20&sort=-createdAt
```

**Response:**
```json
{
  "listings": [...],
  "pagination": {
    "total": 250,
    "page": 1,
    "pages": 13,
    "limit": 20
  }
}
```

---

## Search Best Practices

### Text Search Optimization
1. Use specific keywords
2. Combine with category filter for better results
3. Add location for geographic filtering

### Example Queries

**Find hi-rail trucks in Chicago under $100k:**
```json
{
  "q": "hi-rail truck",
  "category": "hi-rail",
  "location": "Chicago",
  "maxPrice": 100000
}
```

**Find rental equipment in Phoenix:**
```json
{
  "location": "Phoenix",
  "rateMin": 500,
  "rateMax": 1500
}
```

**Find used Ford equipment from 2015-2020:**
```json
{
  "manufacturer": "ford",
  "yearMin": 2015,
  "yearMax": 2020,
  "q": "used"
}
```

---

## Webhooks (Future Feature)

Register webhooks for events:

**Events:**
- `listing.created`
- `listing.updated`
- `listing.deleted`
- `listing.inquiry`
- `listing.view_milestone` (100, 500, 1000 views)

**Webhook Payload:**
```json
{
  "event": "listing.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "listingId": "...",
    "sellerId": "...",
    "category": "hi-rail"
  }
}
```

---

## Testing

### Example cURL Requests

**Get all listings:**
```bash
curl https://api.therailexchange.com/api/listings
```

**Search listings:**
```bash
curl -X POST https://api.therailexchange.com/api/listings/search \
  -H "Content-Type: application/json" \
  -d '{"category":"hi-rail","location":"Chicago"}'
```

**Create listing (requires auth):**
```bash
curl -X POST https://api.therailexchange.com/api/listings/create \
  -H "Content-Type: application/json" \
  -H "user-id: seller_123" \
  -d '{"title":"Hi-Rail Truck","category":"hi-rail",...}'
```

---

## API Versioning

Current version: **v1**

Base URL: `https://api.therailexchange.com/v1`

Version is implicit in current implementation. Future versions will use explicit versioning:
- `/v1/listings`
- `/v2/listings`

---

## Performance Optimization

### Database Indexes
```javascript
// Recommended indexes
Listing.createIndex({ category: 1, isActive: 1 })
Listing.createIndex({ sellerId: 1 })
Listing.createIndex({ createdAt: -1 })
Listing.createIndex({ location: "text", title: "text", description: "text" })
Listing.createIndex({ "attributes.manufacturer": 1 })
Listing.createIndex({ price: 1 })
```

### Caching Strategy
- Category listings: 5 minutes
- Individual listings: 1 minute
- Search results: 30 seconds
- User's own listings: No cache (always fresh)

---

## Summary

**Total Endpoints:** 11
- **Listings:** 7 endpoints
- **Rentals:** 4 endpoints

**Authentication:**
- Public: 8 endpoints
- Authenticated: 3 endpoints
- Admin: Additional permissions

**Data Model:**
- Unified `Listing` model
- Category-based differentiation
- Dynamic attributes object
- Rental support built-in

**Features:**
- Advanced search with multiple filters
- Full CRUD operations
- Category filtering
- Location-based search
- Price range filtering
- Year range filtering
- Manufacturer filtering
- Map-ready data structure
- Metrics tracking

**Status:** Production-ready and fully tested
