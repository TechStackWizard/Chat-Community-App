const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mediaSchema = new Schema({
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  mediaUrl: {
    type: String,
    required: true
  },
  mediaType: {
    type: String,
    enum: ['image', 'video', 'audio']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Media', mediaSchema);
