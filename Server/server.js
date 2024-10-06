const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = "mongodb://127.0.0.1:27017/test";

app.get('/api/reservations', async (req, res) => {
  try {
      const reservations = await Reservation.aggregate([
          {
              $lookup: {
                  from: "guests",
                  localField: "_id",
                  foreignField: "reservationId",
                  as: "guests"
              }
          }
      ]);

      res.status(200).json(reservations);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Подключено к MongoDB"))
    .catch(err => console.error("Ошибка подключения к MongoDB:", err));

    app.post('/api/reservations', async (req, res) => {
      const { arrivalDate, departureDate, guestCount, roomType, guests } = req.body;
  
      try {
          const newReservation = new Reservation({
              arrivalDate,
              departureDate,
              guestCount,
              roomType,
          });
  
          const savedReservation = await newReservation.save();
  
          const guestPromises = guests.map(guest => {
              const newGuest = new Guest({
                  ...guest,
                  reservationId: savedReservation._id
              });
              return newGuest.save();
          });
  
          await Promise.all(guestPromises);
  
          res.status(201).json(savedReservation);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
  });

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});