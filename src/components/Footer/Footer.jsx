import './footer.css'

const Footer = (props) => {
   const { showOpenPost, setShowOpenPost } = props
   const handlePost = () => {
      setShowOpenPost(!showOpenPost)
   }
   return (
      <footer>
         <div className="footer-title"
            onClick={handlePost}
         >
            {showOpenPost ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-circle-plus"></i>}
         </div>
      </footer>
   );
}

export default Footer;