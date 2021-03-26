import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.ul``;

export const Filters = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 30px;

   .tag-filter {
      font-size: 16px;
      font-weight: 500;
      background: none;
      color: ${props => props.theme.colors.white};
      margin: 0 10px;
      transition: opacity ease .6s;

      &:hover {
         opacity: 0.6;
      }

      &::after {
         content: '';
         display: block;
         width: 55px;
         margin: 0 auto;
         padding-bottom: 5px;
         border-bottom: 10px solid ${props => props.theme.colors.warning};
      }

      &.recurrent::after {
         content: '';
         display: block;
         width: 55px;
         margin: 0 auto;
         padding-bottom: 5px;
         border-bottom: 10px solid ${props => props.theme.colors.success};
      }

      &.active {
         opacity: 0.6;
      }
   }
`;