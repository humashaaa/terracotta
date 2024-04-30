import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";

const AllItem = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="flex ">
            <tr className="space-x-14">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>stockStatus</th>
            </tr>
          </thead>

          {data.map((single, index) => (


            <SingleItem
              key={single._id}
              single={single}
              index={index}
            ></SingleItem>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllItem;
