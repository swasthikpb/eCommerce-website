import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import QuantitySelector from "../components/QuantitySelector";
import axios from "axios";

const ProductScreen = () => {
  const { ids } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${ids}/`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Product not found");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [ids]);

  return (
    <div className="container">
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6} xs={12} className="mb-3">
            <Image
              src={product.image}
              alt={product.name}
              className="product-image"
              fluid
            />
          </Col>

          <Col md={3} xs={12} className="product-details">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} ratings`}
                  color="#f8e825"
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Price: ${product.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} xs={12}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col>Quantity:</Col>
                      <Col>
                        <QuantitySelector
                          quantity={quantity}
                          setQuantity={setQuantity}
                          countInStock={product.countInStock}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                    disabled={product.countInStock === 0}
                    onClick={() => {
                      if (quantity > product.countInStock) {
                        alert(
                          `You cannot purchase more than ${product.countInStock} items`
                        );
                      } else {
                        console.log(
                          `Adding ${quantity} of ${product.name} to cart`
                        );
                      }
                    }}
                    type="button"
                  >
                    <FaShoppingCart className="me-2" /> Add To Cart
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    <FaShoppingCart className="me-2" /> Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
