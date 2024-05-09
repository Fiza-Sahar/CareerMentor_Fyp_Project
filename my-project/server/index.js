const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const CandidatesModel = require('./models/Candidates')

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/candidates")
app.post("/login", (req, res) =>{
    const {email, password} = (req.body)
    CandidatesModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("Password is incorrect")
            }}
            else{
                res.json("No record existed")
            }
        
    })
})

// Corrected route path: '/signup' instead of './signup'
app.post('/signup', (req, res) => {
   CandidatesModel.create(req.body)
   .then(candidates => res.json(candidates))
   .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("server is running");
})
