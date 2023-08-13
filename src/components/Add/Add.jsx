"use client"
import { useState } from "react";



const Add = async({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);

  const [selectedShop, setSelectedShop] = useState(null);

    

  const apiEndpoints = {
    Pizzas: "pizzas",
    Sushi: "sushi",
    Wine: "wine",
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
    };


const handleCreate = async (e) => {
  e.preventDefault();

  if (!selectedShop) {
    alert("Please choose a shop before creating the product.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploads");

    console.log("File:", file);
    console.log("formData", formData); // Use formData, not data

    // Handle file upload to Cloudinary
    const uploadRes = await fetch(
      "https://api.cloudinary.com/v1_1/galyaaccount/image/upload",
      {
        method: "POST",
        body: formData, // Use formData, not data
      }
    );

    console.log("uploadRes", uploadRes);

    if (!uploadRes.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const uploadData = await uploadRes.json();
    const { url } = uploadData;

    const newProduct = {
      title,
      desc,
      prices,
      img: url,
      shop: selectedShop,
    };

    console.log("New Product:", newProduct);

    // Get the API endpoint based on the selected shop
    const apiEndpoint = apiEndpoints[selectedShop];

    const createProductRes = await fetch(
      `http://localhost:3000/api/${apiEndpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    );

    if (!createProductRes.ok) {
      throw new Error("Failed to create product");
    }

    setClose(true);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white relative rounded-2xl p-10 w-96 flex flex-col gap-5">
        <span
          onClick={() => setClose(true)}
          className="w-8 h-8 bg-black text-red rounded-full flex items-center justify-center cursor-pointer absolute top-5 right-5 -mt-2 -mr-2"
        >
          X
        </span>
        <h1 className="text-xl font-bold">Add a new Product</h1>
        <h2>Choose a shop</h2>
        <ul className="flex align-middle justify-around">
          <li>
            <button
              onClick={() => setSelectedShop("Pizzas")}
              className={`py-1 px-2 rounded ${
                selectedShop === "Pizzas" ? "bg-orange-500" : "bg-transparent"
              }`}
            >
              Pizzas
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedShop("Sushi")}
              className={`py-1 px-2 rounded ${
                selectedShop === "Sushi" ? "bg-orange-500" : "bg-transparent"
              }`}
            >
              Sushi
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedShop("Wine")}
              className={`py-1 px-2 rounded ${
                selectedShop === "Wine" ? "bg-orange-500" : "bg-transparent"
              }`}
            >
              Wine
            </button>
          </li>
        </ul>
<form onSubmit={handleCreate}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Title</label>
          <input
            className="border-b-2 border-gray-300 outline-none"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Desc</label>
          <textarea
            rows={4}
            className="border-b-2 border-gray-300 outline-none"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Prices</label>
          <div className="flex gap-2">
            <input
              className="border-b-2 border-gray-300 outline-none w-full"
              type="number"
              placeholder="change prices"
              onChange={(e) => changePrice(e, 0)}
            />
          </div>
        </div>
        <button
        type="submit"
          className="w-1/4 bg-green-500 text-white font-semibold py-2 rounded-md self-end" 
    //    onClick={handleCreate}
        >
          Create
              </button>
              {/* <ButtonSubmit value="upload to cloudenary"/> */}
        {/* <button
        className="w-1/4 bg-green-500 text-white font-semibold py-2 rounded-md self-end"
        onClick={handleCreate}
      >
        Create
      </button> */}
      </form>
          </div>
          
    </div>
  );
};
export default Add;
