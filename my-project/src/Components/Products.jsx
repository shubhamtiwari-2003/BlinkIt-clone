import Card from "./Card";

const Products = ({product}) => {
  return (
    <div className="product-cards max-w-[800px] flex justify-around marker p-8 flex-row flex-wrap bg-gray-100">
      {
        product.map((val)=>{
          return <Card {...val}></Card>
        })
      }
    </div>
  );
};

export default Products;
