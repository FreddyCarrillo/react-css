import { format } from 'date-fns';
import './App.css';
import logo from './assets/img/logo.png';

const App = () => {

  let action1 = 'Login';
  let action2 = 'Sign Up';
  let usuariosActivos = 23;
  let tagActiveLogin = true;
  let currentDate = new Date();

  let dataUser = {
    nombre: 'Freddy',
    edad: 26
  };

  let users = [
    {
      nombre: 'Freddy',
      edad: 26
    },
    {
      nombre: 'Daniel',
      edad: 27
    },
    {
      nombre: 'Joaquín',
      edad: 28
    }
  ];

  const {
    edad
  } = dataUser;

  const [ usuarioFreddy, usuarioDaniel ] = users; 

  console.log(currentDate);
  console.log('edad',edad);
  console.log('usuarioFreddy',usuarioFreddy);

  return (
    <div className="ctnGeneral">
      <div className="ctnAuth">
        
        <div className="ctnLogo">
          <img 
            src={logo}
            width="150"
          />
        </div>

        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          {
            format(currentDate, "dd-MM-yyyy")
          }
        </div>

        <div className="ctnActions">
          <div className="btnActive">
            {action1}
          </div>
          <div className="btnActive">
            {action2}
          </div>
        </div>

        <div>
          {
            users.map((user)=>(
              <div style={{display: 'flex', gap: '50px', padding: '20px'}}>
                <div>{ user.nombre }</div>
                <div>{ user.edad }</div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
    

}

export default App;