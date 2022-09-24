import header from "./images/header.jpg";

function Header() {
  return (
    <div className="">
      <div>
        <div className="h-[100vh] w-[100%] bg-contain"  style={{backgroundImage: `linear-gradient(to bottom, rgba(0.00, 0.02, 0.02, 0.8),rgba(0.00, 0.02, 0.01, 0.8)),url(${header})`}}></div>
        <div className="heading mt-[-30rem] text-white flex flex-col h-[30rem] w-[65rem] ml-[10rem]">
          <h2 className="text-4xl justify-center flex w-full">Discover the new & amazing</h2>
          <h1 className="text-[7rem] font-black pl-20">SMART POP-UP</h1>
          <h1 className="text-[3.7rem] font-bold mt-[-2rem]">One shortcode: Unlimited Posibilities</h1>
          <p className="text-center w-[55rem] ml-7 text-xl">
            Newspaper theme version 11.4 brings you a unique shortcode that
            allows you to add custom content in a modal pop-up window to give
            visitors reasons to click on it. Create new and engaging
            interactions on your website!
          </p>
          <p className="text-center w-[55rem] ml-7 text-xl mt-8 text-pink-500">Try it with Newspaper Theme</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
