import logo from './images/logo.png';



function Nav() {
    return (
        <div className="w-full flex justify-between items-center bg-black text-white p-4 fixed z-50">
            <div className='flex '>
            <img src={logo} alt="" className='h-12 '/>
            <h2 className='mt-2 ml-3 text-lg'>tagDiv</h2>
            </div>
             <div className='text-lg flex w-[75%] justify-evenly'>
             <h2 className='pt-3'>Services</h2>
            <h2 className='pt-3'>Portfolio</h2>
            <h2 className='pt-3'>Themes</h2>
            <h2 className='pt-3'>Resources</h2>
            <h2 className='pt-3'>Rewiews</h2>

            <i class=" fas fa-regular fa-magnifying-glass pt-4 text-2xl"></i>
            <button className='border-2 p-4 text-sm'>BUY NEWSPAPER</button>
            <button className='bg- p-4 bg-fuchsia-800 text-sm'>REQUEST A QUOTE</button>

           

             </div>
    
          


        </div>
    )
    
}

export default Nav