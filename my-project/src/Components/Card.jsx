import Button from "../Button";
import "./Card.css";

function Card({id, productName, image, price, weight}) {

  return (
    <div className="card flex flex-col border-2 border-gray-200 p-3 rounded-md w-[300px] h-[420px] md:w-[200px] md:h-[280px] m-1 bg-white">
      <div className="product-image">
        <img
          src={image}
          className="h-[200px] w-[200px] md:h-[100px] md:w-[100px] mx-auto my-8 object-contain"
          alt=""
          srcset=""
        />
      </div>
      <div className="font-semibold text-sm">{productName}</div>
      <div className="text-s py-1">{weight} g</div>
      <div className="price-add-cart flex flex-row justify-between py-1 my-1">
        <div className="font-bold">₹{price}</div>
        <Button></Button>
      </div>
    </div>
  );
}

export default Card;
