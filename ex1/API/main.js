import mongoose from 'mongoose';
import express from 'express';
import { router } from './routers/api.js';
import createError from 'http-errors';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/plantas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
export const db = mongoose.connection;

// Event handlers for the connection
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database!');
});

const app = express();

app.use(express.json());

app.use('/plantas', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

const port = 15030;
app.listen(port, () => {
    console.log('listening on port ' + port)
});
