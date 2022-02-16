import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../global/styles/theme";

 import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps{
    isActive:boolean;
}

export const Container = styled(GestureHandlerRootView)`
    background-color: ${({theme})=>theme.colors.background};
    flex: 1;
   
`; 

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px; 
    background-color: ${({theme})=>theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;
`; 

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
`; 

export const Icon = styled(Feather)`
     font-size: ${RFValue(20)}px;
     color: ${({theme})=>theme.colors.Text_dark};
     margin-right: 16px;
`; 

export const Category = styled.TouchableOpacity<CategoryProps>`
     width: 100%;
     padding: ${RFValue(15)}px;
     flex-direction: row;
     align-items: center;

     background-color: ${({isActive}) => isActive === true ? theme.colors.secondary_light : theme.colors.background};

`; 
export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`; 
export const Separador = styled.View`
   height: 1.5px;
   width: 100%;
   background-color: ${({theme})=>theme.colors.test};
`; 

export const Footer = styled.View`
   padding: 24px;
   width: 100%;
`; 
