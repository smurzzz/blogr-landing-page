import logo from "../../images/logo.svg"
import { navLinks } from "../Navbar/Navbar"
import { dropDown } from "../Navbar/Navbar"


const Footer = () => {
    return(
        <>
            <div className="h-[800px] md:h-[400px] bg-Verydarkblackblue footer-radius">
                <div className="flex flex-col w-full md:flex-row items-center md:items-start justify-center common-padding md:py-[100px] md:px-[100px] text-center gap-[50px] md:gap-[120px]">
                   <div>
                      <img src={logo} alt="logo" />
                   </div>
                   <div className="flex flex-col md:flex-row gap-[35px] md:gap-[120px]">
                        {
                            navLinks.map((item, i) => (
                                <div key={i.id}>
                                    <h1 className="">{item.name}</h1>
                                    {
                                       dropDown.filter(drop => drop.id === item.id).map(drop => (
                                        drop.files.map((file, index) => (
                                            <p className="mt-3" key={index}>{file}</p>
                                        ))
                                       ))
                                    }
                                </div>
                            ))
                        }
                   </div>
                </div>
            </div>
        </>
    )
}

export default Footer