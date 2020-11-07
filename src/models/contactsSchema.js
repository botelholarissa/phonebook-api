const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    cover: {
        type: String,
        required: false
    }
});

const contactsColletion = mongoose.model('contact', contactSchema);

module.exports = contactsColletion