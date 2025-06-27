const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
  groupName: {
    type: String,
    required: true
  },
  groupIcon: {
    type: String,
    default: 'default-group-icon.pnghttps://th.bing.com/th/id/OIP.GGTn1fGebKZPU5GYAgvmhgHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3'
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  admins: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Group', groupSchema);
