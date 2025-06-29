const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// require('dotenv').config();
const User = require('../models/User'); // Adjust the path as necessary

const MONGO_URI = 'mongodb://localhost:27017/chatcomty'; // Replace with your MongoDB URI
async function main() {
    await mongoose.connect(MONGO_URI);
}
main().then(() => {
    console.log('Connected to MongoDB');
    seedData();
}).catch(err => {
    console.error('MongoDB connection failed:', err);
});

const users = [
    {
        username: "john_doe",
        email: "john@example.com",
        password: bcrypt.hashSync("password123", 10),
        phoneNumber: "+919876543210",
        profilePic: "https://i.pravatar.cc/150?img=1"
    },
    {
        username: "jane_smith",
        email: "jane@example.com",
        password: bcrypt.hashSync("pass456", 10),
        phoneNumber: "+918765432109",
        profilePic: "https://i.pravatar.cc/150?img=2"
    },
    {
        username: "admin_user",
        email: "admin@chatcomty.com",
        password: bcrypt.hashSync("admin@123", 10),
        phoneNumber: "+911234567890",
        profilePic: "https://i.pravatar.cc/150?img=3"
    }
];

const seedData = async () => {
    try {
        await User.deleteMany({});
        console.log("Old data cleared");

        await User.insertMany(users);
        console.log("Seed data inserted successfully");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
};
