'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




var placeSchema = new Schema ({
    
    name:{
        type: String,
        default: '',
        required: 'Please fill Place name',
        trim: true
    },
    address: String,
    created_at: {type: Date, default: Date.now}
    
});

mongoose.model('Place', placeSchema);
