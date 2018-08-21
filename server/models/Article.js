const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  creator:      { type: Schema.Types.ObjectId, ref: 'User' },
  title:        {type: String },
  image:        {type: String,  default: 'https://i.pinimg.com/originals/a1/a4/44/a1a44429cc36abaec11bdf9752fbe923.jpg'},
  provider:     {type: String },
  providerImg:  {type: String,  default: 'https://images.all-free-download.com/images/graphicthumb/microsoft_office_2013_default_icon_pack_6830211.jpg'},
  link:         {type: String },
  favourite:    {type: Boolean, default: false},
  later:        {type: Boolean, default: false},
  read:         {type: Boolean, default: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;