function CartItem(props) {
    return (
      <li><b>[{props.count}]</b> {props.name}</li>
    );
  }
  
  export default CartItem;
  