import React from 'react';
import Logo from '../components/logo.png'
import SearchBar from './SearchBar.jsx';
import { Wrapper, Title } from './Nav.styles';

import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div>
    <Wrapper>
      <Link to='/'>
        <img src={Logo} alt='weather' width='90px' height='70px'/>
        <Title> Weather - App</Title>
      </Link>

      <Link to='/about'>
        <Title>About</Title>
      </Link>

      <SearchBar onSearch={onSearch}/>
    </Wrapper>
    </div>
  );
};

export default Nav;

