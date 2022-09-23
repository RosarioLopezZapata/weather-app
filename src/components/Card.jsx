import React from 'react';
import { Name, Wrapper, Content, Text, Bar, Button } from '../components/Card.styles'
import { Link } from 'react-router-dom';

export default function Card(info) {

  return (
    <div>
      <Wrapper>
        <Content>

          <Button onClick={info.onClose}>X</Button>
          <Bar>
            <Name>
              <Link to={`/ciudad/${info.id}`} >
                {info.name}
              </Link>
            </Name>
            <img src={`http://openweathermap.org/img/wn/${info.img}@2x.png`} alt='weather img' />


          </Bar>
          <div>
            <Text>
              Maximum Temperature
            </Text>
            <h2>{info.max} °C</h2>

            <Text>
              Minimum Temperature
            </Text>
            <h2>{info.min} °C</h2>
          </div>
        </Content>
      </Wrapper>
    </div>
  )
};