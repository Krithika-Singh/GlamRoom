import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Heros
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-purple-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-1xl mt-6 mr-2">{option.price}</span>
              </p>
              <img
                  className="w-22 h-22 mr-6 border border-neutral-300"
                  src={option.image}
                  alt=""
                />
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-500 border border-purple-900 rounded-lg transition duration-200"
              >
                Shop Now 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
