import React, { Component } from "react";
import "./rating.scss";

const RATING_VALUE = ["Beginner", "Intermediate", "Advanced", "Expert"],
  TEXT_POSITION = "right",
  IS_TOOLTIP = true,
  RATING = 9,
  RATING_TYPE = "circle",
  MAX_RANGE = 10,
  RATING_NAME = "Rating Name",
  RATING_COLOR = "#009688",
  IS_IMAGE = false;

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }

  addRateType = () => {
    const { image = IS_IMAGE, ratingName = RATING_NAME } = this.props;
    return image === true ? (
      <img className="rating-image" src={ratingName} />
    ) : (
      ratingName
    );
  };

  drawFilledState = () => {
    const { rating = RATING, ratingType = RATING_TYPE } = this.props;
    return ((array, i, len) => {
      while (++i <= rating) {
        array.push(
          <div
            id={i}
            style={this.filledRatingColor()}
            className={`filled-class-${ratingType}`}
          />
        );
      }
      return array;
    })([], 0, 10);
  };

  drawNonFilledState = () => {
    const {
      rating = RATING,
      maxRange = MAX_RANGE,
      ratingType = RATING_TYPE
    } = this.props;
    return ((array, i, len) => {
      while (++i <= maxRange - rating) {
        array.push(
          <div
            id={i}
            style={this.nonFilledRatingColor()}
            className={`no-filled-class-${ratingType}`}
          />
        );
      }
      return array;
    })([], 0, 10);
  };
  onRatingHover = () => {
    const {
      rating = RATING,
      maxRange = MAX_RANGE,
      ratingValues = RATING_VALUE
    } = this.props;
    const rangeValue = Math.floor(rating / maxRange * 10);
    if (rangeValue >= 0 && rangeValue <= 4) {
      return ratingValues[0];
    } else if (rangeValue > 4 && rangeValue <= 6) {
      return ratingValues[1];
    } else if (rangeValue > 6 && rangeValue <= 9) {
      return ratingValues[2];
    } else if (rangeValue > 9) {
      return ratingValues[3];
    }
  };

  filledRatingColor = () => {
    const { color = RATING_COLOR } = this.props;
    return {
      border: `1px solid ${color}`,
      "background-color": color
    };
  };

  nonFilledRatingColor = () => {
    return {
      border: `1px solid ${this.props.color || RATING_COLOR}`
    };
  };

  render() {
    const {
      textPosition = TEXT_POSITION,
      tooltip = IS_TOOLTIP,
      rating = RATING,
      ratingType = RATING_TYPE,
      maxRange = MAX_RANGE,
      ratingName = RATING_NAME
    } = this.props;

    const structureClass =
      textPosition === "left"
        ? "rating-structure-left"
        : "rating-structure-right";
    return (
      <div className="rating-parent">
        {textPosition === "right" && (
          <div className="rating-name">{this.addRateType()}</div>
        )}
        <div class="rating-tooltip">
          {tooltip && (
            <span class="rating-tooltiptext">{this.onRatingHover()}</span>
          )}
          <div className={structureClass} totalRating={rating}>
            {textPosition === "left" && this.drawFilledState()}
            {this.drawNonFilledState()}
            {textPosition === "right" && this.drawFilledState()}
          </div>
        </div>
        {textPosition === "left" && (
          <div className="rating-name">{ratingName}</div>
        )}
      </div>
    );
  }
}
