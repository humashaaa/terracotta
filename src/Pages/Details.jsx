import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const products = useLoaderData()
    const {id}= useParams()
    const idInt = parseInt(id)
    const productId = products.find(productId=> productId.id == idInt)
    const {title,subCategory, description,price,image, material, includes , dimensions, careInstructions} = productId
    // console.log(data);
    
        
    


    return (
        <div>
           <div className="hero p-5 bg-amber-50">
  <div className="hero-content flex-col lg:flex-row">
    <img src= {image} className="h-[32rem] w-[32rem] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="text-xl text-gray-700 font-semibold mt-2 ">{subCategory}</h1>
      <p className="py-3">{description}</p>
      <p className="font-bold">Price : <span>{price}</span></p>


      <p className="py-2  "> <span className="font-bold">Material </span> : <span>{material}</span></p>
      <p className="py-2  "> <span className="font-bold">Dimensions </span> : <span>{dimensions}</span></p>
      <p className="py-2  "> <span className="font-bold">Includes </span> : <span>{includes}</span></p>
      <p className="py-2"> <span className="font-bold">Care Instructions</span> : <span className="">{careInstructions}</span></p>
      <button className="btn bg-amber-600 text-white">Order Now</button>


    </div>
  </div>
</div>
        </div>
    );
};

export default Details;