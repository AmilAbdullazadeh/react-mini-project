import React, { Component } from "react";
import { Table, Button, Container, Row, Alert } from "reactstrap";

class CartList extends Component {
  renderCart = () => {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit price</th>
            <th>Quantity per unit</th>
            <th>Units in stock</th>
            <th>Quentity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  emptyRenderCart = () => {
    return (
      <Container>
        <Row color="danger" className="row">
          <Alert
            style={{ width: "100%", textAlign: "center", marginTop: "5em" }}
            color="danger"
          >
            Cart is empty
          </Alert>
        </Row>
      </Container>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCart()
          : this.emptyRenderCart()}
      </div>
    );
  }
}

export default CartList;
