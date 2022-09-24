import realtor1 from "./images/realtor-1.jpeg";
import realtor2 from "./images/realtor-2.jpeg";
import realtor3 from './images/realtor-3.jpeg';

function Cards() {
  return (
    <div className=" bg-gray-100  flex w-full h-[41rem]">
      <div className="flex flex-col">
        <div className="ml-[40rem] mt-12">
          <i class=" fas fa-solid fa-star text-yellow-500"></i>
          <i class=" fas fa-solid fa-star text-yellow-500"></i>
          <i class=" fas fa-solid fa-star text-yellow-500"></i>
          <i class=" fas fa-solid fa-star text-yellow-500"></i>
          <i class=" fas fa-solid fa-star text-yellow-500"></i>
        </div>
        <h1 className="ml-[20rem] text-2xl mt-6 w-[50rem] ">
          120,000+ DEDICATED CUSTOMERS TRUST US WITH THEIR PROJECTS
        </h1>
        <hr className="w-32 h-[1rem] ml-[39rem] mt-6" />
        <h1 className="text-pink-500 text-5xl font-bold ml-[33rem] mt-3">
          You should too!
        </h1>
      </div>

      <div className="flex mt-[18rem] ml-[-66.4rem]  ">
        <div className="flex flex-col bg-white h-[19rem] rounded-lg drop-shadow-xl w-[25rem] text-center">
          <img
            src={realtor2}
            alt=""
            className="h-16 w-16 text-center rounded-full ml-40 mt-8"
          />
          <p className="w-[21rem] text-center ml-7 mt-4 text-lg">
            "Newspaper is a complete out-of-the-box WordPress theme, and also
            gives you the ability to fine-tune your website if you need it."
          </p>
          <h1 className="text-pink-500 text-2xl font-bold">Elena Chepikova</h1>
          <h5 className="text-sm">Manager at HandMade39</h5>
        </div>
      </div>

      <div className="flex mt-[18rem] ml-[1.5rem]  ">
        <div className="flex flex-col bg-white h-[19rem] rounded-lg drop-shadow-xl w-[25rem] text-center">
          <img
            src={realtor1}
            alt=""
            className="h-16 w-16 text-center rounded-full ml-40 mt-8"
          />
          <p className="w-[21rem] text-center ml-7 mt-4 text-lg">
            "We are very happy with the support and the many updates and
            development offered by tagDiv web development company!"
          </p>
          <h1 className="text-pink-500 text-2xl font-bold">Chabot Philippe</h1>
          <h5 className="text-sm">Senior IT Manager, unric.org</h5>
        </div>
      </div>

      <div className="flex mt-[18rem] ml-[1.5rem]  ">
        <div className="flex flex-col bg-white h-[19rem] rounded-lg drop-shadow-xl w-[25rem] text-center">
          <img
            src={realtor3}
            alt=""
            className="h-16 w-16 text-center rounded-full ml-40 mt-8"
          />
          <p className="w-[21rem] text-center ml-7 mt-4 text-lg">
            "I've had a great experience with the theme. It has made my passion
            as a travel blogger this come true with ease. Thanks!"
          </p>
          <h1 className="text-pink-500 text-2xl font-bold">Alex Maltsev</h1>
          <h5 className="text-sm">Editor-in-Chief at Magazeta</h5>
        </div>
      </div>
    </div>
  );
}

export default Cards;
