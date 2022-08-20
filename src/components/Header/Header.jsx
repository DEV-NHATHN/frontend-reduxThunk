import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/apiReq.js";
import "./header.css";
const Header = (props) => {
   const { setShowEdit, showEdit } = props;
   const dispatch = useDispatch()

   const user = useSelector(state => state.user)

   const handleShowEdit = () => {
      setShowEdit(!showEdit);
   }

   useEffect(() => {
      console.log('effect run');
      getUser(dispatch)
   }, [dispatch])

   return (
      <>
         <header style={{ backgroundColor: "#ff9051", backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme}, 65%, #181818 100%)` }}>
            <div className="info-container">
               <div className="info-edit"
                  onClick={handleShowEdit}
               >Edit</div>
               <img className="info-ava" src={user.url} alt="" />
               <div className="info-username">{user.name}</div>
               <div className="info-age">{user.age}</div>
               <div className="info-about">{user.about}</div>
            </div>
         </header>

      </>
   );
}

export default Header;