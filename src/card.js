function Card() {
  return (
    <div className=" bg-white drop-shadow-2xl h-[22rem] flex">
      <div className="flex flex-col w-[20%] text-center ml-14 mt-14">
        <i class="fas fa-solid fa-file-invoice text-6xl text-pink-400"></i>
        <h1 className="pt-4 text-2xl">FLY-OUT MENUS</h1>
        <p className="pt-5">
          Create sophisticated and trendy menus with ease. You can even design
          it as a page and use it as a menu. All the options you may need are
          already built it!
        </p>
      </div>

      <div className="flex flex-col w-[20%] text-center mt-14 ml-12">
        <i class="fas  fas fa-solid fa-receipt text-6xl text-pink-400"></i>
        
        <h1 className="pt-4 text-2xl">SUBSCRIPTIONS</h1>
        <p className="pt-5">
          Display your subscription plans at the right time! The new smart
          pop-up has a timer for interactions to show content only after
          capturing visitors’ attention.
        </p>
      </div>

      <div className="flex flex-col w-[20%] text-center mt-14 ml-12">
        <i class="fas fa-solid fa-list text-6xl text-pink-400"></i>
     
        <h1 className="pt-4 text-2xl">POP-UP ADS</h1>
        <p className="pt-5">
          Generating more revenue with pop-up ads has never been easier. You can
          create ads or promotions and this make sure they are loved by your
          visitors!
        </p>
      </div>

      <div className="flex flex-col w-[20%] text-center mt-14 ml-12">
        <i class=" fas fa-sharp fa-solid fa-file text-6xl text-pink-400"></i>
        
        <h1 className="pt-4 text-2xl">CUSTOM PAGES</h1>
        <p className="pt-5">
          Get more subscribers, generate more leads, and increase sales.
          Anything good for a page can now be a pop-up. Boost your marketing
          efforts!
        </p>
      </div>

      {/* <i class="fas fa-solid fa-desktop"></i> */}
    </div>
  );
}

export default Card;
