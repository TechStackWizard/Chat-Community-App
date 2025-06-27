const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  profilePic: {
    type: String,
    default: 'https://th.bing.com/th/id/OIP.LG6UqvINZmEBMrUzrhADJAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
