const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});


const PublicationModel = mongoose.model("authors", PublicationSchema);
module.exports = PublicationModel;