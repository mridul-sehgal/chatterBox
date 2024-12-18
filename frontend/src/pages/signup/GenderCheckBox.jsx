

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex" >

        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox checkbox-secondary border-slate-300"
                checked={selectedGender==="male"} 
                onChange={()=>onCheckboxChange("male")}
                />
            </label>
        </div>

        <div className="form-control">
        <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox checkbox-secondary border-slate-300"
                checked={selectedGender==="female"} 
                onChange={()=>onCheckboxChange("female")} />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckBox


// STARTE CODE FOR THIS COMPONENT

// const GenderCheckBox = () => {
//     return (
//       <div className="flex" >
  
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//                   <span className="label-text">Male</span>
//                   <input type="checkbox" className="checkbox checkbox-secondary border-slate-300" />
//               </label>
//           </div>
  
//           <div className="form-control">
//           <label className="label gap-2 cursor-pointer">
//                   <span className="label-text">Female</span>
//                   <input type="checkbox" className="checkbox checkbox-secondary border-slate-300" />
//               </label>
//           </div>
  
//       </div>
//     )
//   }
  
//   export default GenderCheckBox