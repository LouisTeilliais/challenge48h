import mongoose from 'mongoose'
import nanoidDictionary from 'nanoid-dictionary'

const { numbers } = nanoidDictionary
const { Schema } = mongoose

const categoriesArticleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})


const categoriesArticle = mongoose.model('User', categoriesArticleSchema)

export default categoriesArticle
