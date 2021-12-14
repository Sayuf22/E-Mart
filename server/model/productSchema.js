import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String,
    username: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})


const products = mongoose.model('Product',productSchema);
export default products;