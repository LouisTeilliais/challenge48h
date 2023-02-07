import mongoose from 'mongoose'
const { Schema } = mongoose


const merchantsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  }
}, {
  timestamps: true
})

merchantsSchema.static({
  findByUserId(userId) {
    return this.find({ user: userId })
  },
})


const MerchantModel = mongoose.model('Merchant', merchantsSchema)

export default MerchantModel