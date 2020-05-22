import React from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

// jsx - javascript xml
function App() {
  let categoryInfo = { title: "Category list", something: "Something" };
  let productInfo = { title: "Product list" };
  //   Encapsulation with props
  return (
    <div>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col lg="3" md="4" sm="4" xs="5">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col lg="9" md="8" sm="8" xs="7">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Function Comp
// Class Comp
// Hooks Comp - react 16.8

export default App;
