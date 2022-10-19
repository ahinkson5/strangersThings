import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/post";

export default function NewPost() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(
            token,
            title,
            description,
            price,
            location,
            willDeliver
          );
          navigate("/posts");
          console.log(result);
        }}
      >
        <h3>Create a New Post</h3>
        <label>Title:</label>
        <input
          value={title}
          type="text"
          placeholder="Enter a name for your post."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>Description:</label>
        <input
          value={description}
          type="text"
          placeholder="Enter a description for your post."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <label>Price:</label>
        <input
          value={price}
          type="text"
          placeholder="How much is the item?"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Location:</label>
        <input
          value={location}
          type="text"
          placeholder="The location of the post.(Optional)"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <label>Willing to Deliver:</label>
        <input
          value={willDeliver}
          type="checkbox"
          onChange={() => {
            setWillDeliver(!willDeliver);
          }}
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
