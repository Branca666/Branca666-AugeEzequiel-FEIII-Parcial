import { useState } from 'react'
import Card from './components/Card';
import Form from './components/form';

function App() {

  const [informacion, setInformacion] = useState({}); {}
  const [isMensajeError, setMensajeError] = useState(); {}
  

  const onSubmit = (data) => {
    if (data.nombre.length >= 3
      && data.animal.length >= 6){

        console.log("data si: ", data);
        setInformacion(data);
        setMensajeError("false")
      }else{
        setMensajeError("true")
        console.log("data no: ", data);

    }
  }
  
  return (
    <div className="App">
      <Form 
        onSubmit={onSubmit} 
        titulo="Formulario"
        isMensajeError={isMensajeError}
        informacion={informacion}
      />
      <br />
      <Card
        isMensajeError={isMensajeError}
        informacion={informacion}
        />
      <br />
    </div>
  );
}

export default App;
