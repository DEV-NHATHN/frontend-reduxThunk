import '../Edit/edit.css'
import '../Post/post.css'
const Input = (props) => {
   const { inputType, className, data, setData, label } = props

   return (
      <>
         <label htmlFor="">{label}</label>
         {inputType === 'textarea' ? (
            <textarea className={className}
               type="text" placeholder={data}
               onChange={(e) => setData(e.target.value)}
            />
         ) : (
            <input className={className}
               type="text" placeholder={data}
               onChange={(e) => setData(e.target.value)}
            />
         )}
      </>
   );
}

export default Input;