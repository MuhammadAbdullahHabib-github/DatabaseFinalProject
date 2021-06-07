import React , {useEffect , useState} from 'react';
import Navbar from '../dashboard/navbar/Navbar';
import Sidebar from '../dashboard/sidebar/Sidebar';
import Stepper from './stepper/Stepper'
import Footer from '../dashboard/footer/Footer';
import AlreadyFormSubmitted from './AreadyFromSubmitted/AlreadyFromSubmitted'
import axios from 'axios';

const Form = ({setAuth ,  breadCrumb}) => {
    const [present, setPresent] = useState(true);

    useEffect(() => {
        const responcefun = async () => {
            const token = localStorage.getItem('token');
            const responce = await axios.post("http://localhost:5000/api/registrationform/societie",{token:token});
            //console.log(responce.data.rows.length);
            responce.data.rows.length !== 0 && setPresent(false) 
        }
        responcefun();
      
    }, [])
    return (
        <div className="container dashboard">
             <Navbar  breadCrumb={breadCrumb}/>
             <Sidebar setAuthenticate={setAuth}/>
             {present ? <Stepper /> : <AlreadyFormSubmitted/>}
             <Footer/>
        </div>
    )
}

export default Form


