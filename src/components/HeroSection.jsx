import video3 from "../assets/video3.mp4";
import video4 from "../assets/video5.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Glam Room is a green room
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          Makeup for every mood, every you
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Indulge in endless beauty possibilities at GlamRoom! 
          Discover a vast collection of your favorite makeup essentials at amazing prices, 
          with endless variety to suit every style and preference.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-300 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          Shop Now
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Check Deals
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
