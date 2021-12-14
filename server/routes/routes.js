import express from 'express';


import { userSignup, userLogIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { sellProduct } from '../controller/sell-controller.js';
import {addPaymentGateway,paymentResponse} from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogIn);
router.post('/sell',sellProduct);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback',paymentResponse);


export default router;
