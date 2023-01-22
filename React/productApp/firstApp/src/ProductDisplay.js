import "./product.css";

const ProductDisplay = (props) => {
  console.log(props);
  // const renderData = props.prodData.map((item) => {
  //   return (
  //     <div className="card">
  //       <img src={item.image} alt={item.name} />
  //       <div>
  //         <h3>{item.name}</h3>
  //         <p>{item.description}</p>
  //         <p>Rs. {item.cost}</p>
  //         <p>{item.uses}</p>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className="main">
      <div>
        {props.prodData.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Rs. {item.cost}</p>
                <p>{item.uses}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
