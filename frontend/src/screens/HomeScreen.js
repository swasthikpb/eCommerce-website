import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { listProduct } from "../actions/productAction";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products = [] } = productList;
  console.log(error); // Check what error contains


  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products && products.map((useProduct) => (
            <Col
              key={useProduct._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="d-flex"
            >
              <Product product={useProduct} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
