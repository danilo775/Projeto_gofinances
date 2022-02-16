import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInput } from "react-native";


export const Container = styled(TextInput)`
background-color: ${({theme})=>theme.colors.shape};
width: 100%;
border-radius: 5px;
font-size: ${RFValue(14)}px;
padding: 18px;
 margin-bottom: 8PX;
 font-family:${({theme})=>theme.fonts.regular};
 color: ${({theme})=>theme.colors.Text_dark};
`;

