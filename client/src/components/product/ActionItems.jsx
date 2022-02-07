import { Box, Button, makeStyles } from "@material-ui/core";
import { payUsingPaytm } from "../../service/api";
import {post} from '../../utils/paytm.js';

const useStyle = makeStyles({
    leftConatainer:{
        padding: '40px 0 0 80px'
    },
    image:{
        padding: '15px 20px',
        border: '1px solid #f0f0f0'
    },
    button1:{
        height: 50,
        width:'80%',
        background:'#002F34',
        color: 'white',
        borderRadius: 20,
        '&:hover':{
            background: '#FFF',
            color: '#002F34',
            fontWeight: 600,
            
        }
    },
    button2:{
        height: 50,
        width:'80%',
        background:'white',
        color: '#002F34',
        borderRadius: 20,
        '&:hover':{
            background: '#002F34',
            color: 'white',
            fontWeight: 600,
            
        }
    },
})

const ActionItems = ({ product }) => {
    
    const classes = useStyle();

    const buyNow= async ()=>{
        let response = await payUsingPaytm({amount:500,email:'samudralalaxmivarnika@gmail.com'});
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }
    
    return (
        <Box className={classes.leftConatainer}>
            <img src={product.url} className={classes.image}/>
            <Button variant="contained" className={classes.button2} >Chat With Seller</Button><br/><br/>
            <Button variant="contained" className={classes.button1} onClick={() => buyNow()}>Buy Now</Button>
            
        </Box>

    );

}

export default ActionItems;