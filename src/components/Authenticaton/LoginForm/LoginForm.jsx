import { FcGoogle } from "react-icons/fc";
import AuthJS from "../AuthJS/AuthJS";
import "../AuthStyles/AuthStyles.css";
import { Helmet } from "react-helmet";
import {
  FaGithub,
  FaFacebook,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
      <Helmet>
        <title>NextGen Gadgets || Login/SignUp</title>
      </Helmet>
      <div className="hero w-[1300px] bg-purple-500 mt-12 mb-24 rounded-xl h-[200px] ">
        <div>
          <div>
            <h1 className="text-3xl text-white font-bold text-center ">
              Please Login
            </h1>
            <p className="py-6 text-center text-white font-semibold">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="container" id="main">
          <div className="sign-up">
            <form action="#">
              <h1 className="font-extrabold text-3xl ">Create Account</h1>
              <div className="flex items-center gap-6 mt-4 mb-4">
                <button className="text-3xl">
                  <FcGoogle></FcGoogle>
                </button>
                <button className="text-3xl">
                  <FaGithub></FaGithub>
                </button>
                <button className="text-3xl text-blue-600">
                  <FaFacebook></FaFacebook>
                </button>
              </div>
              <p className="font-bold text-xl ">
                Or Use Your Email For Registration
              </p>
              <div className="mt-8 ">
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </div>
              <button className="mt-2 w-24 h-12 p-2 rounded-xl bg-[#ff4b2b] text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Sign Up
              </button>
            </form>
          </div>
          <div className="sign-in">
            <form action="#">
              <h1 className="font-extrabold text-3xl ">Please Sign In</h1>
              <div className="flex items-center gap-6 mt-4 mb-4">
                <button className="text-3xl">
                  <FcGoogle></FcGoogle>
                </button>
                <button className="text-3xl">
                  <FaGithub></FaGithub>
                </button>
                <button className="text-3xl text-blue-600">
                  <FaFacebook></FaFacebook>
                </button>
              </div>
              <p className="font-bold text-xl mt-4 ">
                Or Use Your Existing Account
              </p>
              <div className="mt-8 ">
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </div>
              <a
                className="-ml-60 text-sm text-red-600 font-bold mb-4 underline"
                href="#"
              >
                Forget Your Password?
              </a>
              <button className="mt-2 w-24 h-12 p-2 rounded-xl bg-[#ff4b2b] text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1 className="font-extrabold text-3xl mb-10">Welcome Back!</h1>
                <p className="font-bold text-xl ">
                  To Keep Connected With US Please Login With Your Personal Info
                </p>
                <button
                  className="mt-8 w-32 h-12 p-2 rounded-xl bg-transparent text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer border-2 border-white flex items-center justify-center gap-2"
                  id="signIn"
                  onClick={AuthJS}
                >
                  <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1 className="font-extrabold text-3xl mb-10">
                  Hello, Friend!
                </h1>
                <p className="font-bold text-xl ">
                  Enter Your Personal Details and Start Your Journey With US!
                </p>
                <button
                  className="mt-8 w-32 h-12 p-2 rounded-xl bg-transparent text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer border-2 border-white flex items-center justify-center gap-2"
                  id="signUp"
                  onClick={AuthJS}
                >
                  Sign Up <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
