import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputProduct from './InputProduct';
import NavBar from './NavBar';
import ShopLogo from '../assets/shopIcon.png';

const Header = () => {

    const  navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <header className='bg-yellow-meli py-3'>
            <div className='container'>
                <img src={ShopLogo} alt="logo"/>
                <div className='row'>
                    <div onClick={goToHome} 
                        className='col-6 col-md-4 col-lg-3 text-blue-meli d-flex gap-2 home-logo'>
                        <div className='text-center'>
                                                        
                        </div>
                        <h2>E-commerce</h2>
                    </div>
                    <div className='col-12 col-md-5'>
                        <InputProduct />
                    </div>
                </div>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;