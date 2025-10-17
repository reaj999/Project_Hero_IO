import React from 'react';
import logo from '../../assets/logo.png';
import fb from '../../assets/fb.png';
import x from '../../assets/x.png';
import ln from '../../assets/linkedin.png';


const Footer = () => {
    return (
        <footer className="bg-[#001931] text-neutral-content p-10">
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between border-b border-gray-600 pb-6'>
                    <aside>
                        <a className="btn btn-ghost text-xl flex items-center p-0">
                            <img src={logo} alt="Hero logo" className="w-8 h-8" width="32" height="32" />
                            <span className="text-white font-bold">HERO.IO</span>
                        </a>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a><img src={fb} alt="Facebook" /></a>
                            <a><img src={x} alt="X" /></a>
                            <a><img src={ln} alt="LinkedIn" /></a>
                        </div>
                    </nav>
                </div>
                <div className='text-center pt-6'>
                    <p className='text-sm text-gray-300'>Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;