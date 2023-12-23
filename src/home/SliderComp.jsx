import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function App() {
  return (
    <div className="">
      <Slider {...settings}>
        <div className=" !flex items-center bg-gray-100">
          <div className="">
            <div className="text-6xl font-bold">Nike</div>
            <div className="text-lg my-4 ">
              Açıklamaasffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16  flex items-center justify-center hover:bg-slate-300">
              İncele
            </div>
          </div>
          <div>
            <img
              className="w-300 h-300 object-cover"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739af66b-1b5b-47ff-89ed-d97e90f2ccbd/air-max-sc-ayakkab%C4%B1s%C4%B1-2SwX5s.png"
            ></img>
          </div>
        </div>

        <div className=" !flex items-center bg-gray-100">
          <div className="">
            <div className="text-6xl font-bold">Nike</div>
            <div className="text-lg my-4 ">
              Açıklamaasffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16  flex items-center justify-center hover:bg-slate-300">
              İncele
            </div>
          </div>
          <div>
            <img
              className="w-300 h-300 object-cover"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739af66b-1b5b-47ff-89ed-d97e90f2ccbd/air-max-sc-ayakkab%C4%B1s%C4%B1-2SwX5s.png"
            ></img>
          </div>
        </div>
        <div className=" !flex items-center bg-gray-100">
          <div className="">
            <div className="text-6xl font-bold">Nike</div>
            <div className="text-lg my-4 ">
              Açıklamaasffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16  flex items-center justify-center hover:bg-slate-300">
              İncele
            </div>
          </div>
          <div>
            <img
              className="w-300 h-300 object-cover"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739af66b-1b5b-47ff-89ed-d97e90f2ccbd/air-max-sc-ayakkab%C4%B1s%C4%B1-2SwX5s.png"
            ></img>
          </div>
        </div>
        {/* Daha fazla slayt ekleyebilirsiniz */}
      </Slider>
    </div>
  );
}

export default App;
