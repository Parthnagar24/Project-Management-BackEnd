import mongoose from "mongoose";

const uri = "mongodb+srv://Udemy:Test1234@cluster0.lgsw7gx.mongodb.net/project-management?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB successfully");
  process.exit(0);
})
.catch(err => {
  console.error("❌ Connection failed:", err.message);
  process.exit(1);
});
