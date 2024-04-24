import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex flex-row justify-around gap-6 py-5 mt-10 px-8 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]">
      <div className="py-4">
        <h1 className="text-2xl py-4">About</h1>
        <p>
          Your ultimate companion in managing your financial journey. Whether
          you're tracking expenses, setting budgets, or planning for the future,
          our intuitive platform provides you with the tools you need to take
          control of your finances effortlessly. With real-time updates,
          customizable categories, and insightful reports, staying on top of
          your financial goals has never been easier. Join our community today
          and embark on a journey towards financial empowerment and peace of
          mind.
        </p>
      </div>
      <div className="mx-20 py-4">
        <h1 className="text-2xl py-4">Categories</h1>
        <ul className="flex flex-col">
          <Link to={"/"}>Dashboard</Link>
          <Link to={"/total-expense"}>Total Expense</Link>
          <Link to={"/about-us"}>About Us</Link>
          <Link to={"/settings"}>Settings</Link>
        </ul>
      </div>
      <div className="mx-20 py-4 ">
        <h1 className="text-2xl py-4 w-[500px]">Quick Links</h1>
        <ul className="flex flex-col">
          <Link to={"/"}>Instagram</Link>
          <Link to={"/"}>Facebook</Link>
          <Link to={"/"}>Twitter</Link>
          <Link to={"/"}>Email</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
