import mongoose from "mongoose";

try {
  await mongoose.connect(
    'mongodb://localhost:27017/coderhouse'
  );
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(error);
}
