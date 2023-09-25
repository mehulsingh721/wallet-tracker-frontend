import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { ContractABI, ContractAddress } from "./../config";
const Register = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: ContractAddress,
    abi: ContractABI,
    functionName: "Join",

        onError(error) {
          console.log(error,"erroe++")
          if (error.toString().includes("Not a valid Sponsor")) {
            alert("Not a valid Sponsor");
          } else if (error.toString().includes("Invalid Referal")) {
            alert("Invalid Referal");
          } else if (error.toString().includes("Already Joined")) {
            alert("Already Joined");
          } else if (error.toString().includes("Left position not available")) {
            alert("Left position not available");
          } else if (error.toString().includes("Right position not available")) {
            alert("Right position not available");
          }
          else if (error.toString().includes("Already Filled")) {
            alert("Already Filled");
          } else {
            console.log(error);
            alert(error);
          }
      }
    // onError(error) {
    //   console.log("Error", error);
    // },
//     onSettled(data, error) {
//       console.log('Settled', { data, error })
//     },
  });
  const [sponserId, setSponserId] = useState("");
  const [parentId, setParentId] = useState("");
  const [username, setUserName] = useState("");
  // const[sponserId,setSponserId]=useState('')

  console.log(sponserId, parentId, username);
  return (
    <>
      <div className="max-w-[500px] w-full mx-auto register ">
        <div className="bg-gradient-to-r from-[#04021F] to-[#280941] text-white min-h-screen ">
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/left.png"}
              className="px-5 pt-4"
            />
          </NavLink>

          <h2 className="text-white text-center font-bold ">Register</h2>
          <form className=" mx-auto max-w-[400px] py-5 px-3">
            <div className="my-4">
              <label className="pb-3">Sponser ID</label>
              <br />
              <input
                type="text"
                placeholder="Sponser ID"
                className="rounded-lg px-5 py-3 w-full my-4"
                onChange={(e) => setSponserId(e.target.value)}
              ></input>
            </div>

            <div className="my-4">
              <label className="pb-3">Username</label>
              <br />
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg px-5 py-3 w-full my-4"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>

            <div className="my-4">
              <label className="pb-3">Parent ID</label>
              <br />
              <input
                type="text"
                placeholder="Parent ID"
                className="rounded-lg px-5 py-3 w-full my-4"
                onChange={(e) => setParentId(e.target.value)}
              ></input>
              <p className="mt-1">Pay 50.00 USDT For Registration</p>
            </div>
            <div className="my-4">
              <label className="pb-3">Is Left Side</label>
              <br />
              <select className="w-full text-black border-0">
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
              <p className="mt-1">Pay 50.00 USDT For Registration</p>
            </div>
          </form>
          <div className="text-center py-5">
            {/* <NavLink to="/main"> */}
            <button
              onClick={() =>
                write({
                  args: [sponserId, parentId, true, username],
                  from: address,
                  // value: parseEther("0.01"),
                })
              }
              className="text-white  px-3 max-w-[300px] w-full mx-auto py-3 rounded-full  bg-gradient-to-r from-[#157AC8] to-[#BC28D3] font-bold"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
