import mongoose from 'mongoose'
import { customAlphabet  } from 'nanoid'
import nanoidDictionary from 'nanoid-dictionary'
import jwt from 'jsonwebtoken'
const { numbers } = nanoidDictionary
const { Schema } = mongoose



const merchantsSchema = new Schema({
    name: {
        type: String,
        required: true,
        select: false
    },
    logo: {
        type: String,
        default: false
    }
  }, {
    timestamps: true
  })


const Merchant = mongoose.model('Merchant', merchantsSchema)

export default Merchant