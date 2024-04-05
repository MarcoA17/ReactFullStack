import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [nombre, setNombre] = useState('Sin captura de nombre');
  const [edad, setEdad] = useState(0);
  const [saludo, setSaludo] = useState('Sin confirmacion de registro');

  function evntNombre(e) {
    setNombre(e.target.value);
  }

  function evntEdad(e) {
    setEdad(e.target.value);
  }

  const saludar = () => {
    console.log("Registro al taller de Java Full stack Developer");
    console.log("Nombr: " + nombre);
    console.log("Edad: " + edad);

    axios.get('http://localhost:8080/hello/'+nombre+'/'+edad)
    .then(resultado =>{
      console.log(resultado.data);
      setSaludo(resultado.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="App">

      <h1>Hellow Horld - Java Full Stack Developer - React y Spring Booot 3</h1>
      <br />
      Ingresa tu nombre: <input name='nombre' type='text' value={nombre} onChange={evntNombre} />
      <br />
      Ingresa tu edad: <input name='edad' type='text' value={edad} onChange={evntEdad} />
      <br />
      <button onClick={saludar}>Registrarme al taller de Java Full Stack Developer</button>
      <br />
      <strong>{saludo}</strong>


    </div>
  );
}

export default App;
