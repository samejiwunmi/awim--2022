import React from "react";
import ImgAbt from "../assets/Aboutus.jpg";
import ImgWho from "../assets/Whatwedo.jpg";

const About = () => {
  return (
    <div>
      <div className="about-us grid grid-cols-2 p-6">
        {/* <hr className='bg-[#581664] w-[400px] h-1 mt-6 relative left-[475px] top-[75px]'/> */}
        <div className="part1">
          <h1 className="text-[70px] uppercase font-bold text-center p-10 mt-4 text-[#f1a24c]">
            About Awim
          </h1>
          <hr className="bg-[#581664] w-[400px] h-1 relative left-[125px] top-[-50px]" />
          <p className="text-center text-[18px] font-bold leading-8">
            African Women in the Media, is an international non-governmental
            organisation for African women working in media industries anywhere
            in the world. We aim to impact positively the way media functions in
            relation to women, and our vision is that one-day African women and
            women working in media in Africa, will have equal access
            torepresentation and opportunities in media industries and media
            content. Founded in 2016, our members are made up of African women
            in diverse media backgrounds from news media, film, to
            communications. <br /> Our annual conference is attended by media
            practitioners, academia, policy actors and civil society. As an
            international organisation, we aimto support and collaborate with
            like-minded organisations.
          </p>
        </div>
        <div className="img-about w-[700px] p-10 mt-10">
          <img
            className="rounded-lg border-4 border-[#581664] hover:border-[#f1a24c] transition-3s"
            src={ImgAbt}
            alt=""
          />
        </div>
      </div>

      <div className="whowe-are grid grid-cols-2">
        <div className="imgwho w-[700px] p-10 mt-12">
          <img
            className="rounded-lg border-4 hover:border-[#581664] border-[#f1a24c] transition-3s"
            src={ImgWho}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-[70px] uppercase font-bold text-center p-10 mt-4 text-[#581664]">
            Who we are
          </h1>
          <hr className="bg-[#f1a24c] w-[500px] h-1 mt-6 relative left-[90px] top-[-70px]" />
          {/* <hr className='bg-[#581664] w-[400px] h-1 mt-6 relative left-[475px] top-[75px]'/> */}
          <p className="text-center text-[18px] font-bold leading-8 -mt-11">
            With the theme United in Action, AWiM22 Morocco takes place on 8-9
            December 2022, as a hybrid conference. United in Action refers to
            the coming together of all African women in their shared
            experiences, and unity among media practitioners, academics, policy
            actors and civil society towards gender equality in the newsroom and
            in media content. Therefore, the AWiM22 conference is guided by an
            ethos of shared best practices and collaborative action to impact
            positively the way media functions in relation to African women. We
            posit that gender equality in and through the media is not just a
            moral and ethical obligation for media organisations, but a
            fundamental tenet of media's role in society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
