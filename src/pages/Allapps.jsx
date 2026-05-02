import AppCard from "../components/AppCard";
import useFetch from "../hooks/useFetch";

const Allapps = () => {
    const { loading, apps } = useFetch()

    return (
        <div className='pt-38 bg-gray-100'>
            <h1 className="text-4xl text-center text-[#001931] font-bold">Our All Applications</h1>
            <p className="text-center text-[#627382] text-xl mt-4 mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="px-8 flex justify-between items-center">
                <p className="text-2xl text-[#001931] font-semibold">({apps.length}) Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search" className="outline-0" />
                </label>
            </div>

            <div className="grid grid-cols-4 gap-8 px-8 mt-6">
                {
                    loading ? [1, 2, 3, 4].map(index => <div key={index} className="flex flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>) :
                        apps.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Allapps;