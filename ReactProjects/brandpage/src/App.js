//import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';

const App =() =>{
return <div>
  <nav className="container">
    <div className="logo">
      <img src="nike_logo.png" alt="logo"/>
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li> 
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>Login</button>
  </nav>
  <Hero/>
 
</div>
  

};
 export default App;
