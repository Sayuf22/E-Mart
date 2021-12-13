import { useState, useContext } from 'react';
import { Box, Button, makeStyles, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
//component
import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';


const useStyle = makeStyles({
    login :{
        fontSize: 18,
        textTransform: 'none',
        paddingRight: 10,
        textDecoration: 'none',
        color: 'black',
        background: 'white',
        boxShadow : 'none',
        borderRadius: 3
    },
    wrapper:{
        marginLeft: 'auto',
        display: 'flex',
        marginRight: 100,
        alignItems: 'center'
    },
    sell:{
        borderRadius: 30,
        textDecoration: 'none',
        color: 'black'
    },
    sellImg:{
        height: 20,
        paddingRight: 8
    }
})



const HeaderButtons = () =>{
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);


    const openLoginDialog =() =>{
        setOpen(true);
    }


    const plusUrl= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX19fUAAAD7+/uJiYkbGxuvr6/09PT5+fn9/f0EBASGhoZFRUXMzMyenp5cXFzq6urX19dLS0s6Ojq9vb0UFBTe3t5ra2tjY2OUlJSlpaXKysru7u53d3fS0tKAgIAwMDC1tbVUVFQmJiYZGRk0NDSYmJgiIiKGQSFdAAAEgUlEQVR4nO2da3PiOgyGE1MshVu4hULTQC9L//9PPDFl2WlZFhGHWs55n28tMxk/I9lOgiWSBAAAAAAAAAAAAAAAAAAA4H+HTYiNYWZDoYdyF4i4rPrrwfOgtxnlhjpnyfblMUtPzMY5d8rRlOv0O6uCXeZ2AUtmUxtlX/zcX1vbkTBSPquNsm+K7s+3ijsQRWuq97MMPdHn6A0tP31P0C9hHHPoEfpC08sB/IyiCT1EP6hcXozgkSru5YYnbo25TP3hsoxZ0bxcnoSnqfgc81S0D1dmYex5ymOBX5Y+xhtE+iUyTItIg2jNkyRHa8V1pPu+5e21neIgmKXzSJ8YiXaiGKbRpinlUsF0EemNTSU2HMdpSAuxYS/O/YL6YsNBnIam84Y3xLAX5zy8IYYwVAoMYagfGMJQPzCEoX5gCEP9wBCG+oEhDPUDQxjqB4Yw1A8MYagfGMJQPzCEoX5gGL9hfGcx7LGIR3rKju91nsbeqwyFEmJ2NWck4yZD4TXrMZDhO0XccNHfznYPYj6WYsN3+VUf3oarzZRcVViLkayvxfl4KB7w/dkNCkMtJiuZci047fuzrPLWDsPVAVzIE+5nOJSptFUzZck8hxa6wLCdMJKdXSt8CUM9po9pC4pkhzoFD2RT/zPwNNPrV7PMfQV5qziCjqFnEM2Tbr+atc9UtJSIis/C4lWOYsbaQ1hvjBOfqimrbaf/Kx7rKb2EHryIbfOZyJPQgxfxUTY2LJVPwk+ydNQ0TUn/VvHJvukjsf6V9IBHIbG7n4mCeWPDx9BDF/JmGu6I/BpFlqbpQ8MQxrJZ1NtF05saXoUeupBd00Y+PIgiS7N02HSlMf0oDD16h1ztnqOFTeOX4PYt9NglZB4PF6z1NeJX5h5PT/KeASHZe7zHoKH2tca9/M49XmPc0BYhFFna8+r9ov62JkuXft9AURFa4Sq+fVGM9lc1Hi9pjvB5X049ZOmk6YPTCUv13alWsvS1leZEop5kYXgUHwy5jHVRXJw1Hw3O4UvgfWvtT03pbt80SbqxzNr4evQ3xJW2dzbDhTva0+KJE+JiPw9tdWK3rVo9bHKETb7Y9AaDQU+I/H5oKL2kY7wo6B6tst2Sk5Brqc5GBstvFnrSa7rL8qHdOSloRNj905cwhKF+YAhD/cAQhvqBIQz1A0MY6geGMNQPDGGoHxjCUD8whKF+YAhD/cAQhvqBIQz1033D+PpE3QpiGL/hDQeoIzXs/i88JvLCsOalWUG54ZdWGxfUB4ZnQsEs0p9Xt7wXGr5GOg2TRFpw0/cumgiFqNw9S5eRJmki3i96rRUV/Dz0eq2IwX2a3+FQ+g9hXa30FcMs1s3wyNXlNIt4If3kSolmlr6XSbQ5emR+MVEzV7zUQlvAsFgq/9XZdVlFnqOJU7QXSqbqAP4qol5lTrgCxvNErf/zbLshWCsWfwvjfBR/hv6Bq++9bmaLezWtDgSZvL/aHe0+JuN2WzkrwMkwUz4dPY2mhXXlZ53yO/G7sToAAAAAAAAAAAAAAAAAAMA5/wHaPFJ4LhZBRAAAAABJRU5ErkJggg==";
    return (
        <Box className={classes.wrapper}>
        {
            account ? <Profile account={account} setAccount={setAccount} />:
            <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openLoginDialog() }><u><b>Login</b></u></Button>
            </Link>
        }
            <Link style={{ textDecoration: 'none',color: 'black'}}><Box >
                <Button className={classes.sell} variant='outlined'><img src={plusUrl} className={classes.sellImg}/>Sell</Button>    
            </Box></Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    );
}

export default HeaderButtons;