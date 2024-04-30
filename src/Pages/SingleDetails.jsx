import { useLoaderData, useParams } from "react-router-dom";

const SingleDetails = () => {

    const products = useLoaderData()
    const {id}= useParams()
    const idInt = parseInt(id)
    const productId = products.find(productId=> productId.id == idInt)
    const { rating, stockStatus, name,customization,photo, description,subcategory} = productId
    return (
        <div>
            <div className="hero p-5 bg-amber-50">
  <div className="hero-content flex-col lg:flex-row">
    <img src= {photo} className="h-[32rem] w-[32rem] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-xl text-gray-700 font-semibold mt-2 ">{subcategory}</h1>
      <p className="py-3">{description}</p>


      <p className="py-2  "> <span className="font-bold">Customization </span> : <span>{customization}</span></p>
     
      <p className="py-2"> <span className="font-bold">StockStatus</span> : <span className="">{stockStatus}</span></p>
      <p className="py-2"> <span className="font-bold">Rating</span> : <span className="">{rating}</span></p>

    </div>
  </div>
</div>
        </div>
    );
};

export default SingleDetails;