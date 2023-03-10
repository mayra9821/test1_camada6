import React, {useState} from "react";
import Card from "./Card.jsx"
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [formError, setFormError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormSubmitted(false)
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFormSubmitted(false)
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setFormSubmitted(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( 
      email.trim().length < 3 ||
      email.includes(" ") ||
      name.trim().length < 6
     ) {
      setFormError(true);
    } else {
      setFormError(false);
      setFormSubmitted(true)
    }
  };


  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit} className="form-container" > 
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            className="form-input"
            minLength="3"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            className="form-input"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
      {formError ? <h2 className="error">Por favor chequea que la información sea correcta</h2>: 
      formSubmitted  &&
        <Card name={name} email={email} phone={phone}></Card>
      }
    </div>
  );
}

export default App;
