import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import pic from "./Log.jpeg";

const TopBar = () => {
    return(
        <Navbar bg="primary" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <img src={pic}  style={{ width: "15vh", height: "12vh" }}/></Link>{' |'}
                        
                        {'|'}<Link to="/Paymnet-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Payment</Link>{'|'}
                         <Link to="/Employee-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Employee</Link>{'|'}
                        <Link to="/FeedBack-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>FeedBack</Link>{'|'}
                        <Link to="/Customer-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Customer</Link>{'|'}
                        <Link to="/Delivery-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Delivery</Link>{'|'}
                        <Link to="/Invetory-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Inventory</Link>{'|'}
                        <Link to="/Sales-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Sales</Link>{'|'}
                        <Link to="/Supplier-Home/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Supplier</Link>{'|'}
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                    </h4>
                    
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;