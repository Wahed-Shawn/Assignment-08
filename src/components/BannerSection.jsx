import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroImg from '../assets/hero.png'
const BannerSection = () => {
    return (
        <div>
            <h1 className="text-5xl text-center text-[#001931] font-bold">We Build</h1>
            <h1 className="text-5xl text-center text-[#001931] font-bold mt-2"><span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
            <p className="w-[60%] mx-auto text-center text-[#627382] text-xl mt-4 mb-10">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="w-full flex justify-center gap-5">
                <button className="btn btn-primary text-xl bg-white text-black border-gray-300 py-6"><IoLogoGooglePlaystore color="indigo" size={32} /> Google Play</button>
                <button className="btn btn-primary text-xl bg-white text-black border-gray-300 py-6"><FaAppStoreIos color="indigo" size={32} /> App Store</button>
            </div>

            <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-[26rem] relative flex flex-col items-center pt-6 pb-10">
                <img src={heroImg} className="absolute bottom-full left-1/2 -translate-x-1/2 h-[23rem]" />
                <h2 className="text-[2.5rem] font-semibold">Trusted by Millions, Built for You</h2>
                <div className="mt-5 flex items-center gap-16">
                    <div className="text-center">
                        <p className="text-gray-200">Total Downloads</p>
                        <p className="text-[3.5rem] font-extrabold">29.6M</p>
                        <p className="text-gray-200">21% more than last month</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-200">Total Reviews</p>
                        <p className="text-[3.5rem] font-extrabold">906K</p>
                        <p className="text-gray-200">46% more than last month</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-200">Active Apps</p>
                        <p className="text-[3.5rem] font-extrabold">132+</p>
                        <p className="text-gray-200">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;