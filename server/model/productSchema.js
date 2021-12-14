import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    username: String,
    description: {
        type: String,
        
    },
    price: Object,
    id:{
        type: String,
    },
    url: String,
    detailUrl: String,
    title: String,
    discount: String,
    tagline: String,
    category: String
    
})


const products = mongoose.model('Product',productSchema);
export default products;