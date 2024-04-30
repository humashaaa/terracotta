import img from '../assets/oshin-khandelwal-EQpXnijYejQ-unsplash (1).jpg'
const NewsLetter = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:p-7 p-2 mt-20 bg-amber-50 md:m-20 m-2'>
        <div>
        <img className='h-[29rem] md:w-[30rem] w-[25rem]' src= {img} alt="" />

        </div>
        <div className='space-x-5'>
            <h1 className='font-bold text-2xl mb-4 ml-4'>Subscribe to Our Newsletter</h1>
            <p className='md:w-[35rem] w-80 mb-5'>Welcome to our pottery newsletter, where craftsmanship meets creativity! Dive into the world of artisanal wonders with our handcrafted pottery collection. From intricately designed clay pots to elegantly crafted ceramic bowls, each piece tells a story of passion and tradition. Stay updated on our latest creations, exclusive offers, and upcoming events. Join our community of pottery enthusiasts and embark on a journey of beauty and functionality. Subscribe now to explore the artistry of pottery with us!</p>
            
<div className="flex gap-2 shrink">
              <input 
                placeholder="Enter email"
                type="text"
                className="px-2 py-1 border rounded focus:outline-amber-200"
              />
              <button className="px-3 py-2 bg-amber-500 hover:bg-amber-800 text-sm text-white font-semibold rounded">
                Subscribe
              </button>
            </div>
        </div>
        </div>
    );
};

export default NewsLetter;
