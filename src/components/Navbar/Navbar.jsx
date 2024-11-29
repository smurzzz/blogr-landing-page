import logo from "../../images/logo.svg"
import arrowLight from "../../images/arrowLight.svg"
import arrowDark from "../../images/arrowDark.svg"
import menu from "../../images/menu.svg"
import close from "../../images/close.svg"
import { useEffect, useState } from "react"

export const navLinks = [
    {
        id: 1,
        name: "Product",
        path: "#",
    },
    {
        id: 2,
        name: "Company",
        path: "#",
    },
    {
        id: 3,
        name: "Connect",
        path: "#",
    },
]

export const dropDown = [
    {
        id: 1,
        files: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] 
    },
    {
        id: 2,
        files: ["About", "Team", "Blog", "Careers"] 
    },
    {
        id: 3,
        files: ["Contact", "Newsletter", "Marketplace", "Linkedin"] 
    },
]

const Navbar = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false)
    const [activeLinks, setActiveLink] = useState(null)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    
    const handleDropDown = (id) => {
        setActiveLink(activeLinks === id ? null : id)
    }
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024){
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <div className="xl:px-[100px] relative z-10 common-padding flex justify-between items-center">
                <div className="flex items-center">
                    <img className="mr-[50px]" src={logo} alt="logo" />
                    {
                        navLinks.map((item, i) => (
                           <div className="lg:flex hidden gap-2 items-center" onClick={handleDropDown} key={i.id}>
                            <a className="text-White overpass font-[600]" href={item.path}>
                                {item.name}
                            </a>
                            <img className="cursor-pointer mr-8" src={arrowLight} alt="arrowLight" />
                           </div>
                        ))
                    }
                </div>

                <div className="lg:flex gap-5 hidden">
                    <button className="overpass text-White font-[600]">Login</button>
                    <button className="bg-White text-Lightred font-[600] ubuntu w-[125px] py-2 rounded-full">Sign Up</button>
                </div>

                <img className="lg:hidden cursor-pointer" src={toggleMenu ? close : menu} alt="menu" onClick={handleMenu} />
            </div>

           {
            toggleMenu ?  <div className="position flex flex-col justify-center items-center w-[300px] sm:w-[600px] common-padding bg-White rounded-md">
            {
                navLinks.map((item, i) => (
                   <>
                    <div key={i.id} className="flex items-center gap-2 mt-5" onClick={() => handleDropDown(item.id)}>
                        <a className="text-Verydarkblue  overpass font-[600]" href={item.path}>
                            {item.name}
                        </a>
                        <img src={arrowDark} alt="arrowDark" />
                    </div>
                    
                   {
                    activeLinks === item.id && (
                        <div className="mt-5 z-20 common-padding w-[200px] sm:w-[500px] bg-Grayishblue rounded-md">
                            {
                                dropDown.filter((dropDown) => dropDown.id === item.id).map((dropDown) => (
                                    <div key={dropDown.id} className="flex flex-col gap-5">
                                        {
                                            dropDown.files.map((files, idx) => (
                                                <p className="overpass text-Verydarkblue font-[600] text-center" key={idx}>{files}</p>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    )
                   }
                   </>
                ))
            }
            

            <div className="w-full border mt-5"></div>

            <div className="flex flex-col mt-5 gap-3">
                <button className="overpass text- font-[600]">Login</button>
                <button className=" bg text-White font-[600] ubuntu px-6 py-2 rounded-full">Sign Up</button>
            </div>
        </div> : null 
           } 
        </>
    )
}

export default Navbar