import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

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
    price: {
        fontSize: 12
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
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography>
                            <span>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default DetailView;
