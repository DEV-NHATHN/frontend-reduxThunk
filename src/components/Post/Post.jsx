import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/postSlice.js";
import Input from "../InputField/Input.jsx";
import { getPhotos } from '../../redux/gallerySlice.js'
import '../Post/post.css'

const postTags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

const Post = ({ setShowOpenPost }) => {
   // Var Def
   const [title, setTitle] = useState("Add title...")
   const [desc, setDesc] = useState("Add desc...")
   const [selectedTag, setSelectedTag] = useState(0)
   const [selectedImage, setSelectedImage] = useState(0)

   const photos = useSelector(state => state.gallery.photos)
   const dispatch = useDispatch()

   // Logic
   const handlePost = () => {
      const newPost = {
         title,
         description: desc,
         tag: selectedTag,
         image: selectedImage
      }
      console.log(newPost)
      dispatch(createPost(newPost))
      setShowOpenPost(false)
   }

   // Hooks
   useEffect(() => {
      dispatch(getPhotos())
   }, [dispatch])

   return (
      <section className="makepost-container">
         <div className="makepost-navigation">
            <p className="makepost-save"
               onClick={handlePost}
            >Post</p>
         </div>
         <Input
            data={title}
            inputType="textarea"
            setData={setTitle}
            label="Title"
            className="makepost-title"
         />
         <Input
            data={desc}
            inputType="textarea"
            setData={setDesc}
            label="Descriptions"
            className="makepost-desc"
         />

         <label>Tags</label>
         <div className="makepost-tags">
            {postTags.map((tag, idx) => {
               return (
                  <button
                     key={idx}
                     className={`makepost-tags-${tag} ${selectedTag === idx ? 'makepost-tags--selected' : ''}`}
                     onClick={() => setSelectedTag(idx)}
                  >
                     {tag}
                  </button>)
            })}
         </div>
         <label style={{ margin: "14px 0px" }}>Photo Gallery</label>
         <div style={{ overflowY: "scroll", height: "56vh" }}>
            {photos.map((photo, photoIdx) => {
               return (
                  <div key={photoIdx}
                     style={{ width: "100%", display: "inline-block", padding: "8px", textAlign: "center" }}
                     onClick={() => setSelectedImage(photoIdx)}
                  >
                     <img className={`makepost-image ${photoIdx === selectedImage ? 'makepost-image--selected' : ''}`}
                        src={photo.download_url}
                        alt={photo.author}
                     />
                  </div>
               )
            })}
         </div>

      </section>
   );
}

export default Post;