import React from "react";

export const CartContext = React.createContext();

class CartProvider extends React.Component {
  state = {
    items: []
  };

  getItems = () => {
    return this.state.items;
  };

  itemExists = item => {
    const items = this.state.items;
    let duplicate = false;

    items.forEach(existingItem => {
      if (
        item.id === existingItem.id &&
        item.parentId === existingItem.parentId
      )
        duplicate = true;
    });
    return duplicate;
  };

  addNewItem = item => {
    const items = this.state.items;

    items.push(item);

    this.setState({
      items: items
    });
  };

  incrementItem(item) {
    const items = this.state.items;

    items.forEach(existingItem => {
      if (
        item.id === existingItem.id &&
        item.parentId === existingItem.parentId
      ) {
        existingItem.ammount++;
      }
    });

    this.setState({
      items: items
    });
  }

  decrementItem(item) {
    const items = this.state.items;

    items.forEach(existingItem => {
      if (
        item.id === existingItem.id &&
        item.parentId === existingItem.parentId
      ) {
        if (existingItem.ammount > 1) {
          existingItem.ammount--;
        }
      }
    });

    this.setState({
      items: items
    });
  }

  addOrUpdateItem = (id, parentId) => {
    //Creates an object from the parameters
    const item = {
      id: id,
      parentId: parentId,
      ammount: 1
    };

    if (this.itemExists(item)) {
      this.incrementItem(item);
    } else {
      this.addNewItem(item);
    }
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          addItem: (id, parentId) => this.addOrUpdateItem(id, parentId),
          incrementItem: item => this.incrementItem(item),
          decrementItem: item => this.decrementItem(item)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
