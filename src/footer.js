import logo from "./images/logo.png";
import Iso from "./images/iso9001-2015.webp";
import clutch from "./images/clutch-2021.webp";
import design from "./images/design-rush.webp";
import menifest from "./images/themanifest-sq-e1638523262190.webp";
import Web from "./images/web-developers-2021-Badge.webp";

function Footer() {
  return (
    <div className="h-[38rem]  bg-black opacity-90">
      <div className="flex w-full h-[25rem] bg-black opacity-90">
        <div className="flex flex-col mt-14 ml-9">
          <div className="flex">
            <img src={logo} alt="" className="h-12 " />
            <h2 className="mt-2 ml-3 text-lg text-white">tagDiv</h2>
          </div>
          <p className="text-white w-[19rem]">
            We are a dynamic team of skilled developers, designers, and support
            experts dedicated to providing the web solutions you need to achieve
            success.
          </p>
          <div className="social text-white mt-7">
            <i class="fas fa-brands fa-facebook-f pl-1"></i>
            <i class="fas fa-brands fa-instagram pl-6"></i>
            <i class="fas fa-brands fa-twitter pl-6"></i>
            <i class="fas fa-brands fa-youtube pl-6"></i>
          </div>
        </div>

        <div className="flex flex-col mt-14 ml-32">
          <div className="flex">
            <h2 className="mt-2 ml-3 text-xl text-pink-500">
              ___<span className=" text-white">About Us</span>
            </h2>
          </div>
          <div className="text-gray-300 pt-4 text-md">
            <p>Meet The Team </p>
            <p className="pt-2">Portfolio</p>
            <p className="pt-2">Customization Services</p>
            <p className="pt-2">Blog</p>
            <p className="pt-2">Newspaper Showcase</p>
            <p className="pt-2">Newsmag Showcase</p>
            <p className="pt-2">Privacy Policy</p>
            <p className="pt-2">Cookie Policy</p>
          </div>
        </div>

        <div className="flex flex-col mt-14 ml-28">
          <div className="flex">
            <h2 className="mt-2 ml-3 text-xl text-pink-500">
              ___<span className=" text-white">Expertise</span>
            </h2>
          </div>
          <div className="text-gray-300 pt-4 text-md">
            <p>WordPress Themes</p>
            <p className="pt-2">Web and Enterprise Websites</p>
            <p className="pt-2">Internet Development</p>
            <p className="pt-2">eCommerce</p>
            <p className="pt-2">Responsive Wireframing</p>
            <p className="pt-2">Web Design Integration</p>
            <p className="pt-2">Performance Optimization</p>
          </div>
        </div>

        <div className="flex flex-col mt-14 ml-24">
          <div className="flex">
            <h2 className="mt-2 ml-3 text-xl text-pink-500">
              ___<span className=" text-white">Services</span>
            </h2>
          </div>
          <div className="text-gray-300 pt-4 text-md">
            <p>Enterprise Software Development</p>
            <p className="pt-2">Web Application Development</p>
            <p className="pt-2">Design And Front-end Development</p>
            <p className="pt-2">Wordpress Development</p>
            <p className="pt-2">Mobile Application Development</p>
            <p className="pt-2">Application Integration</p>
            <p className="pt-2">Digital Maintenance</p>
          </div>
        </div>
      </div>
      <hr className="bg-gray-800" />
      <div className="flex justify-evenly px-[15rem]  mt-7">
        <img src={Iso} alt="" className="h-24 w-24" />
        <img src={clutch} alt="" className="h-24 w-24" />
        <img src={design} alt="" className="h-20 w-44" />
        <img src={menifest} alt="" className="h-24 w-24" />
        <img src={Web} alt="" className="h-24 w-24" />
      </div>
      <hr className="bg-gray-800 mt-9" />

      <div className="text-white  flex justify-between px-7 mt-2">
        <p>tagdiv.com - ELECTRONISTA SRL - CIF: RO26676481 Romania</p>
        <p>
          Proudly made by tagDiv using the ❤ Newspaper theme. Powered by
          WordPress
        </p>
      </div>
    </div>
  );
}

export default Footer;
