const express = require("express")
const createError = require("http-errors");


const app = express()

app.use(express.static(__dirname + "/public"));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send(err.message || err);
});

app.listen(3000, () => {
  console.log(`Server is running on port localhost:${3000}`);
});