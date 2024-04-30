// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import UseHooks from "../Hooks/UseHooks";
import MyListDetails from "../Components/MyListDetails";
// import { useLoaderData } from "react-router-dom";

const MyList = () => {
    // const listItem = useLoaderData()

    const { user} = UseHooks() || {}
    const [item , setItem] = useState([])
    // console.log(user);

    useEffect(()=>{
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        })
    }, [user])



    // {image} {title}{subCategory}{description} {price}


    return (
        <div className="min-h-svh">


<div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 ">
    
{
           item?.map(product => <MyListDetails key={product.id} product={product}></MyListDetails>  )
        }
</div>
           
        </div>
    );
};

export default MyList;