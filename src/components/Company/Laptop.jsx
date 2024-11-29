import { useState, useEffect } from "react"
import laptopDesktop from "../../images/laptopDesktop.svg"
import laptopMobile from "../../images/laptopMobile.svg"


const Laptop = () => {
    const [image, setImage] = useState(window.innerWidth <= 760 ? laptopMobile : laptopDesktop)

    useEffect(() => {
        const handleResize = () => {
            setImage(window.innerWidth <= 760 ? laptopMobile : laptopDesktop)
        }
        
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    
    }, [])

    return(
        <>
            <div className="min-h-screen xl:px-[100px]">
                <div className="flex w-full relative items-center justify-center">
                    <img className="laptop-position mt-5 lg:absolute" src={image} alt="" />
                </div>

            <div className="py-[50px] flex flex-col gap-10 items-end">
                   <div className="px-[20px] lg:mt-[200px] text-center md:text-left lg:w-[500px] ">
                            <h1 className="text-Verydarkblue text-2xl overpass font-[600]">Introducing an extensible editor</h1>
                            <p className="overpass text-Verydarkblue mt-2">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                        </div>
                        <div className="px-[20px] text-center md:text-left lg:w-[500px]">
                            <h1 className="text-Verydarkblue text-2xl overpass font-[600]"> Robust content management</h1>
                            <p className="overpass text-Verydarkblue mt-2">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                        </div>
                   </div>
            </div>
        </>
    )
}

export default Laptop
