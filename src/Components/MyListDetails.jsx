import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListDetails = ({product}) => {

    const{ _id, photo,  userEmail, subcategory, stockStatus, rating, price, name,description, customization} = product

    const handleDelete = (_id)=>{
        console.log(_id);

       Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("deleted");


                fetch(`http://localhost:5000/item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Item has been deleted.',
                                'success'
                            )
                            // const remaining = coffees.filter(cof => cof._id !== _id);
                            // setCoffees(remaining);
                        }
                    })

            }
        })









    }




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
                    <Link to={`/updateItem/${_id}`} className="text-white mt-4 w-36 rounded-xl p-3 bg-amber-500 btn">Update</Link>
                    <button onClick={()=>handleDelete(_id)} className="text-white w-36 mt-4 rounded-xl p-3  bg-red-600">Delete</button>
                </div>
              </div>
	      </div>
          </div>
        </div>
    );
};

export default MyListDetails;