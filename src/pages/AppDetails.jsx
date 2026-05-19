import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import { MdOutlineFileDownload, MdReviews } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const AppDetails = () => {
    const { apps, loading } = useFetch()
    const { id } = useParams()

    const app = apps.find(app => app.id == id) || ""
    const { image, title, companyName, reviews, ratingAvg, downloads } = app
    console.log(app)

    const addLocalStorage = () => {
        localStorage.setItem("app", JSON.stringify(app))
    }

    return (
        <div className='pt-38 bg-gray-100 px-4 min-h-screen'>
            {
                loading ? <div className="h-[18rem] flex gap-10 w-full">

                    <div className='h-full w-[20%] rounded-lg skeleton'></div>
                    <div className="w-[80%] flex flex-col gap-4">
                        <div className="skeleton w-36 h-5"></div>
                        <div className="skeleton w-80 h-5 mb-5"></div>
                        <div className="skeleton w-full h-5"></div>
                    </div>
                </div> :
                    <div className="">
                        <section className='h-[21rem] flex gap-10'>
                            <div className='h-full w-[20%] p-4 bg-white rounded-lg'>
                                <img src={image} className='h-full w-full object-contain' />
                            </div>
                            <div className="w-[80%] flex flex-col items-start">
                                <div className="">
                                    <h1 className='text-[2rem] font-bold text-[#001931]'>{title}</h1>
                                    <p className='text-[#627382] text-xl my-2'>Developed by <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                                </div>
                                <div className="divider"></div>
                                <div className="w-full h-full flex gap-20">
                                    <div className="flex flex-col justify-between">
                                        <MdOutlineFileDownload size={45} color='#54CF68' className='bg-linear-to-br from-[#54CF68] to-[#00827A] bg-clip-text text-transparent' />
                                        <p className='text-[#001931]'>Downloads</p>
                                        <p className='text-[2.5rem] text-[#001931] font-extrabold'>{downloads}</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <FaStar size={40} color='#FF8811' className='bg-linear-to-br from-[#54CF68] to-[#00827A] bg-clip-text text-transparent' />
                                        <p className='text-[#001931]'>Average Ratings</p>
                                        <p className='text-[2.5rem] text-[#001931] font-extrabold'>{ratingAvg}</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <MdReviews size={40} color='#632EE3' className='bg-linear-to-br from-[#54CF68] to-[#00827A] bg-clip-text text-transparent' />
                                        <p className='text-[#001931]'>Total Reviews</p>
                                        <p className='text-[2.5rem] text-[#001931] font-extrabold'>{reviews}</p>
                                    </div>
                                </div>
                                <button onClick={() => addLocalStorage(id)} className='btn mt-5 bg-[#00D390] btn-primary border-0 text-white py-6 px-8 text-xl'>Install Now (291 MB)</button>
                            </div>
                        </section>
                        <div className="divider mt-8"></div>
                        <section>
                            chart
                        </section>
                    </div>
            }
        </div >
    );
};

export default AppDetails;