import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    component:{
        marginTop: 60,
        backgroundColor: "#f2f2f2"
    },
    container:{
        margin:'0 80px',
        backgroundColor:'#fff',
        display: 'flex'
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
            <Box className={classes.container}>
                <Box style={{minWidth: '40%'}}>
                    PPPPPPPPPPPPPppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                </Box>
                <Box>
                    ppppppppppppppppppppppppppppppppppppp
                </Box>
            </Box>
        </Box>
    );
}

export default DetailView;
