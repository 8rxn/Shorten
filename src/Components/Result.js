import React, { useState } from "react";

function Result(props) {
  const [output, setOutput] = useState("");

  const requestShort = async (inputvalue) => {
    const controller = new AbortController();
const signal = controller.signal;

    let headersList = {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "1664850bc8msh09875e1fb1c0b40p1e8d90jsn78b5edd175ce",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    };

    let bodyContent = `url=${inputvalue.url.url}`;
    console.log('before request');
    let response = await fetch(
      "https://url-shortener-service.p.rapidapi.com/shorten",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      },{signal}
      );
      
      let data = await response.json();
      setOutput(data.result_url)
      controller.abort();
      return(null);
  };

  const sent= props.data.url?requestShort(props.data):'';
  const copyToClipboard=()=>{navigator.clipboard.writeText( output )
  }
  return (
    <div className="result-box my-5">
      <div className="input-group">
        
        <div className="shortlinkbox mx-2 my-5 p-2 text-center">{`${output?output:'Waiting For Your link'}`}</div>
          {" "}
          <span className="input-group-text" id="CopyButton">
          <button className='btn btn-outline copy-button' onClick={copyToClipboard}>
          <h4 id="CopyButtonText">Copy ⌨</h4>
        </button>
        </span>
      </div>
    </div>
  );
}

export default Result;
