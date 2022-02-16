import  styled  from "styled-components/native"
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons';
import{getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { BorderlessButton } from "react-native-gesture-handler";
import { TransactionCardProps } from "../../components/TransactionCard";

export const Container = styled.View `
        flex:1;   
        background-color: ${({theme})=>theme.colors.background};
`;

export const Titlee = styled.Text `
        font-family: ${({theme})=>theme.fonts.bold};
        font-size: 25px;
        font-weight: bold; 
        color: ${({theme})=> theme.colors.title};
`;

export const Header = styled.View `
        background-color: ${({theme})=>theme.colors.primary};
        height: ${RFPercentage(42)}px;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
        flex-direction  :row ;
`;

export const UserContainer = styled.View `
       width: 100%;
       padding: 0 24px;
       margin-top: ${getStatusBarHeight() + RFValue(28)}px ;
       flex-direction  :row ;
       justify-content: space-between;
       align-items: center;
`;

 export const UserInfo = styled.View`
      flex-direction  :row ;
      align-items: center;
 `; 

 export const User = styled.View`
        margin-left: 17px;
 `;

 export const Photo = styled.Image`
      width: ${RFValue(48)}px ;
      height: ${RFValue(48)}px ;
      border-radius: 10px;
 `;

 export const UserGreeting = styled.Text`
      color: ${({theme})=> theme.colors.shape};
      font-size  :${RFValue(18)}px ;
      font-family: ${({theme})=>theme.fonts.regular};
 `;

 export const UserName = styled.Text`
      color: ${({theme})=> theme.colors.shape};
      font-size  :${RFValue(18)}px ;
      font-family: ${({theme})=>theme.fonts.bold};
 `;

 export const LogoutButton = styled(BorderlessButton)`
`;

export const Icon = styled(Feather)`
        color: ${({theme})=> theme.colors.secondary};
        font-size  :${RFValue(24)}px ;
        
`;
export const Cardd = styled.ScrollView.attrs({ //attrs acessa a propriedade
        horizontal:true, //deixa a lista de lado
        showsHorizontalScrollIndicator:false, //tira a barra de rolagem da listagem
        contentContainerStyle:{paddingHorizontal:24}  
})`
   width: 100% ;
   position: absolute;
   margin-top: ${RFPercentage(20)}px;
`;


export const Title = styled.Text`
        color: ${({theme})=> theme.colors.Text_dark};
        font-size  :${RFValue(24)}px ; 
        padding: 0 24px;
        margin-bottom: 16px;
`;
export const Transactions = styled.View`
        flex: 1%;
        font-family: ${({theme})=>theme.fonts.regular};
        padding-top:${RFPercentage(12)}px;
        font-size  :${RFValue(18)}px ;

`;

export const  ListTransaction = styled( FlatList as new () => FlatList <TransactionCardProps> ).attrs ({
       
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {paddingBottom: getBottomSpace() }

})``;
