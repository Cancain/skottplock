import React from "react";

export const CartContext = React.createContext();

class CartProvider extends React.Component {
  state = {
    items: []
  };

  addItem = (id, parentId) => {};

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          addItem: (id, parentId) => this.addItem(id, parentId)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
