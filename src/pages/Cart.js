import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className=" w-[900px] mx-auto mt-10">
      {cart.length > 0 ? (
        <div className=" flex space-x-24">
          <div className=" flex-grow">
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between max-h-[24rem] fixed right-48">
            <div className="">
              <div className=" text-lg font-semibold text-green-700">Your Cart</div>
              <div className=" text-3xl font-bold capitalize text-green-700 -mt-2">SUMMARY</div>
              <p className="mt-2 font-semibold">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className=" mt-72">
              <p className=" font-semibold">Total Amount: <span className="font-bold">${totalAmount}</span></p>
              <NavLink to={"/checkout"}>
                <button className=" px-20 py-2 rounded-2xl bg-green-600  text-white font-semibold mt-1 hover:bg-green-700 transition duration-150 ease-in">Checkout Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mt-52">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-xl opacity-80 font-bold text-slate-800">Cart Empty!</h1>
              <Link to={"/"}>
                <button className=" mt-6 px-4 py-1 text-lg font-semibold text-white rounded-xl bg-green-600 hover:bg-green-700 transition duration-150 ease-in ">Shop Now</button>
              </Link>
          </div>  
        </div>
      )}
    </div>
  );
};

export default Cart;
