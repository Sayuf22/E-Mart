import { useState } from "react";
import {v4 as uuid } from 'uuid';
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Select, MenuItem, TextField } from "@mui/material";
import { authenticateProductUpload } from "../../service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component:{
        marginTop: 60,
    },
    box: {
        marginTop: '10%',
        marginLeft: '30%',
        height: '90vh',
        width: '75vh',
        backgroundColor: "#f2f2f2",
        //alignItems: 'center'
    },
    category: {
        padding: '25px 30px'
    },
    categoryBox:{
        width: '75%',
    },
    input:{
        padding: '10px 30px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputText:{
        width: '75%',
        '& > *':{
            marginTop: 20,
        }
    },
    upload:{
        textTransform: 'none',
        // background: '#fff',
        // color: '#002F34',
        color: '#FFFFFF',
        background: '#002F34',
        height: 50,
        borderRadius: 20,
        padding:'20px 0',
        fontSize: 20,
        textTransform: 'none',
        width: '100%',
        fontWeight: 600,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        '&:hover':{
            background: '#FFF',
            color: '#002F34',
        }
    }
})

const initialProductState = {
    title:'',
    url:'',
    username:'',
    description: '',
    price:'',
    id:'',
    category:''
};


const Sell = () => {
    const [product, setproduct] = useState(initialProductState);
    
    
    const AddProduct = async () =>{
        console.log('HI');
        product.id = String('product'+uuid());
        let response = await authenticateProductUpload(product);
        if(!response)
        {
            console.log("Error: Not Product Added");
        }
        else
            console.log(product);
    }

    const onInputChange = (e) =>{
        setproduct({...product, [e.target.name]: e.target.value });
        console.log(product);
    }




    const classes = useStyle();

    return(
        <Box className={classes.component}>
            <Box className={classes.box}>
                <Box className={classes.category}>
                    <Typography className={classes.categoryText}>Category</Typography>
                    <Select 
                        label="Category"
                        name="category"
                        onChange={(e) =>onInputChange(e)}
                        className={classes.categoryBox}
                    >
                        <MenuItem value={'Car'}>Car</MenuItem>
                        <MenuItem value={'MotorCycle'}>MotorCycle</MenuItem>
                        <MenuItem value={'Mobile Phone'}>Mobile Phone</MenuItem>
                        <MenuItem value={'Home Appliances'}>Home Appliances</MenuItem>
                        <MenuItem value={'Fashion'}>Fashion</MenuItem>
                        <MenuItem value={'For Sale: House & Apartment'}>For Sale: House or Apartment</MenuItem>
                        <MenuItem value={'Commercial & Other Vehicles'}>Commercial or Other Vehicles</MenuItem>
                        <MenuItem value={'For Rent: Houses & Apartments'}>For Rent: Houses and Apartments</MenuItem>
                    </Select>
                </Box>
                <Box className={classes.input}>
                    <TextField classname={classes.inputText} onChange = {(e) =>onInputChange(e)} name="username" label="Username"/><br/>
                    <TextField classname={classes.inputText} onChange = {(e) =>onInputChange(e)} name="title" label="Product name"/><br/>
                    <TextField classname={classes.inputText} onChange = {(e) =>onInputChange(e)} name="price" label="Product price"/><br/>
                    <TextField classname={classes.inputText} onChange = {(e) =>onInputChange(e)} name="description" label="Product Description"/><br/>
                    <TextField classname={classes.inputText} onChange = {(e) =>onInputChange(e)} name="url" label="Link for image of product"/><br/>
                    <Link to='/' style={{ textDecoration: 'none'}}><Button className={classes.upload} onClick={() => AddProduct()}>Upload</Button><br/></Link>
                </Box>
            </Box>
        </Box>
    );
}



export default Sell;