import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

class CartSummery extends Component {
  renderCartSummery = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                onClick={() => this.props.removeFromCart(cartItem.product)}
                className="mr-4"
                color="danger"
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge className="ml-2" color="warning">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  renderEmptyCart = () => {
    return (
      <NavItem>
        <NavLink>Emty Cart</NavLink>
      </NavItem>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCartSummery()
          : this.renderEmptyCart()}
      </div>
    );
  }
}

export default CartSummery;
