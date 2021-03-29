import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 30px;

   > img {
      width: 50px;
      height: 50px;
   }

   > h2 {
      color: ${props => props.theme.colors.white};
      margin-left: 7px;
   }
`;

export const Form = styled.form`
   width: 300px;
   height: 260px;
   background-color: ${props => props.theme.colors.tertiary};
   padding: 30px;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
`;

export const FormTitle = styled.h2`
   color: ${props => props.theme.colors.white};
   margin-bottom: 10px;
   
   &::after {  
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.theme.colors.warning};
   }
`;