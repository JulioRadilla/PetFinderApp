const Pet = require('../models/Pet')


module.exports = {
    getPets: async (req,res) => {
        console.log(req);
        try{
            const petItems  = await Pet.find({});
            res.render('pets.ejs', {pets: petItems})
        } catch(err) {
            console.log(err)
        }
    },
    createPet: async (req, res)=>{
        try{
            await Pet.create({petSpecies: req.body.petSpecies, petName: req.body.petName, petGender: req.body.petGender, petBody: req.body.petBody, petColor: req.body.petColor, petLocation: req.body.petLocation})
            console.log('Lost pet has been added!')
            res.redirect('/pets')
        }catch(err){
            console.log(err)
        }

    },
    deletePet: async (req, res)=>{
        console.log(req.body.petIdFromJSFile)
        try{
            await Pet.findOneAndDelete({_id:req.body.petIdFromJSFile})
            console.log('Deleted Pet')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
}