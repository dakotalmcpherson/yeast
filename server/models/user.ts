import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  todos: [{
    text: {type: String},
    completed: {type: Boolean}
  }]
})

const User = mongoose.model('user', userSchema)

export default User