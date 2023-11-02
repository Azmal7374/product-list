import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;


export const FilterContainer = styled.div`
  position: sticky;
  top: 10;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FilterLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #007bff;
  }

  @media (min-width: 768px) {
    width: 150px;
  }
`;



export const AllProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Gap between product items */
  padding: 20px; /* Add some padding for spacing from the container edges */
`;





export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 45%; 
  box-sizing: border-box;  
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100%; 
  max-height: 200px;  
  object-fit: cover;  
`;

export const ProductTitle = styled.h2`
  margin: 10px 0;
  font-size: 18px;
`;

export const ProductDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductCategory = styled.p`
  
`;
