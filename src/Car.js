import React from "react";
import Headline from "./Headline";
import Image from "./Image";
import CarData from "./BilData";
import CarCard from "./CarCard";

const carWrapper = {
  border: "2px solid #fafafa",
  borderRadius: "5px"
};

const carHeader = {};

const carDescription = {};

class Car extends React.Component {
  render() {
    console.log(CarData);
    const list = CarData.map(car => <CarCard Merke={car.Modell} />);
    return (
      <div style={carWrapper}>
        <div className={carHeader}>
          <Image backgroundImage={"../img/zoey.jpg"} />
          <Headline>Tittel henta fra json her</Headline>
        </div>
        <div>{list}</div>
        <p className={carDescription}>Description henta fra json her</p>
      </div>
    );
  }
}

export default Car;
