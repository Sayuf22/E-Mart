import { Box, Typography, makeStyles} from "@material-ui/core";
import { navData } from "../../constants/data";

const useStyle = makeStyles({
    component:{
        display: 'flex',
        margin: '60px 130px',
        height: 35,
        justifyContent: 'space-between'
    },
    category:{
        paddingTop: 7,
        paddingLeft: 15,
        textAlign: 'center',
        color:'#002F34',
    }
})


const Navbar = () =>{
    const classes = useStyle();
    return(
            <Box className={classes.component} boxShadow={1}>
            {
                navData.map(data=> (
                    data.text === "ALL CATEGORIES"?(
                        <Box>
                        <Typography className={classes.category}><b><b></b>{data.text}</b><b></b></Typography>
                    </Box>  
                    ):(
                    <Box>
                        <Typography className={classes.category}>{data.text}</Typography>
                    </Box>
                )))
                
            }
            </Box>
    );
}

export default Navbar;
