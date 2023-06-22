const Pet = require('../models/Pet')
const User = require('../models/User')
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

module.exports = {
    getPets: async (req,res) => { 
        try{
            const userId = req.user._id
            const user = await User.findById({ _id: userId })

            const petItems  = await Pet.find({})
                .populate('petOwner')
                .sort({ createdAt: "desc"})
                .lean();
            res.render('pets.ejs', {
                pets: petItems,
                user,
            })
        } catch(err) {
            console.log(err)
        }
    },
    createPet: async (req, res)=>{
        try{
            upload.single('image')(req, res, async (err) => {
               if(err){
                console.error(err)
                res.render('error/500')
               } else {
                    try{
                        // Upload the file to Cloudinary
                        const result = await cloudinary.uploader.upload(req.file.path);
                        const imageUrl = result.secure_url;

                        await Pet.create({
                            petSpecies: req.body.petSpecies, 
                            petName: req.body.petName, 
                            petGender: req.body.petGender, 
                            petBody: req.body.petBody, 
                            petColor: req.body.petColor, 
                            petLocation: req.body.petLocation,
                            petImg: imageUrl,
                            petOwner: req.body.petOwner,
                        })
                        console.log('Lost pet has been added!')
                        res.redirect('/pets')
                    } catch(err) {
                        console.error(err)
                        res.render('error/500')
                    }
               }
            })            
        }catch(err){
            console.log(err)
        }

    },
    addUrgent: async (req,res) =>{
        console.log(req.body.petIdFromJSFile)
        try{           
            await Pet.findOneAndUpdate(
                {_id: req.body.petIdFromJSFile },
                { $inc: { petUrgent: 1 } },
                { new: true }
            )    

           console.log('Added One Urgent')
           res.json('Urgent Added ')
        } catch(err) {
            console.log(err)
        }
    },

    addComment: async (req, res) => {
        try{
            console.log(req.body.comment)
        } catch (err) {
            console.error(err)
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
    addFoundFeature: async(req,res) => {
        console.log(req.body.petIdFromJSFile)
        try{
            await Pet.findOneAndUpdate(
                {_id: req.body.petIdFromJSFile },
                {petFound: true}
            )
            console.log('Added Found to Pet')
            res.json('Added Found to Pet')
        }catch(err){
            console.log(err)
        }
    }
}