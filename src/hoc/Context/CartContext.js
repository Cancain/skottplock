import React from "react";

export const CartContext = React.createContext();

class CartProvider extends React.Component {
  state = {
    items: []
  };

  itemExists = item => {
    const items = this.state.items;
    console.log("in itemExists()");

    items.map(existingItem => {
      console.log("in itemsExist() Map");
      console.log(item.id + " " + existingItem.id);
      console.log(item.parentId + " " + existingItem.parentId);
      if (
        item.id === existingItem.id &&
        item.parentId === existingItem.parentId
      ) {
        console.log("in itemExists() result: true");
        return true;
      } else {
        console.log("in itemExists() result: false");
        return false;
      }
    });
  };

  addNewItem = item => {
    const items = this.state.items;
    console.log("item added");

    items.push(item);

    this.setState({
      items: items
    });
  };

  incrementItem = item => {
    const items = this.state.items;
    console.log("item incremented");

    items.map(existingItem => {
      if (
        item.id === existingItem.id &&
        item.parentId === existingItem.parentId
      ) {
        return existingItem.ammount++;
      }
    });
  };

  addOrUpdateItem = (id, parentId) => {
    //Creates an object from the parameters
    const item = {
      id: id,
      parentId: parentId,
      ammount: 1
    };

    if (this.itemExists(item)) {
      console.log("exists");
      this.incrementItem(item);
    } else {
      console.log("does not exist");
      this.addNewItem(item);
    }
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          addItem: (id, parentId) => this.addOrUpdateItem(id, parentId)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
