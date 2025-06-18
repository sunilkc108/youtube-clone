import { useState } from "react";
import {
    HiOutlineBell,
    HiOutlineDotsHorizontal,
    HiOutlineDownload,
    HiOutlineSave,
    HiOutlineScissors,
    HiOutlineThumbDown,
    HiOutlineThumbUp,
} from "react-icons/hi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

type VideoDetailsProps = {
    title: string;
    channel: string;
    views: string;
    published: string;
    description: string;
    likes: string;
};

const VideoDetails = ({
    title,
    channel,
    views,
    published,
    description,
    likes,
}: VideoDetailsProps) => {
    const [subscribe, setSubscribe] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleSubs = () => {
        setSubscribe((prev) => !prev);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    };

    return (
        <>
        <h1 className= "text-xl font-bold mb-1" > { title } </h1>
        < div className = "flex justify-between" >
            <div className="flex gap-2 justify-center items-center" >
                <div className="h-10 w-10 bg-red-300 rounded-full" > </div>
                    < div >
                    <h1 className="font-semibold text-l" > { channel } </h1>
                        < p className = "text-gray-500 text-xs" > 2.2M subscribers </p>
                            </div>
                            < button
    className = {`py-[6px] px-3  rounded-full font-semibold text-sm ml-5 cursor-pointer flex items-center gap-2 ${animate ? "animate-bounce" : "scale-100"
        } ${subscribe ? "bg-gray-100" : "text-white bg-[#0f0f0f]"}`
}
onClick = { handleSubs }
    >
    { subscribe && (
        <HiOutlineBell
                size={ 20 }
className = "transition-transform duration-300"
    />
            )}
{ subscribe ? "Subscribed" : "Subscribe" }
</button>
    </div>
    < div className = "flex gap-2" >
        <div className="flex items-center" >
            <button className="bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-l-2xl hover:bg-gray-300 cursor-pointer" >
                <HiOutlineThumbUp size={ 18 } />
                    < span className = "font-medium text-sm" > { likes } </span>
                        </button>
                        < span className = "bg-[#f2f2f2] py-1 text-gray-300" >| </span>
                            < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[7px] px-3 rounded-r-2xl hover:bg-gray-300 cursor-pointer" >
                                <HiOutlineThumbDown size={ 18 } />
                                    </button>
                                    </div>
                                    < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-2xl font-medium hover:bg-gray-300 cursor-pointer" >
                                        <HiOutlineArrowTrendingUp size={ 18 } />
                                            < span className = "text-sm" > Share </span>{" "}
                                                </button>
                                                < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-2xl font-medium hover:bg-gray-300 cursor-pointer" >
                                                    <HiOutlineDownload />
                                                    < span className = "text-sm" > Download </span>
                                                        </button>
                                                        < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-2xl font-medium hover:bg-gray-300 cursor-pointer" >
                                                            <HiOutlineScissors size={ 18 } />
                                                                < span className = "text-sm" > Clip </span>{" "}
                                                                    </button>
                                                                    < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-2xl font-medium hover:bg-gray-300 cursor-pointer" >
                                                                        <HiOutlineSave size={ 18 } />
                                                                            < span className = "text-sm" > Save </span>{" "}
                                                                                </button>
                                                                                < button className = "bg-[#f2f2f2] flex items-center justify-center gap-1 py-[6px] px-3 rounded-2xl font-medium hover:bg-gray-300 cursor-pointer" >
                                                                                    <HiOutlineDotsHorizontal size={ 18 } />
                                                                                        </button>
                                                                                        </div>
                                                                                        </div>
                                                                                        < div className = "flex gap-6 mt-5 justify-between items-center" >
                                                                                            <div className="bg-[#f2f2f2] w-full rounded-xl p-4" >
                                                                                                <h1 className="text-sm font-semibold" >
                                                                                                    { " "}
{ views } views { published } { " " }
</h1>
    < p className = "text-sm" > { description.substring(0, 100) } </p>
        </div>
        < div className = "bg-[#f2f2f2] w-full rounded-xl p-4" >
            <h1 className="text-sm font-semibold" > Live chat replay </h1>
                < div className = "flex justify-between mt-3" >
                    <p className="text-sm" >
                        See what others said about this video while it was live
                            </p>
                            < button className = "px-1 py-1 bg-[#dfd9d9] text-xs rounded-xl font-semibold hover:bg-gray-300 cursor-pointer" >
                                Open panel
                                    </button>
                                    </div>
                                    </div>
                                    </div>
{/* Details.....end */ }
</>
  );
};

export default VideoDetails;
