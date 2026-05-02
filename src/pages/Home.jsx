import AppCard from "../components/AppCard";
import useFetch from "../hooks/useFetch";
import BannerSection from "../components/BannerSection";
import { NavLink } from "react-router";

const Home = () => {
    const { apps, loading } = useFetch()

    return (
        <div className="mt-38">
            <BannerSection />

            <section className="px-8 w-full">
                <h1 className="text-[#001931] text-4xl font-bold text-center">Trending Apps</h1>
                <p className="text-center mt-4 mb-10 text-lg text-gray-500">Explore All Trending Apps on the Market developed by us</p>

                <div className="grid grid-cols-4 gap-8">
                    {
                        loading ? [1, 2, 3, 4, 5, 6, 7, 8].map(index => <div key={index} className="flex flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>) :
                            apps.sort((a, b) => a - b).slice(0, 8).map(app => <AppCard key={app.id} app={app} />)
                    }
                </div>
                {!loading && <NavLink to='/apps'><button className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold w-[10%] mx-auto text-lg mt-5 block">See All</button></NavLink>}
            </section>
        </div>
    );
};

export default Home;