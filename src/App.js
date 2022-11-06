import './App.css';
import Login from './Login';
import profile from './images/a.png';
import email from './images/email.jpg';
import password from './images/password.png';
function App(){
  return(
    <div className='main'>
      <div className='sub_main'>
        <div>
          <div className='imgs'>
            <div className='container_img'>
              <img src={profile} alt='profile' className='profile'/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div className='second_input'>
              <img src={email} alt='email' className='inputs'/>
              <input type='text' placeholder='Username' id='name1'/>
            </div>
            <div className='second_input'>
              <img src={password} alt='password' className='inputs'/>
              <input type='password' placeholder='Password' id='name2'/>
            </div>
            <div className='login_button'>
              <button>Login</button>
            </div>
            <div id='link'>
              <p>
                <a href="#">Forgot password?</a> Or <a href='#'>Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
