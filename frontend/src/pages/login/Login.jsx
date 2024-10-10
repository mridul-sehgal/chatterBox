const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-4xl font-semibold text-center bg-gradient-to-r from-pink-600 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text ml-2">
            ChatterBox
          </span>
        </h1>
        <form>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-pink-500 mt-2 mx-1 inline-block"
          >
            {" "}
            {" Don't "} have an account ?
          </a>

          <button className="btn btn-block btn-sm mt-2 h-12 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 text-white text-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;




/*
STARTED CODE FOR A LOGIN PAGE

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-4xl font-semibold text-center bg-gradient-to-r from-pink-600 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text ml-2">
            ChatterBox
          </span>
        </h1>
        <form>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-pink-500 mt-2 mx-1 inline-block"
          >
            {" "}
            {" Don't "} have an account ?
          </a>

          <button className="btn btn-block btn-sm mt-2 h-12 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 text-white text-lg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

*/