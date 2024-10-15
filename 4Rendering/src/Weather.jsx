import React from 'react';

const Cold = () => <h1>its Cold outside</h1>;
const Nice = () => <h1>its Nice outside</h1>;
const Hot = () => <h1>its Hot  outside</h1>;

const WeatherCheck = ({temp}) => {
    if(temp < 15){
    return <Cold />;
    }
    else if(temp >= 15 && temp <= 25){
    return <Nice />;
    }
    else {
        return <Hot />;
    }
};


const Weather = () => {
  return (
    <div>
      
    </div>
  )
}



export default WeatherCheck;
