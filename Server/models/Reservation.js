const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    arrivalDate: { type: Date, required: true },
    departureDate: { type: Date, required: true },
    guestCount: { type: Number, required: true },
    roomType: { type: String, required: true },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;