import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const item = useLoaderData()

    const{ _id, photo , subcategory, stockStatus, rating, price, name,description, customization, processingTime} = item
    const handleUpdate = (e)=>{

        const form = e.target;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const photo = form.photo.value;
    
        const updatedInfo = {
          name,
          subcategory,
          description,
          price,
          rating,
          customization,
          processingTime,
          stockStatus,
          photo
        };
        console.log(updatedInfo);


        fetch(`https://assignment-10-server-two-snowy.vercel.app/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })






    }



    return (
        <div>
            <div className="p-10">

<div className="bg-[#F4F3F0] p-24">
  <h2 className="text-3xl font-bold text-center mb-9">Update : {name}</h2>
  <form onSubmit={handleUpdate}>
    {/* form name and quantity row */}
    <div className="md:flex mb-8">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="product Name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Subcategory</span>
        </label>
        <label className="input-group">
          <select
            type="text"
            name="subcategory"
            defaultValue={subcategory}
            placeholder="Subcategory"
            className="input input-bordered w-full"
          >
            <option value="Clay-made pottery" selected>
            Clay-made pottery
            </option>
            <option value="Stoneware" selected>
              Stoneware
            </option>
            <option value="Porcelain" selected>
              Porcelain
            </option>
            <option value="Terra Cotta" selected>
              Terra Cotta
            </option>
            <option value="Ceramics & Architectural" selected>
              Ceramics & Architectural
            </option>
            <option value="Home decor pottery" selected>
              Home decor pottery
            </option>
          </select>
        </label>
      </div>
    </div>
    {/* form supplier row */}
    <div className="md:flex mb-8">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="description"
            defaultValue={description}
            placeholder="Description"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
    {/* form category and details row */}
    <div className="md:flex mb-8">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            placeholder="Rating"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Customization</span>
        </label>
        <label className="input-group">
          <select
            type="text"
            name="customization"
            defaultValue={customization}
            placeholder="Customization"
            className="input input-bordered w-full"
          >
            <option value="Yes" selected>
              Yes
            </option>
            <option value="No" selected>
              No
            </option>
          </select>
        </label>
      </div>
    </div>
    <div className="md:flex mb-8">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Processing Time</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="processingTime"
            defaultValue={processingTime}
            placeholder="Processing Time"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label relative">
          <span className="label-text">StockStatus</span>

        </label>
        <label className="input-group relative">
          <select
            type="text"
            name="stockStatus"
            defaultValue={stockStatus}
            placeholder="StockStatus"
            className="input input-bordered w-full"
          >
            <option value="In stock" selected>
              In stock
            </option>
            <option value="Made to order" selected>
              Made to order
            </option>
          </select>
        </label>
       
      </div>
    </div>


    {/* form Photo url row */}
    <div className="mb-8">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
    <input
      type="submit"
      value="Update Your Craft Item"
      className="btn btn-block bg-amber-600 text-white"
    />
  </form>
</div>
</div>


        </div>
    );
};

export default Update;