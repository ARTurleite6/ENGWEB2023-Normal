import express from 'express';
import { router } from './routers/index.js';
import createError from 'http-errors';

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.json());
app.use(express.static('public'))

app.use('/', router);

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
  res.render('error');
});

const port = 15031;
app.listen(port, () => {
    console.log("Listening on port " + port);
});

