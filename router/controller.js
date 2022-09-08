const express = require('express')
const stu = require('../model/model')
const router = express.Router()


// for retrieving all records
router.get('/', async(req, res) => {
    try {
        const x = await stu.find()
        res.json(x)
    } catch (error) {
        res.send(error)
    }
})

// for retrieving one record using id
router.get('/:id', async(req, res) => {
    try {
        const y = await stu.findById(req.params.id)
        res.json(y)
    } catch (error) {
        res.send(error)
    }
})


// for adding records
router.post('/', async(req, res) => {
    const stu1 = new stu(
        {
            Name: req.body.Name,
            Email: req.body.Email,
            College: req.body.College
        }
    )
    try {
        const x1 = await stu1.save()
        res.json(x1)
    } catch (error) {
        res.send(error)
    }
})

// For updating records
router.patch('/:id', async(req, res) => {
    try {
        const a = await stu.findById(req.params.id)
        a.Email = req.body.Email
        const a1 = a.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router