// Import Assets
import WeatherApp from '../assets/WeatherApp.png';
import CryptocurrencyApp from '../assets/CryptocurrencyApp.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Weather Application System built using React js</h3>
                    <img src={WeatherApp} alt="Weather App preview" />
                    <p>It's a basic weather app in react js which changes its background according to the weather and it tells you Temp, Humidity, Sunrise and Sunset timing.
                    </p>

                    <a href="https://react-weather.tk/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/nishantsaini09/React-Weather" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Cryptocurrency app built using <br></br> React Js.</h3>
                    <img src={CryptocurrencyApp} alt="Cryptocurrency App preview" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://react-crypto.tk/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/nishantsaini09/crypto-app" target="_blank" className="button">Code</a>
                </div>

                
            </div>
        </section>
    );
}

export default Projects;