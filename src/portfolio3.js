import News from "./images/popup-newspaper-a.png";

function Portfolio3() {
  return (
    <div className=" bg-gray-200  h-[40rem] flex  w-full">
      <div className="w-[40%] ml-[6rem] mt-[6rem]">
        <h1 className="text-2xl font-black ml-[-3rem] text-pink-500">
          ____
          <span className=" ml-[1rem] font-bold pt-2 text-black">
            Pop-up Advertisements
          </span>
        </h1>
        <p className="pt-4">
          Design stunning calls to action, ads, and promotions like never
          before. You can now have pop-up ads and promotion exactly where you
          need them, without coding skills. Choose a specific behavior for each
          ad, combine banner ads with pop-up ones. Get creative with
          advertisements on your website and increase your revenue!
        </p>
        <button className="bg-pink-600 rounded-full px-10 py-4 text-lg mt-7 text-white">
          SEE IT IN ACTION
        </button>
      </div>
      <div className="mt-28 ml-[12rem]">
        <img src={News} alt="" className="h-[30rem] w-[25rem]" />
      </div>
    </div>
  );
}

export default Portfolio3;
