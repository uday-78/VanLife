// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Animation for the number 404
// const bounce = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
// `;

// // Animation for the subtitle
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Animation for the button
// const pulse = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
// `;

// // Styled Components
// const Container = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   background-color: #f9fafb;
//   font-family: "Arial", sans-serif;
//   overflow: hidden;
//   z-index: 1;

//   /* Parallax effect */
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 200%;
//     height: 200%;
//     background: linear-gradient(135deg, #eef2ff, #f3e8ff);
//     transform: rotate(45deg);
//     animation: parallax 10s infinite linear;
//     z-index: -1;
//   }

//   @keyframes parallax {
//     0% {
//       transform: rotate(45deg) translateX(0) translateY(0);
//     }
//     100% {
//       transform: rotate(45deg) translateX(-50%) translateY(-50%);
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 8rem;
//   font-weight: bold;
//   color: #3b82f6;
//   margin: 0;
//   animation: ${bounce} 2s infinite ease-in-out;
//   z-index: 2;
// `;

// const Subtitle = styled.p`
//   font-size: 1.5rem;
//   color: #6b7280;
//   margin: 1rem 0 2rem 0;
//   animation: ${fadeIn} 1.5s ease-in-out;
//   z-index: 2;
// `;

// const Button = styled.button`
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
//   color: #fff;
//   background-color: #3b82f6;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.3s ease;
//   animation: ${pulse} 2s infinite ease-in-out;
//   z-index: 2;

//   &:hover {
//     background-color: #2563eb;
//     transform: scale(1.05);
//   }
// `;

// const Illustration = styled.img`
//   width: 200px;
//   height: auto;
//   margin-bottom: 2rem;
//   animation: ${fadeIn} 2s ease-in-out;
//   z-index: 2;
// `;

// // NotFound Component
// const NotFound = () => {
//   return (
//     <Container>
//       {/* Illustration */}

//       {/* Title */}
//       <Title>404</Title>

//       {/* Subtitle */}
//       <Subtitle>Oops! The page you're looking for doesn't exist.</Subtitle>

//       {/* Button */}
//       <Button onClick={() => window.history.back()}>Go Back</Button>
//     </Container>
//   );
// };

// export default NotFound;

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"; // Import Link from React Router

// Animation for the number 404
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Animation for the subtitle
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for the button
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9fafb;
  font-family: "Arial", sans-serif;
  overflow: hidden;
  z-index: 1;

  /* Parallax effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, #eef2ff, #f3e8ff);
    transform: rotate(45deg);
    animation: parallax 10s infinite linear;
    z-index: -1;
  }

  @keyframes parallax {
    0% {
      transform: rotate(45deg) translateX(0) translateY(0);
    }
    100% {
      transform: rotate(45deg) translateX(-50%) translateY(-50%);
    }
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #3b82f6;
  margin: 0;
  animation: ${bounce} 2s infinite ease-in-out;
  z-index: 2;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #6b7280;
  margin: 1rem 0 2rem 0;
  padding: 0 1rem;
  animation: ${fadeIn} 1.5s ease-in-out;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none; // Remove default underline
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: ${pulse} 2s infinite ease-in-out;
  z-index: 2;

  &:hover {
    background-color: #2563eb;
    transform: scale(1.05);
  }
`;

// NotFound Component
const NotFound = () => {
  return (
    <Container>
      {/* Illustration */}

      {/* Title */}
      <Title>404</Title>

      {/* Subtitle */}
      <Subtitle>Oops! The page you're looking for doesn't exist.</Subtitle>

      {/* Link */}
      <StyledLink to="/">Go Back to Home</StyledLink>
    </Container>
  );
};

export default NotFound;
