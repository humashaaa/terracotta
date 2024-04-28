import { Link } from "react-router-dom";
import img from "../assets/class.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Workshop = () => {
    const [text] = useTypewriter({
        words: ['workshops.', 'classes.'],
        loop: {},
    })
  return (
    <div className="mt-14">
      <div className="flex gap-5 p-16 justify-center ">
      <div className="w-96 h-96">
        <img className="w-96 h-96 rounded-bl-2xl" src={img} alt="" />
      </div>
     
      <div className="flex flex-col space-y-7">
      <h1 className="font-bold text-3xl">Join our <span>{text}</span>
        <span className="text-amber-700"> <Cursor/> </span></h1>
        <p className="w-[48rem]">  Ready to dive into the world of pottery and unleash your creativity? Join us at Terracotta for an unforgettable pottery workshop experience. Whether you're a complete beginner or an experienced potter looking to refine your skills, our workshops cater to all levels and interests. Explore the fundamentals of hand-building, master the art of wheel throwing and much more under the guidance of our expert instructors. With personalized attention, you'll have the opportunity to learn and connect with fellow pottery enthusiasts in our welcoming and inspiring studio environment. Browse our workshop schedule and reserve your spot today to embark on a journey of artistic discovery and self-expression. </p>
        <Link className="btn bg-amber-600 text-white w-32" to='/workshops'>Book seat</Link>
      </div>



     




</div>


    </div>
  );
};

export default Workshop;
