const mongoose = require('mongoose')
const CandidatesSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const CandidatesModel = mongoose.model("candidates", CandidatesSchema)
module.exports = CandidatesModel