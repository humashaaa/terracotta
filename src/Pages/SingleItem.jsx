import { Link } from "react-router-dom";

const SingleItem = ({single, index}) => {
    const {price, rating, stockStatus, name, _id} = single;
    const i = index + 1

    return (
        <div>
           
    {/* head */}
   
    <tbody className=" flex gap-16 items-center">
      {/* row 1 */}
      <tr>
        <th>{i}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{stockStatus}</td>
        <td className="text-amber-700"><Link to={`/allItem/${_id}`}>View Details</Link></td>
      </tr>
    </tbody>
  
        </div>
    );
};

export default SingleItem;