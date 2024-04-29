import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseHooks from "../Hooks/UseHooks";
// import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FiEye } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const {createUser, updateUserProfile} = UseHooks()
    console.log(createUser);
    const [showPass, setShowPass] = useState(false)


    const location = useLocation()
    const navigate= useNavigate()
    const form = location?.state || '/'

    const {register, handleSubmit, formState: { errors }} = useForm();


    
      const onSubmit = data => {
        const {email, password, image, fullName} = data;        
        createUser(email, password)
          .then(() => {
            // setSuccess('created user successfully')
            updateUserProfile(image, fullName)
            .then(()=>{
              navigate(form)
                })})      };

      const validation = (value) => {
        if (!value) return "this field is required";
        if (value.length < 6) return "Password must be at least 6 characters long";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
        return true;
      };

     const handleSuccess = ()=>{
      toast('user created successfully')     }





      return (


        <div className="hero min-h-screen bg-base-200">
          {/* <Helmet>
                <title>AzureHorizon | Register</title>
            </Helmet> */}
<div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Welcome to Terracotta, where creativity finds its home! Register with us to unlock a world of artisanal wonders and craftsmanship. Join our community of artisans, creators, and enthusiasts passionate about the art of handmade goods. Whether you're a seasoned craftsman or just embarking on your creative journey, Terracotta provides a platform to showcase your talents and connect with like-minded individuals. Sign up today to delve into a realm where imagination knows no bounds, and where every creation tells a story. Join us in celebrating the beauty of craftsmanship, one creation at a time.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("fullName", { required: true })} type="text" placeholder="your name" className="input input-bordered"  />
          {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input {...register("photo", { required: true })} type="photo" placeholder="photo url" className="input input-bordered"  />
          {errors.photo && <span className="text-sm text-red-500">This field is required</span>}
                </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>           
          </label>
         <div className="relative">
         <input {...register("password", { validate: validation})}
           type={ showPass ? "text" : "password"}
           placeholder="password" className="input input-bordered w-full"  />
          <span onClick={()=> setShowPass(!showPass)} className="absolute top-4 right-3">
            {
              showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
         </div>
                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>
        
        <div className="form-control mt-6">
          <button type="submit" onClick={handleSuccess} className="btn btn-primary bg-amber-600 border-none text-white">Register</button>
          <ToastContainer />
        </div>
        <p>Already have an account? <Link className="text-blue-500 underline" to='/login'>Log in</Link></p>
      </form>
      </div>  
  </div>
</div>
    );
};

export default Register;