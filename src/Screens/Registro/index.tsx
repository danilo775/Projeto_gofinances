import React, {useState} from "react";
import { Modal , TouchableWithoutFeedback,Keyboard, Alert} from "react-native";
import {Container, Header, Title, Form, Fieldset, DivCard} from './styles'; 
import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm  } from "react-hook-form";
import { InputForm  } from "../../components/Forms/inputForm";
import { Button  } from "../../components/Forms/Button";
import { BotaoType  } from "../../components/Forms/BotaoType";
import { CategoriaSelect  } from "../../components/Forms/CategoriaSelect";
import { CategorySelect } from "../CategorySelect";
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';


interface FormData{
    name: string,
    preco: string
}

const schema = Yup.object().shape({
    name: Yup.string().required('nome é Obrigatório'),
    preco: Yup.number().typeError('Informe valor númerico').positive('Ovalor nao pode ser negativo').required('O valor e obrigatorio'),
})

export function Registro(){

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    

    const navigation = useNavigation();

    const [category,setCategory] = useState({
        key:' category',
        name:'Categoria',
    })

    const{control, handleSubmit, reset, formState:{errors} }= useForm({resolver:yupResolver(schema)});

    function fecharSelectCategoryModal(){
        setCategoryModalOpen(false);
    };
    function abrirSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function selectTransaction(type: 'up'|'down'){
        setTransactionType(type);
    }

    async function register(form:FormData){
        if(!transactionType){
            return Alert.alert('Selecione o tipo de transaçao');
        }
        if(category.key === 'category'){
            return Alert.alert('Selecione a categoria');
        }



    const  newTransaction={
            id: String(uuid.v4()),
            name:form.name,
            preco:form.preco,
            transactionType,
            category:category.key,
            date: new Date()
        }
    try {   
            const dataKey = '@finances:transactions';
            const data = await  AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];
            
            const dataFormatted =[
                ...currentData,
                newTransaction
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType('');
            setCategory({               //limpando a tela cadastro
                key: 'category',
                name:'Categoria'
            });

            navigation.navigate('Listagem');

    } catch (error) {
            console.log(error);
            Alert.alert("Nao foi posivel salvar");
        }
    }
        

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title> Cadastro </Title>
                </Header>
                <Form> 

                    <Fieldset>
                        <InputForm name="name" control={control}  placeholder="Nome" autoCapitalize="sentences" autoCorrect={false} error={errors.name && errors.name.message}/>
                        <InputForm name="preco" control={control}  placeholder="Preço" keyboardType="numeric" error={errors.preco && errors.preco.message}/>

                        <DivCard>
                            <BotaoType 
                                title="Income" 
                                type='up'
                                onPress={()=>selectTransaction('up')}
                                isActive = {transactionType==='up'}
                            />
                            <BotaoType 
                                title="Outcome" 
                                type="down" 
                                onPress={()=>selectTransaction("down")}
                                isActive = {transactionType==='down'}
                            />
                        </DivCard>

                        <CategoriaSelect 
                            title={category.name}
                            onPress={abrirSelectCategoryModal}
                        />
                    </Fieldset>

                    <Button title="Enviar" onPress={handleSubmit(register)} />
                    
                </Form> 

                <Modal visible={categoryModalOpen}>
                    <CategorySelect 
                        category={category}
                        seTCategory={setCategory}
                        closeSelectCategory={fecharSelectCategoryModal}              
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    );
} 