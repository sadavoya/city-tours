import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";
export default class TourList extends Component {
  state = {
    // Tour data to display
    // TODO: Change this to come from an API
    tours: tourData,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => tour.id !== id);
    this.setState({ ...this.state, tours: filteredTours });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            tour={tour}
            remove={() => this.removeTour(tour.id)}
          />
        ))}
      </section>
    );
  }
}
