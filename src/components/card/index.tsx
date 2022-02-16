import React from "react";
import { Container, Header, Title, Icon, Footer, Montante, LastTransaction } from "./styles";

interface props {
    title: string;
    motante: string;
    lastTransation:string;
    type: 'up' | 'down' | 'total';
}

const icon = {
    up:'arrow-up-circle',
    down:'arrow-down-circle',
    total:'dollar-sign',
}

export function Card({type, title, motante, lastTransation} : props){


    return(
        <Container type={type}>
            <Header>
                <Title type={type}> {title} </Title>
                <Icon name={icon[type]} type={type} />
            </Header>

            <Footer>
                <Montante type={type}> {motante} </Montante>
                <LastTransaction type={type}> {lastTransation} </LastTransaction>
            </Footer>
        </Container>
    )
}
