import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useEffect } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";

//component
import ActionItems from "./ActionItems";

const useStyle = makeStyles({
    component:{
        marginTop: 60,
        backgroundColor: "#f2f2f2"
    },
    container:{
        margin:'0 80px',
        backgroundColor:'#fff',
        display: 'flex'
    },
    RightContainer:{
        marginTop: 50,
        '& > *':{
            marginTop: 10
        }
    },
    greyTextColor:{
        color: 'grey'
    },
    title:{
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 30
    },
    price: {
        fontSize: 20,
        fontWeight: 550
    },
    button:{
        height: 50,
        width:'50%',
        background:'#002F34',
        color: 'white',
        borderRadius: 20,
        '&:hover':{
            background: '#FFF',
            color: '#002F34',
            fontWeight: 600,
            
        }
    },
    buttonPadding:{
        paddingLeft: '20'
    }
});


const DetailView = ({ match }) => {

    const classes = useStyle();

    const { product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])

    return(
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{minWidth: '40%'}}>
                        <ActionItems product={product} />
                    </Box>
                    <Box className={classes.RightContainer}>
                        <Typography className={classes.title}>{product.title}</Typography>
                        <Typography>
                            <span className={classes.price}>Price: ₹{product.price}</span> &nbsp;&nbsp;&nbsp;<br/><br/><b>Product Description</b><br/>
                            <span className={classes.desciption}><i>{product.description}</i></span><br/><br/>
                            <span className={classes.username}><b>Seller:</b> <u>{product.username}</u></span><br/><br/><br/><br/>
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default DetailView;
