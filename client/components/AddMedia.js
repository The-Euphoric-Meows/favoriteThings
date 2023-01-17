import React, { useState } from "react";
import { addShow } from "../service/showService";

function AddMedia () {
  const [formData, setFormData] = useState({
    title:'',
    genre: '',
    toWatch: false
  })

  function updateForm(e){
    setFormData({...formData, [e.target.name]: e.target.value})

    if (e.target.id === 'wishlist'){
      setFormData({...formData, [e.target.name]: true})
    }
    if (e.target.id === 'watchlist'){
      setFormData({...formData, [e.target.name]: false})
    }
  }

  function onSubmit(e){
    e.preventDefault()
    addShow(formData)
  }

  return (
    <>
     <form action='' method='POST'>
      <h3>Add your stuffs now below</h3>
      <div>
        <label htmlFor='title' >Title</label>
        <input type='text' name='title' onChange={updateForm} value={formData.title}></input>
      </div>
      <div>
        <label htmlFor='genre' >Genre</label>
        <input type='text' name='genre' onChange={updateForm} value={formData.genre}></input>
      </div>
      <div>
        <label htmlFor='wishlist' >Add to wishlist</label>
        <input type='radio' id='wishlist' name='toWatch' onChange={updateForm} ></input>

        <label htmlFor='watchlist' >Add to watchlist</label>
        <input type='radio' id='watchlist' name='toWatch' onChange={updateForm} ></input>
      </div>
      <div>
        <input type="submit" onClick={onSubmit} value='Add'/>
      </div>
     
    </form>

    </>
  )
}

export default AddMedia;