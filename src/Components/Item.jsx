
const Item = ({item}) => {
    const {id, title,subCategory, description,price,image} = item;
    return (
      <div>
  {/* //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
  // <figure><img src= {image} alt="Shoes" /></figure>
  // <div className="card-body">
  //   <h2 className="card-title">{title}</h2>
  //   <h2 className="card-title">{subCategory}</h2>
  //   <p>{description}</p>
  //   <p>{price}</p>
  //   <div className="card-actions justify-end">
  //     <button className="btn btn-primary">View details</button>
  //   </div>
  // </div> */}



  <div className="w-96 mt-10 h-[34rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ml-12">
	<img src= {image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
      <h2 className="">{subCategory}</h2>

			<p className="dark:text-gray-800">{description}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-amber-600" fdprocessedid="r5urib">View Details</button>
	</div>
</div>






</div>
    );
};

export default Item;