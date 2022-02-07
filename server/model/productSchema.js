import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    username: String,
    description:String,
    price:String,
    id:{
        type: String,
        unique: true
    },
    url: String,
    title: String,
    discount: String,
    tagline: String,
    category: String
    
})


const products = mongoose.model('Product',productSchema);
export default products;