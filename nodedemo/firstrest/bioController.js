

 Bio = require('./bioModel')

exports.index = function (req,res){
    Bio.get(function (err,bio){
        if(err)
            res.json({
                status:"error",
                message:err
            });
        res.json({
            status:"Success",
            message:"Got Bio Succesfully",
            data:bio
        });
    });
};


//For creating new bio
exports.add = function (req, res) {
    console.log("heello");
     console.log(req.method,req.url);
     console.log("heello");
    var bio = new Bio();
    bio.name = req.body.name;
    bio.email = req.body.email;
    bio.phone = req.body.phone;
    bio.address = req.body.address;
//Save and check error
    bio.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};


exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};

exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.name = req.body.name ? req.body.name : bio.name;
        bio.email = req.body.email;
        bio.phone = req.body.phone;
        bio.address = req.body.address;
//save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};
// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        })
    })
}