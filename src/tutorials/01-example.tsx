import { useEffect, useState } from "react"


const Example = () => {
 const [value,newValue]=useState(0);
 // const [value2,newValue2]=useState(0);
  useEffect(()=>{
console.log('here');

 },[value])
 // const Handle=()=>{
  // newValue(value+1)
 //  setTimeout(() => {
   // it will not work   newValue(value+1)
 //   newValue((current)=>{
 //    const newState=current+1;
 //    return newState;
 //   })
 //  }, 2000);
  // newValue((current)=>{
  //  const newState=current+1;
  //  return newState;
  // })
 // }
  return (
   <>
    <div>
      <h4 style={{ textAlign: "center" , margin:'1rem' ,fontFamily:'sans-serif'}}>This is a counter:{value}</h4>
      <div className="btns" style={{width:'100px',textAlign:'center'}} onClick={()=>{newValue(value+1)}}>click</div>
    </div>
    </>
  )
}

export default Example
 