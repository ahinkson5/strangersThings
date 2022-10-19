import "./App.css";
import { useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import AllPosts from "./components/AllPosts";
import PostById from "./components/PostById";
import NewPostForm from "./components/NewPostForm";
import EditForm from "./components/EditForm";

function App() {
  const { setToken, user } = useAuth();

  return (
    <div className="App">
      <h4>{user?.username}</h4>
      <NavBar setToken={setToken} user={user} />
      <Routes>
        <Route path="/auth/:method" element={<Auth setToken={setToken} />} />
        <Route path="/user/me" element={"Profile"} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:id" element={<PostById />} />
        <Route path="/posts/create_new_post" element={<NewPostForm />} />
        <Route path="/posts/edit/:id" element={<EditForm />} />
        <Route path="/posts/post_id/messages" element={"messages"} />
      </Routes>
    </div>
  );
}

export default App;
