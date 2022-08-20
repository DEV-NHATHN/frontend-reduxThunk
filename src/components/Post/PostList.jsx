import { useSelector } from "react-redux";
import './post.css'

const postTags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

const PostList = () => {
   const postList = useSelector(state => state.post.posts)

   const photos = useSelector(state => state.gallery.photos)
   return (
      <section className="post-container">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/lH-yFJZF0ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         {postList.slice(1).map((post, postidx) => {
            return (
               <div className="posts" key={postidx}>
                  <p className="posts-title">{post.title}</p>
                  <p className={`posts-tags-${postTags[post.tag]} posts-tags`}>{postTags[post.tag]}</p>
                  <p className="posts-description">{post.description}</p>
                  <img
                     style={{ marginTop: 14, paddingRight: 14 }}
                     className="makepost-image"
                     src={photos[post.image].download_url} alt="" />
               </div>
            )
         })}
      </section>
   );
}

export default PostList;