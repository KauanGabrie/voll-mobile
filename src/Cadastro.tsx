import { Image, Text, Box, Checkbox, ScrollView } from 'native-base';
import Logo from './assets/Logo.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';
import { useState } from 'react';
import { useToast } from 'native-base';
import { cadastrarPaciente } from './servicos/PacienteServico';

export default function Cadastro({ navigation }: any) {
    const [numSecao, setNumeroSecao] = useState(0);
    const [dados, setDados] = useState({} as any);
    const [planos, setPlanos] = useState([] as number[]);
    const toast = useToast();

    function avancarSecao() {
        if (numSecao < secoes.length - 1) {
            setNumeroSecao(numSecao + 1);
        } else {
            console.log(dados);
            console.log(planos);
            cadastrar()
        }
    }

    function voltarSecao() {
        if (numSecao > 0) {
            setNumeroSecao(numSecao - 1);
        }
    }

    function atualizarDados(id: string, valor: string) {
        setDados({ ...dados, [id]: valor })
    }

    async function cadastrar(){
        const resultado = await cadastrarPaciente({
            cpf:dados.cpf,
            nome: dados.nome,
            email: dados.email,
            endereco: {
                cep:dados.cep,
                rua: dados.rua,
                numero: dados.numero,
                estado: dados.estado,
                complemento: dados.complemento
            },
            senha: dados.senha,
            telefone: dados.telefone,
            possuiPlanoSaude: planos.length > 0,
            planoSaude: planos,
            imagem: dados.imagem,
        })
        if(resultado){
            toast.show({
                title: 'Cadastro realizado com sucesso',
                description:'Voce já pode fazer login',
                backgroundColor: 'green.500',
            })
            navigation.replace('Login');
        }
        else{
            toast.show({
                title: 'Erro ao cadastrar',
                description: 'Verifique os dados e tente novamente',
                backgroundColor: 'red.500'
            })
        }
    }

    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt='Login'></Image>
            <Box>
                {
                    secoes[numSecao]?.entradaTexto?.map(entrada => {
                        return <EntradaTexto
                            label={entrada.label}
                            placeholder={entrada.placeholder}
                            key={entrada.id}
                            secureTextEntry={entrada.secureTextEntry}
                            value={dados[entrada.name]}
                            onChangeText={(text) => atualizarDados(entrada.name, text)}
                        />
                    })
                }
            </Box>
            <Box>
                {
                    numSecao == 2 && <Text color="blue.800" fontWeight="bold" mt="2" mb="2">
                        Selecione o plano:
                    </Text>
                }
                {
                    secoes[numSecao].checkbox.map(checkbox => {
                        return <Checkbox
                            key={checkbox.id}
                            value={checkbox.value}
                            onChange={() => {
                                setPlanos((planosAnteriores) => {
                                    if (planosAnteriores.includes(checkbox.id)) {
                                        return planosAnteriores.filter((id) => id !== checkbox.id)
                                    }
                                    return [...planosAnteriores, checkbox.id]
                                })
                            }}
                            isChecked={planos.includes(checkbox.id)}
                        >
                            {checkbox.value}</Checkbox>
                    })
                }
            </Box>
            {
                numSecao > 0 && <Botao onPress={() => voltarSecao()} bg={'gray.400'}>
                    Voltar
                </Botao>
            }
            <Botao onPress={() => avancarSecao()} mt={4}>
                Avançar
            </Botao>
        </ScrollView >
    );
}