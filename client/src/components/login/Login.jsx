import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { authenticateSignup, authenticateLogin } from '../../service/api.js';

const useStyle = makeStyles({
    component: {
        height: '80vh',
        width: '60vh'
    },
    image: {
        backgroundImage: `url(${'data:image/png;base64,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'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '10vh',
        width: '100%',
        padding: '75px 50px',
    },
    head:{
        paddingLeft: '40%',
        fontSize: 25,
        color:'#002F34',
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        // background: '#FFF',
        // color: '#002F34',
        color: '#FFFFFF',
        background: '#002F34',
        height: 50,
        fontSize: 20,
        fontWeight: 600,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        borderRadius: 20,
        '&:hover':{
            background: '#FFF',
            color: '#002F34',
        }
    },
    SignUpbtn: {
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
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        paddingTop: 20,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#f16161',
        marginTop: 15,
        fontWeight: 600,
        lineHeight: 0
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Sign Up',
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialValues = {
    username: '',
    password: ''
};


const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [ account, toggleAccount ] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [ error, setError ] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login);
    }
    
    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup);
    }

    const signupUser = async () =>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const loginUser = async () =>{
        let response = await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
    }
    
    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]: e.target.value });
        console.log(login);
    }
    

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box>
                    <Box className={classes.image}></Box>
                    <Typography className={classes.head}><u>{account.heading}</u></Typography>
                    {
                        account.view === 'login' ? 
                        <Box className={classes.login}>
                            <TextField onChange = {(e) =>onValueChange(e)} name='username' label='Enter Email/Mobile number' autoComplete='off' />
                            <TextField onChange = {(e) =>onValueChange(e)} name='password' label='Enter Password' autoComplete='off'/>
                            {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                            <Button className={classes.loginbtn} onClick={() => loginUser()}>Login</Button>
                            <Typography onClick={()=> toggleUserAccount()} className={classes.createText}>New to XLO? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField onChange = {(e) =>onInputChange(e)} name='username' label='Enter Username' autoComplete='off'/>
                            <TextField onChange = {(e) =>onInputChange(e)} name='email' label='Enter Email' autoComplete='off'/>
                            <TextField onChange = {(e) =>onInputChange(e)} name='password' label='Enter Password' autoComplete='off'/>
                            <TextField onChange = {(e) =>onInputChange(e)} name='phone' label='Enter Phone' autoComplete='off'/>
                            <Button className={classes.SignUpbtn} onClick={() => signupUser()}>Sign Up</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;