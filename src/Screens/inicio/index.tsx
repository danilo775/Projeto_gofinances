import React, { useEffect, useState } from "react";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import { Container, Header, User,LogoutButton, Photo, UserGreeting, UserInfo,UserName,  UserContainer, Icon,Cardd, Transactions, Title, ListTransaction } from "./styles";
import { View, } from "react-native";
import { Card } from "../../components/card";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface DataListProps extends TransactionCardProps{
   id: string; 
}

export function Inicio(){
    const[data, setData]  =useState<DataListProps[]>([]);
    

    async function loadTransactions() {
        const dataKey = '@finances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response): [];

        console.log(transactions);
        const transactionsFormatted : DataListProps[] = transactions.map((item : DataListProps) => {
            const motante = Number(item.motante);
            console.log(item.motante);
            const date = Intl.DateTimeFormat('pt-BR',{
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format( new Date(item.date));

            return{
                id: item.id,
                name: item.name,
                motante: item.motante,
                type: item.type,
                categoria: item.categoria,
                date,
            }
        });
        setData(transactionsFormatted);
      
    }

    useEffect(()=>{
        loadTransactions();
    },[]);
  
    

    return(
        <Container>
          <Header>
            <UserContainer>
                <UserInfo>
                <Photo source={{uri:'https://avatars.githubusercontent.com/u/78768604?v=4'}} />
                    <User>
                        <UserGreeting> Olá, </UserGreeting>
                        <UserName> Danilo </UserName>
                    </User>
                </UserInfo>

                <LogoutButton onPress={()=>{}}>
                    <Icon name='power'/>
                </LogoutButton>
              

                </UserContainer>
          </Header>

            <Cardd>
                <Card 
                    type="up"
                    title="Entrada"
                    motante="R$ 15.250,00"
                    lastTransation="Última entrada dia 13 de abril"
                />
                
                <Card 
                    type="down"
                    title="Saídas"
                    motante="R$ 1.259,00"
                    lastTransation="Última saídadia 03 de abril"
                />

                <Card 
                    type="total"
                    title="Entrada"
                    motante="R$ 16.141,00"
                    lastTransation="01 à 16 de abril"
                />
            </Cardd> 
               

            <Transactions>

                <Title>
                    Listagem
                </Title>

                <ListTransaction
                    data ={data}
                    keyExtractor = {item => item.id}
                    renderItem={({ item })=> <TransactionCard data = {item} />}
                   
                />

                 
              

            </Transactions>

            

        </Container>
    )
}
