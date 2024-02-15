import Logo from "../public/assets/logo.svg";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { TbBrandMedium } from "react-icons/tb";
import LeftHamburger from "../public/assets/align-text-left.svg";
import ImageSide from "../public/assets/Revenue.svg";
import MaskSide from "../public/assets/maskside.svg";
import Rectangle from "../public/assets/Rectangle 45.svg";
import RectangleDot from "../public/assets/Mask Group.svg";
import RectangleLine from "../public/assets/Rectangle 241.svg";

export default function App() {
  return (
    <div className="h-screen">
      <nav className="mx-3 md:mx-[100px] flex justify-between items-center h-[10vh]">
        <div className="hidden mt-5 md:flex md:gap-5">
          <CiTwitter size={20} />
          <CiFacebook size={20} />
          <TbBrandMedium size={20} />
        </div>
        <img src={Logo} alt="logo" />
        <img src={LeftHamburger} alt="hamburger" />
      </nav>
      <section className="h-[90vh] overflow-y-hidden flex justify-between items-center max-xl:flex-col-reverse">
        <div className="flex-1 flex flex-col h-full">
          <div className="mx-1 md:mx-0 relative md:-top-20 text-center md:text-justify flex-1 flex justify-center max-sm:items-center flex-col w-full gap-4 md:gap-7 md:pl-20">
            <h1 className="md:text-5xl font-overpass md:leading-normal font-bold">
              Mutual Investment
            </h1>
            <p className="max-w-[100%] md:text-2xl text-slate-gray font-overpass xl:leading-8 font-light">
              At Finance we care about your future. We help you invest the way
              you want. So you can relax, have fun and let your fund grow.
            </p>
            <button
              type="button"
              className="w-[50%] h-[40px] mt-4 rounded-3xl md:w-[240px] md:h-[58px] bg-primary border-none md:rounded-[55px] text-white font-overpass font-normal md:text-2xl"
            >
              Learn More
            </button>
          </div>
          <div className="hidden xl:block relative z-0">
            <img
              src={RectangleDot}
              alt="rectangleDot"
              className="absolute bottom-0 z-0"
            />
            <img
              src={RectangleLine}
              alt="rectangleLine"
              className="absolute bottom-0 z-0"
            />
            <img
              src={Rectangle}
              alt="rectangle"
              className="absolute bottom-0 z-0"
            />
          </div>
        </div>

        <div className="flex-1 flex relative h-full">
          <img
            src={ImageSide}
            alt="side_image"
            className="object-contain z-10 w-[90%]"
          />
          <img
            src={MaskSide}
            alt="side background"
            className="z-5 absolute w-[90%] right-0 -top-[10%]"
          />
        </div>
      </section>
    </div>
  );
}
