import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography} from '@material-ui/core';
import  {Link} from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const useStyle = makeStyles({
    component:{
        marginTop: 12,
        background: 'white'
    },
    image:{
        height:150
    },
    card:{
        paddingTop: '15px'

    },
    fresh:{
        padding: '15 px 20px',
        fontWeight: 550,
        color:'#002F34',
        fontSize: '25px'
    }
})



const Slide =  ({ products }) =>{
    const classes = useStyle();
    return(
        <Box className={classes.component}>
            <Box className={classes.fresh}>
                <Typography className={classes.fresh}>
                    Fresh Recommendations
                </Typography>
            </Box>
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                itemClass="carousel-item-padding-40-px"
                removeArrowOnDeviceType={["tablet","mobile"]}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
            >
                {
                    products.map(product =>(
                        <Link to={`/product/${product.id}`}>
                            <Box className={classes.card}>
                                <img src={product.url} className={classes.image}/>
                                <Typography>{product.title.shortTitle}</Typography>
                                <Typography>{product.discount}</Typography>
                                <Typography>{product.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    );
}
export default Slide;