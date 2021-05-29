let router = require('express').Router();
let bioController = require ('./bioController');

router.get('/',function(req,res){
    res.json({
        status:'Api works',
        message:'welcom to first api'
    });
});

router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);
    
router.route('/bio/:bio_id')
    .get(bioController.view)
    .patch(bioController.update)
    .put(bioController.update)
    .delete(bioController.delete);

module.exports = router;