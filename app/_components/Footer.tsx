import React from "react";

function Footer() {
  return (
    <div className="bg-black px-3 py-5">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <div className="rounded-3xl bg-white p-2 border border-gray-600">
          <h1 className="text-black text-sm font-mono">Ehtisham</h1>
        </div>
        <p className="text-white">
          Made with <span className="bg-white p-1 rounded-full"> 🖤</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
