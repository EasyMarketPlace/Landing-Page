import React from 'react';

const Background = ({children}) => {
    return (
        <div style={{backgroundColor:'#202331', color:'#fefefe', minHeight:'100vh', padding:'20px'}}>
            {children}
        </div>
    );
};

export default Background;