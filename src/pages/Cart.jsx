import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="flex mx-auto flex-row justify-center max-w-6xl ">
          <div className="w-[60%]">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                  cartLength={cart.length}
                />
              );
            })}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-5">
            <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700">
                  Summary
                </div>
                <p className="text-xl">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">Total Amount : ${totalAmount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wide">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;