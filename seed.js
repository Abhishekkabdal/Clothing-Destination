const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kabdalabhishek6:dJHhhKdaDGoDpVNa@cluster0.hieug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clothingItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageUrl: String,
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

const clothingItems = [
    { id: 1, name: 'Red T-shirt', price: 19.99, imageUrl: '/images/red-tshirt.jpg' },
    { id: 2, name: 'Blue Jeans', price: 39.99, imageUrl: '/images/blue-jeans.jpg' },
    { id: 3, name: 'Green Jacket', price: 59.99, imageUrl: '/images/green-jacket.jpg' },
    { id: 4, name: 'White Sneaker', price: 59.99, imageUrl: '/images/white-sneaker.jpg' },
    { id: 5, name: 'Polo T-shirt', price: 19.99, imageUrl: '/images/polo-tshirt.jpg' },
    { id: 6, name: 'Black Hoodie', price: 49.99, imageUrl: '/images/black-hoodie.jpg' },
    { id: 7, name: 'Grey Sweatpants', price: 29.99, imageUrl: '/images/grey-sweatpants.jpg' },
    { id: 8, name: 'Yellow T-shirt', price: 19.99, imageUrl: '/images/yellow-tshirt.jpg' },
    { id: 9, name: 'Denim Jacket', price: 69.99, imageUrl: '/images/denim-jacket.jpg' },
    { id: 10, name: 'Black Jeans', price: 39.99, imageUrl: '/images/black-jeans.jpg' },
    { id: 11, name: 'Green T-shirt', price: 19.99, imageUrl: '/images/green-tshirt.jpg' },
    { id: 12, name: 'Brown Leather Jacket', price: 99.99, imageUrl: '/images/brown-leather-jacket.jpg' },
    { id: 13, name: 'White T-shirt', price: 19.99, imageUrl: '/images/white-tshirt.jpg' },
    { id: 14, name: 'Blue Hoodie', price: 49.99, imageUrl: '/images/blue-hoodie.jpg' },
    { id: 15, name: 'Cargo Pants', price: 34.99, imageUrl: '/images/cargo-pants.jpg' },
    { id: 16, name: 'Striped Shirt', price: 24.99, imageUrl: '/images/striped-shirt.jpg' },
    { id: 17, name: 'Red Polo Shirt', price: 24.99, imageUrl: '/images/red-polo.jpg' },
    { id: 18, name: 'Black T-shirt', price: 19.99, imageUrl: '/images/black-tshirt.jpg' },
    { id: 19, name: 'Grey Jacket', price: 59.99, imageUrl: '/images/grey-jacket.jpg' },
    { id: 20, name: 'Blue Sneaker', price: 59.99, imageUrl: '/images/blue-sneaker.jpg' },
    { id: 21, name: 'White Shirt', price: 29.99, imageUrl: '/images/white-shirt.jpg' },
    { id: 22, name: 'Green Cargo Shorts', price: 24.99, imageUrl: '/images/green-cargo-shorts.jpg' },
    { id: 23, name: 'Red Hoodie', price: 49.99, imageUrl: '/images/red-hoodie.jpg' },
    { id: 24, name: 'Blue Shirt', price: 29.99, imageUrl: '/images/blue-shirt.jpg' },
    { id: 25, name: 'Black Sneakers', price: 59.99, imageUrl: '/images/black-sneakers.jpg' },
    { id: 26, name: 'White Polo Shirt', price: 24.99, imageUrl: '/images/white-polo.jpg' },
    { id: 27, name: 'Grey T-shirt', price: 19.99, imageUrl: '/images/grey-tshirt.jpg' },
    { id: 28, name: 'Black Leather Jacket', price: 99.99, imageUrl: '/images/black-leather-jacket.jpg' },
    { id: 29, name: 'Blue Denim Jeans', price: 39.99, imageUrl: '/images/blue-denim-jeans.jpg' },
    { id: 30, name: 'Yellow Polo Shirt', price: 24.99, imageUrl: '/images/yellow-polo.jpg' }
];

ClothingItem.insertMany(clothingItems)
    .then(() => {
        console.log('Data inserted successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting data:', err);
    });
