import Page from "./images/subs_pages.png";

function Portfolio4() {
  return (
    <div className=" bg-gray-200  h-[40rem] flex  w-full">
      <div className="mt-12 ml-[6rem]">
        <img src={Page} alt="" className="h-[30rem] w-[30rem]" />
      </div>
      <div className="w-[40%] ml-[8rem] mt-[10rem]">
        <h1 className="text-2xl font-black ml-[-3rem] text-pink-500">
          ____
          <span className=" ml-[1rem] font-bold pt-2 text-black">
            Inviting Custom Pages
          </span>
        </h1>
        <p className="pt-4">
          Do you have a specific message that requires more than the classical
          title, text, field, and button for your audience? Maybe some magic
          touch to support your marketing efforts? We’ve got you covered! Create
          a page to benefit from the powerful tagDiv Composer page builder and
          add it to the smart pop-up. Yeah! Marketing made easy!
        </p>
        <button className="bg-pink-600 rounded-full px-10 py-4 text-lg mt-7 text-white">
          SEE IT IN ACTION
        </button>
      </div>
    </div>
  );
}

export default Portfolio4;
