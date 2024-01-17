import React from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlices";

const CartItems = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };
  return (
    <div className="mb-9 ">
      <div className="flex space-between space-x-4 ">
        <div className="h-[120px] w-[150px]">
          <img src={item.image} className="w-fit h-fit"/>
        </div>
        <div className="flex flex-col gap-y-7 w-80">
          <h1 className=" font-semibold">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 14).join(" ") + "..."}</h1>
          <div className="flex justify-between w-[300px] ">
            <p>{item.price}</p>
            <div onClick={removeFromCart} className="p-2 bg-red-200 rounded-full -mt-1 hover:cursor-pointer hover:bg-red-300 transition duration-100 ease-in">
            <MdDelete />
            </div>
          </div>
        </div>
      </div>
      {
        
        itemIndex !== cart.length - 1 && 
        (<div className="h-[1.05px] bg-gray-800 max-w-[450px] mt-5"></div>)
      }
      
    </div>
  );
};

export default CartItems;
