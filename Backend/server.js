const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path as necessary

dotenv.config();
const app = express();

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection failed:', err));



// 1️⃣ Auth Routes
app.post('/signup', async (req, res) => {
    // Register logic here
    let {username,email, password} = req.body;
    if (!username || !password || !email) {
        return res.status(400).send("Username, email, and password are required");
    }

    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 10)
    })

    await newUser.save();
    res.status(201).send("User registered successfully");
    console.log(newUser);
    res.send("Register endpoint");
});

app.post('/login', async (req, res) => {
    // Login logic here
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send("User not found");
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).send("Invalid credentials");
    }

    res.send("Login successful");
});

// 2️⃣ User Routes
app.get('/api/users/:id', async (req, res) => {
    // Fetch user profile
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).send("User not found");
    }
    res.send(`Fetch user by ID: ${user}`);
});

app.put('/api/users/:id', async (req, res) => {
    // Update user
    const {username, password, email} = req.body;
     if(!username || !password || !email) {
        return res.status(400).send("Username, email, and password are required");
    }
    const user = await User.findByIdAndUpdate(req.params.id, {
        username,
        email,
        password: bcrypt.hashSync(password, 10)
    }, { new: true });

    if (!user) {
        return res.status(404).send("User not found");
    }
    res.send(`Update user by ID: ${req.params.id}`);
});

// 3️⃣ Message Routes
app.post('/api/messages/send', async (req, res) => {
    // Send message
    const {senderId, receiverId, content} = req.body;
    if (!senderId || !receiverId || !content) {
        return res.status(400).send("Sender ID, receiver ID, and content are required");
    }
    res.send("Message sent");
});

app.get('/api/messages/:conversationId', async (req, res) => {
    // Get messages of conversation
    res.send(`Messages of conversation ${req.params.conversationId}`);
});

// 4️⃣ Group Routes
app.post('/api/groups/create', async (req, res) => {
    // Create group
    res.send("Group created");
});

app.get('/api/groups/:groupId', async (req, res) => {
    // Get group info
    res.send(`Group info of ${req.params.groupId}`);
});

// 5️⃣ Media Routes
app.post('/api/media/upload', async (req, res) => {
    // Upload media (Multer + Cloudinary)
    res.send("Media uploaded");
});

app.get('/api/media/:mediaId', async (req, res) => {
    // Get media
    res.send(`Media fetched with ID ${req.params.mediaId}`);
});

// 6️⃣ Admin Routes
app.get('/api/admin/users', async (req, res) => {
    // Get all users
    res.send("All users fetched");
});

app.delete('/api/admin/user/:id', async (req, res) => {
    // Delete user
    res.send(`Deleted user with ID ${req.params.id}`);
});

// =============================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




app.listen(3000);