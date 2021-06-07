import React , { useState ,  useEffect} from 'react';
import './Nav.css';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
            
        },
    },
    bread:{
        padding: '0px 0px 0px 20px'
    },
    link:{
        fontSize:"16px",
        color: '#6C757D'
    },
    typo:{
        color:'#2EC771',
        fontSize:"16px"
    }
    
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Navbar = ({breadCrumb}) => {
    const classes = useStyles();

    const [username, setUsername] = useState("");

    useEffect(() => {
        async function userData () {
        const token = localStorage.getItem("token");
        const res = await axios.post("/api/dashboard/", {token: token});
        setUsername(res.data.name);
        }
        userData();
    }, []);
    return (
        <div className="nav">
            <div className="nav__buttonicon">
            </div>
            <div className={classes.root}>
                <Breadcrumbs className={classes.bread} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} color="inherit" href="/" onClick={handleClick}>{username}</Link>
                    <Typography className={classes.typo} color="textPrimary">{breadCrumb}</Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default Navbar