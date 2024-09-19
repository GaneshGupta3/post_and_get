import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/post_list_store";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        {/*if the home is clicked then home = true and when createPost is clicked then it is false*/}
        <div className="content">
          <Navbar> </Navbar>
          {selectedTab === "createPost" && <CreatePost></CreatePost>}
          {selectedTab === "home" && <Postlist></Postlist>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;