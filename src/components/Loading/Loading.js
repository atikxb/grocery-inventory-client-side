import React from 'react';
import ButtonSpinner from './ButtonSpinner';

const Loading = () => {
    return (
        <div style={{ height: '500px' }} className='d-flex justify-content-center align-items-center'>
            <ButtonSpinner />
        </div>
    );
};

export default Loading;