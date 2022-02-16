import React from "react";

import { FlatList } from "react-native-gesture-handler";
import {categories} from '../../Utils/categories'

import { Button } from "../../components/Forms/Button";
                    
import { Container, Icon, Title, Header, Category, Name, Separador, Footer, } from "./styles";


interface Props {
    category: Category;
    seTCategory: (category:Category) => void;
    closeSelectCategory:()=> void
};

interface Category{
    key:string;
    name:string;
}


export function CategorySelect({
    category, 
    seTCategory, 
    closeSelectCategory
}:Props){

    function handleCategorySelect(category:Category){
        seTCategory(category);
    }
    
    return(
        <Container>
            <Header>
                      
            <Title>Categoria</Title>
            </Header>
            <FlatList
                data={categories}
                style={{flex: 1, width:'100%'}}
                keyExtractor={(item)=>item.key}
                renderItem = {({item})=>(
                    <Category
                        onPress={()=>handleCategorySelect(item)}
                        isActive ={category.key === item.key}                       
                    >
                       
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category> 
                )}
               ItemSeparatorComponent= {() => <Separador/>} 
            />
            
            <Footer>
                <Button title="Selecionar" onPress={closeSelectCategory} />
            </Footer>

        </Container>
    );
} 