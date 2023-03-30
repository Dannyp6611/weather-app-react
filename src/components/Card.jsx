import React from 'react';
import DayImage from '../assets/img/day.svg';
import NightImage from '../assets/img/night.svg';

const Card = ({
  cityName,
  temperature,
  isDayTime,
  weatherCondition,
  weatherIcon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden text-center uppercase tracking-widest  mt-6">
      <div className="card-image max-w-full object-cover">
        <img src={`${isDayTime ? DayImage : NightImage}`} alt="" />
      </div>

      {/* icon */}
      <div className="w-[100px] h-auto mx-auto bg-gray-100 rounded-full relative bottom-10 -mb-10 flex items-center justify-center">
        <img src={`./icons/${weatherIcon}.svg`} alt="" />
      </div>

      <div className="card-body text-gray-400 p-6">
        <h3 className="text-3xl text-gray-700 mb-4">{cityName}</h3>
        <p>{weatherCondition}</p>

        <p className="text-5xl mt-10">
          <span>{temperature}</span> &deg;C
        </p>
      </div>
    </div>
  );
};

export default Card;
