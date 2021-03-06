import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    background-color: ${({theme})=>theme.colors.secondary};
    width: 100%;
    align-items: center;
    border-radius: 5px;
    padding: 18px;
`;

export const Title = styled.Text`
   
    font-size: ${RFValue(14)}px;

    font-family:${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.shape};
`;