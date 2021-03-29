import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MH;
   background-color: ${props => props.theme.colors.secondary};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10px;
   border-bottom: 1px solid ${props => props.theme.colors.gray};

   > button {
      display: none;
      visibility: hidden;
   }

   @media(max-width: 770px) {
      justify-content: flex-end;
   }

   @media(max-width: 600px) {
      justify-content: space-between;

     > button {
         display: block;
         margin-left: 10px;
         visibility: visible;
         background-color: ${props => props.theme.colors.warning};
         padding: 4px;
         border-radius: 7px;
     }
   }
`;

export const Profile = styled.div`
   display: flex;
   flex-direction: column;
   color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;

export const ToggleContainer = styled.div`
   @media(max-width: 770px) {
      display: none;
      visibility: hidden;
   }
`;