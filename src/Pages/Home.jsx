import { useLoaderData } from "react-router-dom";
import Swipper from "../Components/Swipper";
import Item from "../Components/Item";
import Workshop from "./Workshop";
import Countup from "../Components/Countup";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
    const items = useLoaderData()
    return (
        <div>
            <Swipper></Swipper>

            <h1 className="font-bold text-3xl text-center mt-7 mb-7">Our products</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    items.map(item=> <Item key={item.id} item={item}></Item>)
                }
            </div>

            <Workshop></Workshop>
            <Countup></Countup>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;