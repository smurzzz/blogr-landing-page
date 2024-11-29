import phones from "../../images/phones.svg";
import Laptop from "./Laptop";

const Company = () => {
  return (
    <>
      <div className="min-h-screen relative mt-[100px]">
        <img
          src={phones}
          alt="phones"
          className="absolute sm:left-[10%] md:left-[15%] lg:left-[20%] top-[-8%] xl:left-[5%]"
        />
        <div className="common-padding xl:h-[400px] h-[700px] index-bg">
          <div className="h-full w-full flex flex-col justify-end xl:justify-center">
            <h1 className="w-full text-white mb-3 overpass font-[600] text-4xl xl:text-right text-center">
              State of the Arts Infrastructure
            </h1>
            <p className="overpass xl:text-left text-center text-Grayishblue xl:max-w-[500px] xl:ml-auto">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>

        <Laptop/>
      </div>
    </>
  );
};

export default Company;
