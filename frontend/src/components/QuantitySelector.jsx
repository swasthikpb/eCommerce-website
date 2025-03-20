import React from "react";
import { Button } from "react-bootstrap";

const QuantitySelector = ({ quantity, setQuantity, countInStock }) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <Button
          style={{
            backgroundColor: "#d3d3d3", // Light grey background
            borderColor: "#d3d3d3", // Light grey border
            color: "black", // Black text
          }}
          size="sm"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          disabled={quantity === 1}
        >
          -
        </Button>
        <span
          className="mx-2"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            width: "40px",
            textAlign: "center",
          }}
        >
          {quantity}
        </span>
        <Button
          style={{
            backgroundColor: "#d3d3d3", // Light grey background
            borderColor: "#d3d3d3", // Light grey border
            color: "black", // Black text
          }}
          size="sm"
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity === countInStock}
        >
          +
        </Button>
      </div>
      {quantity === countInStock && (
        <small className="text-danger">
          Only {countInStock} items in stock!
        </small>
      )}
    </div>
  );
};

export default QuantitySelector;
