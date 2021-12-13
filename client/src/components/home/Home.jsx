//
import { Box, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//Components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { getProducts as listProducts  } from "../../redux/actions/productActions";
//import { products } from "../../constants/data";



const useStyle = makeStyles({
    component:{
        padding: 10,
        background: "#F2F2F2"
    }
})



const Home = () => {
    const classes = useStyle();
    const {products} = useSelector(state=> state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    },[dispatch])
    return(
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Slide
                products={products} />
            </Box>
            
        </div>
    );
}


export default Home;