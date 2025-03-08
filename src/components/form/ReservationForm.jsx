"use client"

import { useState } from "react"

function ReservationForm() {
  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    phone:"",
    pickup:"",
    dropoff:"",
    dateTime:"",
    passengers: "1",
    vehicleType:"Sedan",
    specialRequests:"",
    paymentMethod: "Cash",
    agree:false,
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(name);
    
    setFormData((prevData)=> ({
      ...prevData,
      [name] : value,
    }))
  }
  console.log(formData)

  return (
    <div>
      <label htmlFor="fullName">FullName: </label>
      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}/>
    </div>
  )
}

export default ReservationForm