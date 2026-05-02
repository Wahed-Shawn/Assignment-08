import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const AppCard = ({ app }) => {
    const { image, title } = app
    console.log(app)
    return (
        <div className="card bg-base-100 shadow-sm p-3 cursor-pointer hover:shadow-xl hover:scale-105 hover:-translate-y-2.5 transition-all duration-200 ease-in-out">
            <figure className='h-[15rem]'>
                <img src={image} className='h-full w-full object-contain' />
            </figure>
            <div className="mt-5">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-[#00D390] font-semibold bg-[#F1F5E8] py-1 p-3 rounded-sm">
                        <MdOutlineFileDownload size={21} /> <span>9M</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#FF8811] font-semibold bg-[#FFF0E1] py-1 p-3 rounded-sm">
                        <FaStar size={18} /> <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;