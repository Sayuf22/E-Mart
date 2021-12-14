import { response } from "express";

import Product from '../model/productSchema.js';





export const sellProduct = async(request,response) => {
    try {
        const product = request.body;
        const newProduct = new Product(product);
        await newProduct.save();
    } catch (error) {
        console.log('Error: ',error.message);
    }
} 