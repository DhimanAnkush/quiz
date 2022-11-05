const express = require('express')
const router = express.Router()
const Question = require('./models/Question')

router.get('/questions', async (req, res) => {
    try{
        const questions = await Question.find()
        return res.status(200).json(questions)
    }catch(error){
        return res.status(500).json({"error":error})
    }

})

router.get('/questions/:id', async (req, res) => {
    try{
        const _id = req.param._id
        const{description, alternatives} = req.body

        let question = await Question.findOne({_id})
        // const question = await Question.findOne({_id})
        if(!question){
            question = await Question.create({
                description,
                alternatives
            })
            return res.status(201).json({})
        }else{
            question.description = description
            question.alternatives = alternatives
            await question.save()
            return res.status(200).json(question)
        }
    }catch(error){
        return res.status(500).json({"error":error})
    }
})

router.post('/questions', (req, res) => {
    try{
        const {description} = req.body
        const{alternatives} = req.body
        return res.status(201).json(question)
    }catch{
        return res.status(500).json({"error":error})
    }
})

router.put('/questions/:id', (req, res) => {
    
})

router.delete('/questions/:id', async (req, res) => {
    try{
       const _id = req.params.id
       const question = await Question.deleteOne({_id})

       if(question.deleteCount === 0){
        return res.status(404).json()
       }else{
        return res.status(204).json()
       }
    }catch(error){
        return res.status(500).json({"error":error})

    }
})



module.exports = router