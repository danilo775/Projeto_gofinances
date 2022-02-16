import React from "react";
import { Container, Title, Montante, Categoria, Footer, Icon, NameCategoria, Date  } from "./styles";

interface CategoriaProps{
    name:string;
    icon:string;
}

export interface TransactionCardProps{
        type: 'positivo' | 'negativo';
        name:string;
        motante:string;
        categoria:CategoriaProps;
        date: string;
    
}

interface Props{
   data:TransactionCardProps;
   id: string; 
}

export function TransactionCard( { data } : Props){

    return(
        <Container>
       
                <Title> {data.name}  </Title>
                <Montante type = {data.type} >
                    {data.type==='negativo' && '- '}
                    {data.motante}                  
                 </Montante>
            
            <Footer>
                <Categoria>
                    <Icon name="dollar-sign" />
                    <NameCategoria> alimentaçao </NameCategoria>
                </Categoria>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}