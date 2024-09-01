const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://kabdalabhishek6:dJHhhKdaDGoDpVNa@cluster0.hieug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useUnifiedTopology: true, // Required for newer drivers
    serverSelectionTimeoutMS: 30000, // Optional: Increase timeout if needed
  }).then(() => {
    console.log('Connected to MongoDB Atlas');
  }).catch(err => {
    console.error('Failed to connect to MongoDB Atlas', err);
  });

// Define a schema and model for clothing items
const clothingItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageUrl: String,
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to get featured products from the database
app.get('/api/featured-products', async (req, res) => {
    try {
        const clothingItems = await ClothingItem.find(); // Fetch all clothing items from the database
        res.json(clothingItems);
    } catch (error) {
        console.error('Error fetching clothing items:', error);
        res.status(500).json({ error: 'Failed to fetch clothing items' });
    }
});

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/search', async (req, res) => {
    const query = req.query.q.toLowerCase();  // Get the search query from the URL
    try {
        // Find items where the name includes the search query (case-insensitive)
        const filteredItems = await ClothingItem.find({
            name: { $regex: query, $options: 'i' }
        });
        res.json(filteredItems);  // Send the filtered items as a JSON response
    } catch (error) {
        console.error('Error searching for clothing items:', error);
        res.status(500).json({ error: 'Failed to search for clothing items' });
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
