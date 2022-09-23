import React from 'react';
import Card from './Card';
import { Wrapper } from '../components/Cards.styles'
import HomePage from './HomePage';

export default function Cards({ cities, onRemove }) {
  if (cities.length === 0) {
    return (
      <HomePage />
    )
  }
  else {
    return (

      <Wrapper>
        {cities = !undefined ?
          cities.map((city) => {
            return (
              <Card
                key={city.id}
                min={city.min}
                max={city.max}
                name={city.name}
                img={city.img}
                id={city.id}
                onClose={() => onRemove(city.id)}

              />
            )
          })
          :
          console.log('aiuuuda')
        }

      </Wrapper>
    )
  }
};