import desktopPattern from "../../images/desktopPattern.svg"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
    return(
        <>
            <div className="h-screen relative bg border-radius">
                <Navbar/>
                <div className="min-h-screen absolute top-[0] left-[0] w-full flex flex-col justify-center items-center gap-4">
                    <h1 className="text-center text-White font-[600]  text-5xl overpass">A modern publishing platform</h1>
                    <p className="text-Grayishblue overpass">Grow your audience and build your online brand</p>

                    <div className="flex gap-4">
                    <button className="bg-White text-Lightred font-[600] w-[130px] ubuntu py-3 rounded-full">Start for free</button> 
                    <button className="bg-transparent text-White border font-[600] w-[130px] ubuntu py-2 rounded-full">Learn more</button> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero