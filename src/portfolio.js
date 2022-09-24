import Side from './images/side_menu_popup.png';




function Portfolio() {


  return (
    <div className=" bg-gray-200  h-[40rem] flex  w-full">
      <div className='w-[40%] ml-[6rem] mt-[13rem]'>
        <h1 className='text-2xl font-black ml-[-3rem] text-pink-500'>____<span className=' ml-[1rem] font-bold pt-2 text-black'>Smooth Fly-out menus</span></h1>
        <p className='pt-4'>
          Designing the perfect fly-out menu no longer includs long work hours
          and heavy customizations. Instead, you have an intelligent modal
          pop-up created in the Newspaper Theme to give you all the positions
          and slick animation effects. You can create the content for the menu
          and add it to the pop-up in just a few minutes.
        </p>
        <button className='bg-pink-600 rounded-full px-10 py-4 text-lg mt-7 text-white'>SEE IT IN ACTION</button>
      </div>
      <div className='mt-28 ml-[12rem]'>
        <img src={Side} alt=""  className='h-[30rem] w-[25rem]'/>

      </div>
    </div>
  );
}

export default Portfolio;
