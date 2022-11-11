// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
    return (
      <div className="BakeryItem">
        <img className="ItemImg" src={props.img}></img>
        <h1 className="ItemName">{props.name}</h1>
        <p className="ItemDesc">{props.desc}</p>
        <h2 className="ItemPrice">${props.price}</h2>
        <button className="ItemAddBtn" onClick={props.addItem}>Add to cart</button>
      </div>
    );
  }
  
  export default BakeryItem;
  