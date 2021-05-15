import React from 'react';

const ButtonStyles = {    
    backgroundColor: 'rgba(231, 111, 81, 1)',
    color: 'white',
    borderRadius: '30px',
    height: '50px',
    width: '359px',
    fontFamily: 'Open Sans',
    fontSize: '30px',
    fontWeight: '700'
}

const ButtonStyles2 = {    
    backgroundColor: 'rgba(244, 162, 97, 1)',
    color: 'white',
    borderRadius: '30px',
    height: '50px',
    width: '359px',
    fontFamily: 'Open Sans',
    fontSize: '30px',
    fontWeight: '700'
}

const ButtonStyles3 = {    
    backgroundColor: 'rgba(42, 157, 143, 1)',
    color: 'white',
    borderRadius: '30px',
    height: '50px',
    width: '359px',
    fontFamily: 'Open Sans',
    fontSize: '30px',
    fontWeight: '700'
}


const Button = ({ children }) => (
    <>
    <button type="button" style={ButtonStyles}>{children}</button>
    <br></br>
    <button type="button" style={ButtonStyles2}>{children}</button>
    <br></br>
    <button type="button" style={ButtonStyles3}>{children}</button>
    </>
)

export default Button;