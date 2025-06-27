const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    refPath: 'receiverModel',
    required: true
  },
  receiverModel: {
    type: String,
    enum: ['User', 'Group'],
    required: true
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'video', 'audio'],
    default: 'text'
  },
  content: {
    type: String
  },
  mediaUrl: {
    type: String
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
