
const MyListDetails = ({product}) => {

    const{ photo,  userEmail, subcategory, stockStatus, rating, price, name,description, customization} = product




    return (
        <div>
              <div className="w-96 mt-10 h-[36rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ml-12">
	           <img src= {photo} alt="" className="object-cover object-center w-96 rounded-t-md h-80 dark:bg-gray-500" />
	      <div className="flex flex-col justify-between p-6 space-y-8">
		      <div className="space-y-2">
			    <h2 className="text-2xl font-semibold text-center tracking-wide">{name}</h2>
                <div className=" flex items-center justify-around mt-4">
                    <p className="mr-4"><span className="font-bold ">Price</span> : <span>{price}</span></p>
                    <p><span className="font-bold">Customization</span> : <span>{customization}</span></p>
                </div>
                <div className=" flex items-center justify-around mt-4 mb-4">
                    <p><span className="font-bold">Rating</span> : <span>{rating}</span></p>
                    <p><span className="font-bold">StockStatus</span> : <span>{stockStatus}</span></p>
                </div>

                <div className="mt-5 flex justify-around items-center">
                    <button className="text-white mt-4 w-36 rounded-xl p-3 bg-amber-500 ">Update</button>
                    <button className="text-white w-36 mt-4 rounded-xl p-3  bg-red-600">Delete</button>
                </div>
              </div>
	      </div>
          </div>
        </div>
    );
};

export default MyListDetails;