import React, { Component } from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

// jsx - javascript xml
class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };

  // arrowFunction
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    console.warn(categoryId);
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = { title: "Category list" };
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
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col lg="9" md="8" sm="8" xs="7">
              <ProductList
                products={this.state.products}
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// Function Comp
// Class Comp
// Hooks Comp - react 16.8

export default App;
