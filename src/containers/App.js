import React, { useState } from 'react';
import './App.css';
import Cards from '../components/Cards.jsx';
import Nav from '../components/Nav';
import About from '../components/About';
import { Route } from 'react-router-dom';
import Ciudad from '../components/Ciudad';

const apiKey = 'apiKey';

function App() {

  const [cities, setCities] = useState([]);

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  };
  function handleRemoveCity(cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id;
      })
    })

  };

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }
          handleAddCity(ciudad)
          console.log(ciudad)
        } else {
          alert("Ciudad no encontrada")
        }
      });

  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        exact path='/about'
        component={About}
      />
      <Route exact path='/'>
        <Cards
          cities={cities}
          onRemove={handleRemoveCity}
        />
      </Route>


      <Route
        exact path='/ciudad/:id'
        render={({ match }) => {
          const city = cities.find(
            (city) => city.id === parseInt(match.params.id)
          );
          return <Ciudad ciudad={city} />;
        }
        }
      />

    </div>
  );
}

export default App;
