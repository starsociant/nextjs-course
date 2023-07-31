"use client";
import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const api = fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        description,
        price,
      }),
    })
      .then((r) => {
        console.log({ data: r.body })
      })
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="block" htmlFor="name">
        Name
      </label>
      <input
        className="border border-sky-500"
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label className="block" htmlFor="image">
        Image
      </label>
      <input
        className="border border-sky-500"
        id="image"
        type="text"
        name="image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <label className="block" htmlFor="description">
        Description
      </label>
      <input
        className="border border-sky-500"
        id="description"
        type="text"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label className="block" htmlFor="price">
        Price
      </label>
      <input
        className="block border border-sky-500"
        id="price"
        type="number"
        name="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button className="mt-4 bg-sky-600 px-4 py-2">Send</button>
    </form>
  );
}
