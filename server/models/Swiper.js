const mongosse = require('mongoose')

const schema = new mongosse.Schema({
    title:{ type:String },
    items:[{
        img:{type:String},
        link:{type:String}
     } ]
})

module.exports = mongosse.model('Swiper',schema)