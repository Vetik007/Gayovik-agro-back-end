// const mongoose = require("mongoose");
const app = require("./app");

// mongoose.set("strictQuery", true);

// const { PORT = 3001 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log("Database connection successful");
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//     process.exit(1);
//   });

app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3001");
});
