import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailsUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})


const products = mongoose.model('Product',productSchema);
export default products;