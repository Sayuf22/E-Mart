import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Select, MenuItem, TextField, formControlUnstyledClasses } from "@mui/material";
import { useState } from "react";
const useStyle = makeStyles({
    component:{
        marginTop: 60,
    },
    box: {
        marginTop: '10%',
        marginLeft: '30%',
        height: 'full',
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
        fontWeight: 600,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        '&:hover':{
            background: '#FFF',
            color: '#002F34',
        }
    }
})



const Sell = () => {

    const classes = useStyle();







    return(
        <Box className={classes.component}>
            <Box className={classes.box}>
                <Box className={classes.category}>
                    <Typography className={classes.categoryText}>Category</Typography>
                    <Select 
                        label="Category"
                        className={classes.categoryBox}>
                        <MenuItem value={'Car'}>car</MenuItem>
                        <MenuItem value={'Mobile'}>mobile</MenuItem>
                        <MenuItem value={'House'}>House</MenuItem>
                    </Select>
                </Box>
                <Box className={classes.input}>
                    <TextField classname={classes.inputText}label="Product name"/><br/>
                    <TextField classname={classes.inputText} label="Product price"/><br/>
                    <TextField classname={classes.inputText} label="Product Description"/><br/>
                    <TextField classname={classes.inputText} label="Link for image of product"/><br/>
                    <Button className={classes.upload}>Upload</Button><br/>
                </Box>
            </Box>
        </Box>
    );
}



export default Sell;