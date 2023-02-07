import mongoose from 'mongoose'
const { Schema } = mongoose

const categoriesArticleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
}, {
  timestamps: true
})


const categoriesArticle = mongoose.model('Category', categoriesArticleSchema)

export default categoriesArticle
