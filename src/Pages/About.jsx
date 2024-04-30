import { CiPhone } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Fade } from "react-awesome-reveal";

// import banner4 from '../assets/banner4.jpg';

const About = () => {
    return (
        <div>
            <div className="text-center space-y-6 mt-11 mb-10">
                <h1 className="text-4xl font-bold spa">Turning mud into something amazing</h1>
                <p className="w-[48rem] ml-96">At Terracotta, we believe that every piece of pottery tells a story – of the hands that shaped it, the clay that formed it, and the passion that brought it to life. Nestled in [Location], our studio is a sanctuary for artisans and enthusiasts alike, where creativity flows freely and artistry thrives.</p>
            </div>


            

			<Fade direction={ 'left'}>

            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src= {banner1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			

			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">Tailored Learning Experience

</h3>
				<p className="my-6 dark:text-gray-600">Led by experienced instructors passionate about pottery, our workshops are designed to cater to diverse interests and skill levels. From introductory sessions covering pottery fundamentals to specialized workshops focusing on advanced techniques like wheel throwing, hand-building, glazing, and more, there's something for everyone at terracota.</p>
			</div>
		</div>

	

		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={banner2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">State-of-the-Art Facilities

</h3>
				<p className="my-6 dark:text-gray-600">Step into our fully equipped studio and immerse yourself in a world of clay and creativity. With top-of-the-line pottery wheels, kilns, tools, and materials at your disposal, you'll have everything you need to bring your pottery visions to life. Our studio provides a safe and inspiring environment where you can explore, experiment, and express yourself freely.

</p>
			</div>
		</div>




		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src= {banner3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">Inspiration, Community, and Fun</h3>
				<p className="my-6 dark:text-gray-600">Beyond just learning pottery techniques, our workshops foster a sense of camaraderie and community among participants. Connect with fellow pottery enthusiasts, share ideas, and inspire each other as you embark on your artistic journey together. Whether you're looking to learn a new skill, unwind after a long day, or simply indulge your creative spirit, our workshops promise an enjoyable and fulfilling experience for all.</p>
			</div>
		</div>
	</div>
</section>

</Fade>

<div className=" flex items-center justify-around">

<div className="flex flex-col p-8 space-y-7 justify-around mt-24 mb-16">
                <div className="flex items-center">
                    <FiMapPin className=" w-14 h-14  p-2" />
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p>Mirpur New Bazar Road, Block-c,Dhaka-1210</p>
                    </div>
                </div>
                <div className="flex items-center">
                    < CiPhone className=" w-14 h-14  p-2" />
                    <div>
                        <h3 className="font-semibold">Contact Us</h3>
                        <p>(732) 803-01 03,(880)172380129</p>
                    </div>
                </div>
                <div className="flex items-center">
                    < MdOutlineEmail className=" w-14 h-14  p-2" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p>terracottastudio@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* form */}

            <section className="p-6 ">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-100">
		<h2 className="w-full text-3xl font-bold leading-tight">Send your message here</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-200 " fdprocessedid="ugxc1" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-200 " fdprocessedid="a4hoc" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-200"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring-amber-200 focus:ring-opacity-50 bg-amber-600 focus:ring-amber-200  text-white" fdprocessedid="h4o6aq">Send</button>
		</div>
	</form>
</section>
</div>





        </div>
    );
};

export default About;