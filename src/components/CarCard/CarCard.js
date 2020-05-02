import React, { useState } from "react";
import "./CarCard.sass";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import CarDetails from "../CarDetails";

function getButtonText(isBooked) {
  if (isBooked) return "Booked";
  return "SELECT";
}

function CarCard(props) {
  // const [carDetailPage, setcarDetailPage] = useState(false);
  const {
    // isSelected = false,
    id,
    name,
    seats,
    color,
    fuelType,
    vehicleNumber,
    rent,
    isBooked,
    img,
    bookingDetails,
  } = props.car;
  return (
    <>
      {/* {!carDetailPage ? ( */}
      <div className="car-card">
        <header className="backgrounded">
          <h3>
            {name} ({fuelType})
          </h3>
        </header>

        <div className="card-content backgrounded">
          <img src={img} alt={`${name}`} />
          <div>
            {/* <p><strong>Location : </strong> {location}</p> */}
            <p>
              <strong>Number of Seats : </strong> {seats}
            </p>
            {/* <p><strong>Car Type : </strong> {carType}</p> */}
            {/* <p><strong>Transmission : </strong> {transmission}</p> */}
          </div>
        </div>

        <footer className="backgrounded">
          <span className="price-tag">&#8377;{rent}</span>
          <button
            disabled={isBooked}
            onClick={() => {
              props.history.push({
                pathname: "/booking-form",
                state: {
                  id,
                },
              });
            }}
          >
            {getButtonText(isBooked)}
          </button>
          {!props.isDetail ? (
            <button
              onClick={() => {
                props.setcarDetailPage(props.car);
              }}
            >
              Details
            </button>
          ) : (
            <button
              onClick={() => {
                props.setcarDetailPage("");
              }}
            >
              Back
            </button>
          )}
        </footer>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps, actions)(withRouter(CarCard));
// export default CarCard;
