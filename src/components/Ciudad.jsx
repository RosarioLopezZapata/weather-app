import React from "react";
import { Text, Title } from "./Ciudad.styles";

export default function Ciudad({ciudad}) {
    
    return (
        <div>
            <p/>
              <Title>{ciudad.name}</Title>
              <div>
                    <p/>
                    <Text>Temperature: {ciudad.temp} ºC</Text>
                    <Text>Weather: {ciudad.weather}</Text>
                    <Text>Wind: {ciudad.wind} km/h</Text>
                    <Text>Amount of clouds: {ciudad.clouds}</Text>
                    <Text>Latitude: {ciudad.latitud}º</Text>
                    <Text>Longitude: {ciudad.longitud}º</Text>
              </div>
        </div>
    )
}