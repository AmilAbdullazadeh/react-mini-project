import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = {
    categories: [],
  };

  // life cycle
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    let url = "http://localhost:3000/categories";
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ categories: data }));
    }
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
