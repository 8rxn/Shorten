import React from 'react';
import { useState } from 'react';

function Form(props){
  const [url, setUrl] = useState('')
  const [short, setShort] = useState('')

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.setData({'url':{url},'short':{short}});

  }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="longURL" className="form-label"> <h4>Enter Your Link to be shortened</h4> </label>
    <input type="text" autoComplete='off' className="form-control" id="longURL"  onChange={(e)=>setUrl(e.target.value)} placeholder='https://YourSite.com'/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
    <div className="container text-end py-3">
        <button className='btn btn-sm btn-outline-dark'type='button' data-bs-toggle="collapse" data-bs-target="#collapsed-option" aria-expanded="false" aria-controls='collapsed-option'>More</button>
    </div>

  <div className="mb-3 collapse" id="collapsed-option">
    <label htmlFor="shortURL" className="form-label"> <h4>Any custom short URL?  --Currently Unavailable--</h4></label>
    <div className="input-group">

    <span className="input-group-text" id="shortURL"> <h5>1pt.co/</h5> </span>
    <input type="text" disabled autoComplete='off' onChange={(e)=>setShort(e.target.value)} className="form-control" id="shortURL" placeholder='xkink'/>
    </div>
  </div> 

  <div className="container text-center"><button type="submit" target='_self' className="btn btn-dark">Submit</button></div>
</form>
    </div>
  )
}

export default Form
