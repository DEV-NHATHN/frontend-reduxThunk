import { useState } from "react";
import { useSelector } from "react-redux";

import EditPage from "./components/Edit/EditPage.jsx";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';
import Post from "./components/Post/Post.jsx";
import PostList from "./components/Post/PostList.jsx";

function App() {
   const [showEdit, setShowEdit] = useState(false)
   const [showOpenPost, setShowOpenPost] = useState(false)

   const loading = useSelector(state => state.user.loading)
   const error = useSelector(state => state.user.error)

   return (
      <div className="App">
         <Header
            showEdit={showEdit}
            setShowEdit={setShowEdit}
         />
         {showEdit && <EditPage setShowEdit={setShowEdit} />}
         {loading && <p className="loading">Loading...</p>}
         {!showEdit && error && (
            <p className="error">Error...</p>
         )}
         {!showEdit && <PostList />}
         {showOpenPost && <Post setShowOpenPost={setShowOpenPost} />}
         {!showEdit && <Footer
            showOpenPost={showOpenPost}
            setShowOpenPost={setShowOpenPost}
         />}
      </div>
   );
}

export default App;
