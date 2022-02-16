import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons';
import theme from "../../global/styles/theme";


interface TransactionProps{
    type: 'positivo' | 'negativo';
};



export const Container =styled.View`  
    background-color: ${({theme})=>theme.colors.shape};
    border-radius: 5px;
    
    padding: 17px 24px;
    margin-bottom:16px;
`;

export const Title =styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.Text_dark};
`;

export const Montante =styled.Text<TransactionProps>`
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    color: ${({theme, type})=>
    type ==='positivo' ? theme.colors.success : theme.colors.attention };
`;

export const Categoria =styled.View`
   flex-direction: row;
    align-items: center;
`;

export const Footer =styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Icon =styled(Feather)`
    font-size: ${RFValue(20)}px;
      color: ${({theme})=>theme.colors.test};
`;
export const NameCategoria =styled.Text`
    font-size: ${RFValue(14)}px;
      color: ${({theme})=>theme.colors.test};
      margin-left:17px;
`;
export const Date =styled.Text`
    font-size: ${RFValue(14)}px;
      color: ${({theme})=>theme.colors.test};

`;



          