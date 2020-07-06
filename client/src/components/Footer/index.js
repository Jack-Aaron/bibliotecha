import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className='footer'
            style={{
                position: 'fixed',
                paddingBottom: '6vmin',
                margin: 0,
                lineHeight: '6vmax',
                height: '6vmax', bottom: 0,
                width: '100%',
                backgroundColor: '#9DB4C0',
                textAlign: 'center'
            }}>
            <a href='https://jack-aaron.github.io/portfolio'
                target='_blank'
                rel='noopener noreferrer'
            >Jonathan Alpart 2020.</a>
        </div>
    );
}

export default Footer;
