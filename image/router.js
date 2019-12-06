const { Router } = require('express')
const Image = require('./model')

const router = new Router()
router.get('/image', (req, res, next) => {
    Image.findAll()
        .then(imageList => res.json(imageList))
        .catch(err => console.error(err))
});

router.post('/image', (req, res, next) => {
    Image.create(req.body)
        .then(newImage => res.json(newImage))
        .catch(err => next(err))
});

module.exports = router