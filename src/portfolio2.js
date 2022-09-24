import Modal from "./images/subscription-modal-img.jpg";

function Portfolio2() {
  return (
    <div className=" bg-gray-200  h-[40rem] flex  w-full">
      <div className="mt-12 ml-[6rem]">
        <img src={Modal} alt="" className="h-[30rem] w-[30rem]" />
      </div>
      <div className="w-[40%] ml-[8rem] mt-[10rem]">
        <h1 className="text-2xl font-black ml-[-3rem] text-pink-500">
          ____
          <span className=" ml-[1rem] font-bold pt-2 text-black">
            Engaging Subscriptions
          </span>
        </h1>
        <p className="pt-4">
          Timing the right moment to display your membership plans is now easy!
          You can display content to capture visitors’ attention and display the
          subscription when they are ready to see it. In addition, the new smart
          pop-up can time interactions so you can decide when it shows up and
          how long it should be active.
        </p>
        <button className="bg-pink-600 rounded-full px-10 py-4 text-lg mt-7 text-white">
          SEE IT IN ACTION
        </button>
      </div>
    </div>
  );
}

export default Portfolio2;
