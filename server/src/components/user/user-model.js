import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
const { Schema } = mongoose

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  adress: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
  }
}, {
  timestamps: true
})

userSchema.method({
  generateJWT() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      issuer: process.env.APP_NAME,
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
  }
})

const User = mongoose.model('User', userSchema)

export default User
