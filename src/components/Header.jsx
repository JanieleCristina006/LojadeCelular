import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { IoCartOutline } from 'react-icons/io5';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0A0A0A;
  }
`;

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  height: 12vh;
  padding: 0 20px;
  background-color: ${({ isScrolled }) => (isScrolled ? '#0A0A0A' : 'transparent')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  gap: 16vw;
  margin-bottom: 50px;
  z-index: 1000;
  transition: background-color 0.3s ease;

  a {
    text-decoration: none;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2.1rem;

    span {
      color: #6143da;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 20px;
    max-height: 12vh;
    width: 100%;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 58px;
  a {
    text-decoration: none;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;

    span {
      color: #6143da;
    }
  }

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content:space-around;
    position: fixed;
    top: 15vh;
    left: 52vw;
    border-radius:8px;
    padding-left:5vw;
    width: 40%;
    background-color: #6143DA;
    filter: grayscale(0.2);
    transition: background-color 0.3s ease;
    z-index: 999;
  }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderArea isScrolled={isScrolled}>
        <div>
          <Link to='/'>St<span>o</span>re</Link>
        </div>
        <MenuToggle onClick={toggleMenu}>&#9776;</MenuToggle>
        <NavMenu menuOpen={menuOpen}>
          <Link to='/'>Home</Link>
          <Link to='/cart'>
            <IoCartOutline size={35} />
          </Link>
        </NavMenu>
      </HeaderArea>
    </>
  );
};
