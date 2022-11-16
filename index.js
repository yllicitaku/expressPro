const express = require('express');

const mongoose = require('mongoose');
const { initialize } = require('passport');

require('./models/User')

const passport = require('passport');

// require('./services/passport');

mongoose.connect('mongodb+srv://root:ylli12345@userauth.mghhlhw.mongodb.net/?retryWrites=true&w=majority')

const app = express();

app.use(passport.initialize())


const port = 5000;
app.listen(port)