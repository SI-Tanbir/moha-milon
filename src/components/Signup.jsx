import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Signup = () => {


  const {createUser}=useContext(AuthContext);

  console.log(createUser);
  
  const handleSignup=(e)=>{

    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;

    createUser(email,password)
    .then( result => {
      console.log(result.user)
    }

    )
    .catch(
      error =>{
        console.error(error)
      }
    )


    


    
  }

  
  return (
    <div>
        
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          
            <form onSubmit={handleSignup} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input

                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="bg-pink-500 rounded-md p-2" type="submit" value="submit" />
              </div>
            </form> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
