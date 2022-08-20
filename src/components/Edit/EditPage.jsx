import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/apiReq.js';
import './edit.css';
import Image from './Image.jsx';

const imageUrl = [
   'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',

   'https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d',

   'https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c',

   'https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38',

   'https://i.redd.it/7ipyf6pvqac61.png',

   'https://i.redd.it/ksmb0m02ppy51.png',

   'https://i.redd.it/mozfkrjpoa261.png',

   'https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7',

   'https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990',
]

const EditPage = (props) => {

   const dispatch = useDispatch()

   const [profileInfo, setProfileInfo] = useState({
      name: '',
      age: '',
      about: '',
      theme: '#ff9051',
      url: ''
   })

   const { setShowEdit } = props;
   const handleSubmit = (e) => {
      e.preventDefault();
      setShowEdit(false);
      updateUser(profileInfo, dispatch)
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <section className="edit-container">
               <button className="close"
               >SAVE</button>
               <div className="edit-profile">Edit Profile</div>
               <div className="input-container">
                  <label htmlFor="name">Display Name</label>
                  <input type="text" placeholder="... Name" id="name"
                     value={profileInfo.name}
                     onChange={e => setProfileInfo(prev => ({
                        ...prev,
                        name: e.target.value
                     }))}
                  />
                  <label htmlFor="age">Age</label>
                  <input type="text" placeholder="...Age" id="age"
                     value={profileInfo.age}
                     onChange={e => setProfileInfo(prev => ({
                        ...prev,
                        age: e.target.value
                     }))}
                  />
                  <label htmlFor="about">About</label>
                  <textarea className="input-about" placeholder="Write something about yourself..." id="about"
                     value={profileInfo.about}
                     onChange={e => setProfileInfo(prev => ({
                        ...prev,
                        about: e.target.value
                     }))}
                  />
                  <label htmlFor="">Profile Picture</label>
                  <div className="input-image-container">
                     {imageUrl.map((item, idx) => (
                        <Image item={item} key={idx}
                           setProfileInfo={setProfileInfo}
                           profileInfo={profileInfo}
                        />
                     ))}
                  </div>
                  <div className="theme-container">
                     <label htmlFor="theme-color">Theme</label>
                     <input type="color" className="theme-color" id="theme-color"
                        value={profileInfo.theme}
                        onChange={e => setProfileInfo(prev => ({
                           ...prev,
                           theme: e.target.value
                        }))}
                     />
                  </div>
               </div>
            </section>
         </form>
      </>
   );
}

export default EditPage;