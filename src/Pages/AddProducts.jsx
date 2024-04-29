// import { IoMdArrowDropdown } from "react-icons/io";
import Swal from 'sweetalert2'


const AddProducts = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const email = form.email.value;

    const addInfo = {
      name,
      subcategory,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userName,
      email,
    };
    console.log(addInfo);


    fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    })






  };

  return (
    <div className="p-10">
      {/* image ( use image URL)
b. item_name
c. subcategory_Name
d. short description
e. price
f. Rating
g. customization- example- yes, no
h. Processing Time
i. StockStatus - example- In stock, Made to Order
j. User Email
k. User Name
l. “Add” button */}

      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold text-center mb-9">Add Product</h2>
        <form onSubmit={handleAdd}>
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
                  placeholder="Processing Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label relative">
                <span className="label-text">StockStatus</span>

                {/* <details className="dropdown absolute top-7 right-9">
  <summary className="m-1 btn"><IoMdArrowDropdown /></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Yes</a></li>
    <li><a>No </a></li> 
  </ul>
</details> */}
              </label>
              <label className="input-group relative">
                <select
                  type="text"
                  name="stockStatus"
                  placeholder="StockStatus"
                  className="input input-bordered w-full"
                >
                  {/* <span><IoMdArrowDropdown/></span> */}
                  <option value="In stock" selected>
                    In stock
                  </option>
                  <option value="Made to order" selected>
                    Made to order
                  </option>
                </select>
              </label>
              {/* <select name="stockStatus " className="absolute bottom-14">
                                <option value= 'a'>A</option>
                                <option value= 'b'>b</option>

                            </select>
                         */}
            </div>
          </div>
          {/* 
                <details className="dropdown">
  <summary className="m-1 btn"><IoMdArrowDropdown /></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Yes</a></li>
    <li><a>No </a></li>
  </ul>
</details> */}

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="userName"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                />
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
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Your Craft Item"
            className="btn btn-block bg-amber-600 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
