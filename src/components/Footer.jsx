import React from 'react';

const Footer = () => {


    return (
        <div className='p-4 bg-yellow-meli text-footer' style={{ minHeight: '25vh' }}>
            <div className='d-flex justify-content-evenly gap-5 m-auto'>
                <div>
                    <h2 style={{ fontWeight: '600' }}>Carlos Store App</h2>
                    <h6>Carlos Mejía. 2022 © All Rights Reserved.</h6>
                </div>
                <div className='text-center'>
                    <h2 style={{ fontWeight: '600' }}>Contact</h2>
                    <a href="https://github.com/CJUNIOR98">
                        <i class="fa-brands fa-github buttons-footer"></i>
                    </a><br />
                    <a href="https://www.linkedin.com/in/carlos-junior-mej%C3%ADa-acu%C3%B1a-437702179/">
                        <i class="fa-brands fa-linkedin buttons-footer"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;