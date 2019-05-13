import React from "react";
import Headline from "./Headline";
import Image from "./Image";
import CarData from "./BilData";
import CarCard from "./CarCard";

const carWrapper = {
  borderRadius: "5px",
  background: "yellow",
  margin: "0px 0px 20px 0px"
};

const carHeader = {};

const carDescription = {};

class Car extends React.Component {
  render() {
    console.log(CarData);
    const list = CarData.map(car => <CarCard Modell={car.Merke} Merke={car.Modell} BildeID={car.BildeID}/> );
    return (
      <div style={carWrapper}>
        <div>{list}</div>
      </div>
    );
  }
}

export default Car;
