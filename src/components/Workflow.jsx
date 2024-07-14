import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { tutorialSteps } from "../constants";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";


const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Get Ready with{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          our Experts.
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="p-2 w-full lg:w-1/2 justify-center border border-white">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-orange-400 mx-10 my-10"
          >
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {tutorialSteps.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-purple-900 mx-6 bg-neutral-400 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
