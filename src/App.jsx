
import { Typewriter } from 'react-simple-typewriter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Navbar from './assets/components/Navbar';
import { Link } from "react-router-dom";

const App = () => {
  

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/portrait-african-american-man-voter-registration-day_23-2149096776.jpg?t=st=1736137675~exp=1736141275~hmac=090859f3dc9b6a7de4daaaf9007ef383f8cb65ee73d04bc396c61f82b5fa474f&w=740')"
    }}>
      
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

     {/* <Navbar /> */}

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4">
        <div>
          {/* Typewriter Effect */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <Typewriter
              words={['Welcome to the Coded Sholly Voting Platform']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Cast your vote and make a difference!
          </p>

          <div className="space-x-4">
            <Link to="/register">
              <button className="px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                Register
              </button>
            </Link>

            <Link to="/vote">
              <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                Vote Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
