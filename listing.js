const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description: String,
    image:{
        filename: String,
        url: String,
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mickeyshannon.com%2Fnature-photography-galleries%2F&psig=AOvVaw0nuPdN8Qz6YnTWF0TInbzo&ust=1711550543865000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODl59eUkoUDFQAAAAAdAAAAABAE",
        set: (v)=>v ===""?"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mickeyshannon.com%2Fnature-photography-galleries%2F&psig=AOvVaw0nuPdN8Qz6YnTWF0TInbzo&ust=1711550543865000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODl59eUkoUDFQAAAAAdAAAAABAE" : v,
    } , 
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;