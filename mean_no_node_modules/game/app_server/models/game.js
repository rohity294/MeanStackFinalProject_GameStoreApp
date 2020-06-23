var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    
    type: String,   

    players: Number,   
    
    origin: String,

    stared: Boolean
});

mongoose.model('game', gameSchema);