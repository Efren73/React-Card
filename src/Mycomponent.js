import React from 'react';
import './styles.css'

function Perfil ({insta}){
 
  return(
    <p>{`Instagram: ${insta}`}</p>
  );  
}

function Mycomponent ( {name: nombre, mail: correo}) {
  let user = {insta: 'efren_aldana'};
  return(
    <div className = "card">
      <h1>CARD</h1>
      <img id="yo" src="https://pbs.twimg.com/profile_images/1278682744139190273/oRcAsOSm.jpg" />
      <p>{`Nombre: ${nombre}`}</p>  {/*Este ejeemplo es con Destructuring*/}
      <p>{`Correo: ${correo}`}</p> 
      <>
        <Perfil {...user} /> {/*Este ejemplo es con Spread Operator */}
      </>
    </div>
  );
}

export default Mycomponent;
