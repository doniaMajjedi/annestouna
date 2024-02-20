//import express
const express=require("express");

//import event module
const Event=require("./event");
const app = express();


app.use(express.json());


// Get all events
app.get('/events', (req, res) => {
  try {
    const events = Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single event
app.get('/users/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// Create a new event
app.post('/events',  (req, res) => {
  const eventi = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time:req.body.time,
    location : req.body.location,
    categorie : req.body.categorie,
    price : req.body.price,
    dateregistredeb : req.body.dateregistredeb,
    dateregistrefin : req.body.dateregistrefin
  });

  try {
    console.log('New Event:', eventi);
    const newEvent =  eventi.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a user
app.patch('/events/:id', getEvent, (req, res) => {
  if (req.body.title != null) {
    res.event.title = req.body.title;
  }

  if (req.body.description != null) {
    res.event.description = req.body.description;
  }

  if (req.body.date != null) {
    res.event.date = req.body.date;
  }

  if (req.body.time != null) {
    res.event.time = req.body.time;
  }
  if (req.body.location != null) {
    res.event.location = req.body.location;
  }
  if (req.body.categorie != null) {
    res.event.categorie = req.body.categorie;
  }
  if (req.body.price != null) {
    res.event.price = req.body.price;
  }
  if (req.body.dateregistredeb != null) {
    res.event.dateregistredeb = req.body.dateregistredeb;
  }
  if (req.body.dateregistrefin != null) {
    res.event.dateregistrefin = req.body.dateregistrefin;
  }

  try {
    const updatedEvent = res.event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
app.delete('/events/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single event by ID
async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find this event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.event = event;
  next();
}

app.listen(3000, () => console.log('Server started...'));