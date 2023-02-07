import mongoose from 'mongoose'

const { Schema } = mongoose

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false,
  },
  article_stock: {
    type: Number,
    required: true
  },
  article_price: {
    type: Schema.Types.Decimal128,
    required: true
  },
  article_picture: {
    type: String,
    required: true,
  },
  // merchant: {
  //   type: Schema.Types.ObjectId,
  //   required: false,
  //   ref: 'Merchant'
  // },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   required: false,
  //   ref: 'Category'
  // }{
}, {
  timestamps: true
})

const ArticleModel = mongoose.model('Article', articlesSchema)

export default ArticleModel