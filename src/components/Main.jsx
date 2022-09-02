import React from "react";
import Img from "../assets/Avim.jpg";
import Img2 from '../assets/Confr.jpg' 

const Main = () => {
  return (
    <div>
      <div className="img relative">
        <img
          className="w-full mt-10 h-[600px] object-fill sm:object-cover pt-4 filter blur-[1px]"
          src={Img}
          alt=""
        />
        <p className="text-[100px] md:text-center font-bold uppercase text-center absolute top-[250px] left-[200px] p-6 text-[#f1a24c]">
          United in action
        </p>
        {/* <p className='text-[20px] font-bold absolute top-20 text-center'>Reimagining Futures: Women in Media, Peace and Technologies</p> */}
      </div>

      <div className="p-10">
        <h1 className="text-[70px] font-bold uppercase text-center text-[#581664] opacity-60">Our conferences</h1>
        <div className="flex">
        <img className="w-[500px] h-[500px] p-8 border-4 border-[#f1a24c] mt-20 rounded-full object-cover hover:opacity-90" src={Img2} alt="" />
        <p className="text-center text-[22px] p-10 mt-10 font-bold">
        Our annual conference is attended by media practitioners, academia,
        policy actors and civil society. As an international organisation, we
        aimto support and collaborate with like-minded organisations. AWiM
        Conferences brings together all media stakeholders, and as it enters its
        sixth year, we have demonstrated a track record of success in developing
        effective partnerships with organisations like the African Union
        Commission, the United Nations (UNESCO, UNEP, ILO and IOM), Fojo Media
        Institute, Ford Foundation, Google News Initiative,Natural Resource
        Governance Institute (NRGI), Deutsche Gesellschaft für Internationale
        Zusammenarbeit (GIZ),Wan-IFRAWomen in News, Free Press Unlimited, and
        various other agencies, associations, news media, academia and private
        organisations.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
