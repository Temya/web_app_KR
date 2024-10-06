const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    reservationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }, // Связь с Reservation
});

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;