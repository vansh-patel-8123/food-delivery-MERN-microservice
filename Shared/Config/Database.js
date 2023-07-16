const mongoose = require('mongoose');

const DBConnection = (PORT, block) => {
    try {
        mongoose.connect('mongodb+srv://user:user@cluster0.jiuthhg.mongodb.net/?retryWrites=true&w=majority')
        console.log(`Sucessfully connected DB on ${PORT} and ${block} !!!`)
    }catch(error){
        console.log(`DB is not connected on ${PORT} and ${block}`)
    }
}

module.exports = DBConnection;