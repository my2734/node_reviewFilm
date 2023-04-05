const Movie = require('../models/Movie')


const getAll = async (req,res)=>{
    const category = req.query.category
    const search = req.query.search
    try{
        if(category){
            const listmovie = await Movie.find()
            const list_result = []
            listmovie.forEach((movie)=>{
                if(movie.category.toLowerCase() == category.toLowerCase()){
                    list_result.push(movie)
                }
            })
            res.status(200).json(list_result)
        }else if(search){
            const listmovie = await Movie.find()
            const list_result = []
            listmovie.forEach((movie)=>{
                if(movie.title.toLowerCase().includes(search.toLowerCase())){
                    list_result.push(movie)
                }
            })
            res.status(200).json(list_result)
        }else{
            const listmovie = await Movie.find()
            res.status(200).json(listmovie)
        }

    }catch(error){
        res.status(500).json('Loi server')
    }
}

const getDetail = async (req,res)=>{
    const id = req.params.id
    try{
        const movie = await Movie.findById(id)
        res.status(200).json(movie)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const create = async (req,res)=>{
    try{
        const newMovie = new Movie(req.body)
        const result = await newMovie.save()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const update = async (req,res)=>{
   const id = req.params.id
   try{
        const result = await Movie.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json(result)
   }catch(error){
        res.status(500).json("Loi server")
   }
}

const deleteAll = async (req,res)=>{
    try{
        const resultDelete = await Movie.deleteMany()
        res.status(200).json('Delete success')
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const deleteOne = async (req,res)=>{
    const id = req.params.id
    try{
        const result = await Movie.deleteOne({_id: id})
        res.status(200).json('delete movie success')
    }catch(error){
        res.status(200).json('Loi server')
    }
}

module.exports = {
    getAll,
    getDetail,
    create,
    update,
    deleteAll,
    deleteOne
}