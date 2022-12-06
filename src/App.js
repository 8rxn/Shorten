
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Result from './Components/Result';
import TextAnim from './Components/TextAnim';
import Footer from './Components/Footer';

function App() {

  const [data, setData] = useState({url:'',short:''});

  return (
    <>
    <div className="sticky-top mynavbar"><Navbar/></div>
    <div className='container my-5 '>
      <div className="row pview">
        <div className="col d-flex justify-content-center align-items-center p-2" id='text-anim'>
          <TextAnim/>
        </div>
        <div className="col">
          <div className="row">
            <Form setData={setData}/>
            </div>
          <div className="row">
          <Result data={data}/>
            </div>

        </div>
      </div>
    </div>
    <div className="position-absolute bottom-0 start-50 my-5"><Footer/></div>
    </>
  );
}

export default App;
