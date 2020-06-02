const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId, ref:"Catearticle" }
})

module.exports = mongoose.model('Catearticle', schema)