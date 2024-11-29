import { useState } from "react"
import editorDesktop from "../../images/editorDesktop.svg"
import editorMobile from "../../images/editorMobile.svg"
import { useEffect } from "react"


const Products = () => {
    const [image, setImage] = useState(window.innerWidth <= 760 ? editorMobile : editorDesktop)

    useEffect(() => {
        const handleResize = () => {
            setImage(window.innerWidth <= 760 ? editorMobile : editorDesktop)
        }

        window.addEventListener('resize', handleResize)

        return () => window.addEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <div className="min-h-screen relative mt-5 xl:px-[100px]">
                    <div className="h-[300px] flex justify-center items-center">
                        <h1 className="text-Verydarkblue text-center text-3xl overpass font-[600]">Design for the future</h1>
                    </div>
                    <div className="flex w-full items-center justify-center">
                    <img className="img-position mt-5 lg:absolute" src={image} alt="" />
                    </div>
                   <div className="py-[50px] flex flex-col gap-10">
                   <div className="px-[20px] text-center md:text-left lg:w-[500px] ">
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

export default Products