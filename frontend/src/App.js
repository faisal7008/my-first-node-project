import './App.css';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = "http://localhost:9000/student"

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [college, setCollege] = useState("")
  
  const submitForm = () => {
    axios.post(baseUrl, {
      Name: name,
      Email: email,
      College: college 
    }).then(() => {
      alert("form submitted successfully..")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <section className="container">
        <div className="box">
          <form>
            <h1>Student Form</h1>
            <input className="form-item" type="text" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required/>
            <input className="form-item" type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required/>
            <input className="form-item" type="college" name="college" placeholder="Enter your college name" onChange={(e) => setCollege(e.target.value)} required/>
            <button className="btn" type="submit" onClick={submitForm}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
