import React, { useCallback, useRef, useState } from 'react'

const Image = React.memo(({ item, setProfileInfo, profileInfo }) => {
   const [isSelected, setSelected] = useState(false)

   const imageRef = useRef(null)

   const handleSelected = useCallback((e) => {
      if (!isSelected) {

         setProfileInfo(prev => ({
            ...prev,
            url: imageRef.current.src
         }))
      }
      else {
         setProfileInfo(prev => ({
            ...prev,
            url: "https://www.seanmerricks.com/static/images/artwork/full_size/deadpool_avatar.png"
         }))
      }
      setSelected(!isSelected)
   }, [isSelected, setProfileInfo])

   return (
      <div className="input-image-item">
         <img src={item} alt="" className="input-image"
            ref={imageRef}

         />
         <div
            onClick={handleSelected} className={`input-image-overlay ${isSelected ? "image-selected" : ""}`}>
            <i className="fa-solid fa-circle-check"></i>
         </div>
      </div>
   )
})

export default Image