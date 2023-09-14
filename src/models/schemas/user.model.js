import { Schema, model } from "mongoose";

const userCollection = 'Users'

const userSchema = Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  password: String,
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Carts',
  },
  role: {
    type: String,
    default: 'user'
  }
})

export const userModel = model(userCollection, userSchema);