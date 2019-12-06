const { Router } = require('express')
const Image = require('./model')

const router = new Router()
router.get('/image', (req, res, next) => {
    Image.findAll()
        .then(imageList => res.json(imageList))
        .catch(err => console.error(err))
});

module.exports = router