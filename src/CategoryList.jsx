import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem> Lorem ipsum. </ListGroupItem>
                    <ListGroupItem>Lorem ipsum dolor.</ListGroupItem>
                    <ListGroupItem>Lorem ipsum dolor sit amet, consectetur.</ListGroupItem>
                    <ListGroupItem>Lorem ipsum.</ListGroupItem>
                    <ListGroupItem> Lorem ipsum dolor sit. </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default CategoryList;