import React from 'react';

const AppCard = ({ app }) => {
    const{image,title} = app
    console.log(app)
    return (
        <div className="card bg-base-100 shadow-sm p-3">
            <figure className='h-[15rem]'>
                <img src={image} className='h-full w-full object-contain' />
            </figure>
            <div className="">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
        </div>
    );
};

export default AppCard;