import React from 'react';

const Breadcrumb = ({title}) => {
    return (
        <div className=" p-5 bg-secondary">
        <h3 className="text-center text-white">{title}</h3>
    </div>
    );
};

export default Breadcrumb;