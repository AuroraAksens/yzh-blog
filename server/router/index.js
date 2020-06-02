module.exports = app =>{
    const express = require('../node_modules/express')
    const router = express.Router({
        merageParams: true
    })

    router.post('/', async (req,res)=>{
            const model = await req.model.create(req.body)
            res.send(model)
    })

    router.put('/:id', async (req,res)=>{
        const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    router.get('/', async (req,res)=>{
        const queryOptions ={}
        if(req.model.modelName === 'Catearticle'){
            queryOptions.populate = 'parent'
        }
        const model = await req.model.find().setOptions(queryOptions).limit(10)
        res.send(model)
    })

    router.get('/:id', async (req,res)=>{
        const model = await req.model.findById(req.params.id)
        res.send(model)
    })

    router.delete('/:id', async (req,res)=>{
        await req.model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    app.use('/admin/api/rest/:resource',async (req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.model = require(`../models/${modelName}`)
        next()
    },router)


    //上传
    const multer = require('multer')
    const upload =multer({ dest: __dirname + '/../upload'}).single('file')
    app.use('/admin/api/upload',upload ,async(req,res)=>{
        const file = req.file
        file.url = `https://yaozehui.com/upload/${file.filename}`
        // file.url = `http://localhost:4000/upload/${file.filename}`
        res.send(file)
    })

}