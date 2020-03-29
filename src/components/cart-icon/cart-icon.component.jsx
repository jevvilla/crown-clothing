import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { cartItemsCountSelector } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" role="button" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: cartItemsCountSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
