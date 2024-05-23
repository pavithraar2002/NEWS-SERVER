import mongoose from 'mongoose'








const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    password:String,
    createdAt:Date
  });


  const User = mongoose.model('user', userSchema,"user");//(collection name,collectionschema)

  export default User;