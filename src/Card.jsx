//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({ name, email, phone }) => {
  return (
<div className="card">
      <h2 className="card-title">¡Gracias por ingresar tus datos!</h2>
      <p className="card-text">Aquí están los detalles:</p>
      <ul className="card-list">
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Nombre:</strong> {name}</li>
        <li><strong>Teléfono:</strong> {phone}</li>
      </ul>
      <p className="card-text">Pronto estaremos en contacto</p>
    </div>
  );
};

export default Card;