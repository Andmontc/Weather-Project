import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/form';
import Weather from './Components/weather';
import Error from './Components/error';

function App() {
  // main state
  const [search, saveSearch] = useState({
		city: '',
		country: ''
  });
  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);
  const {city, country} =  search;

  // document ready
  useEffect(() => {
      const Api = async () => {
        if (consult) {
          const appId = 'api';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
          const answer = await fetch(url);
          const result = await answer.json();
          saveResult(result);
          saveConsult(false);
          //handle error
          if(result.cod === "404") {
            saveError(true);
          } else {
            saveError(false);
          }
        }
      }
      Api();
      // eslint-disable-next-line
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="No results" />
  } else {
     component = <Weather
                  result={result}
                />
  }

  return (
     <Fragment>
        <Header
          Title = 'Weather App'
        />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form 
                  search={search}
                  saveSearch={saveSearch}
                  saveConsult={saveConsult}
                />
              </div>
              <div className="col m6 s12">
                {component}
              </div>
            </div>
          </div>
        </div>
     </Fragment>
  );
}

export default App;