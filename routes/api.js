var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = mongoose.model('Place');

router.route('/place')

.post(function(req, res) {
    
    var place = new Place();
    
    place.name = req.body.name;
    place.address = req.body.address;
    place.created_at = req.body.created_at;
    
    place.save(function(err){
        if (err){
            return res.status(500).send(err);
        }
        return res.json({message: 'Place added', place});
    });
    
})

.get(function(req, res){
    
    Place.find(function(err, place){
        if(err){
            return res.send(500, err);
        }
        return res.status(200).send({place: place});
    });
    
    
});

router.route('/place/:id')

.get(function(req, res){
    Place.findById(req.params.id, function(err, place){
        if(err)
            return res.send(err);
        res.json(place);
    });
})

.put(function(req, res){
    Place.findById(req.params.id, function(err, place){
        if(err)
            res.send(err);
        place.name = req.body.name;
        place.address = req.body.address;
        place.created_at = req.body.created_at;
        
        place.save(function(err, place){
            if(err)
                res.send(err);
            res.json(place);
            
            
        });
    });
})

.delete(function(req, res){
    Place.findByIdAndRemove(req.params.id, function(err){
        if(err)
            res.send(err);
        res.json({message: 'Place removed!!!!!'});
    });
        
});

module.exports = router;
