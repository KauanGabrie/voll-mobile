import { VStack, Text, Box, Avatar } from "native-base";
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { ScrollView } from "native-base";

export default function Explorar({ navigation }) {
    return (
        <ScrollView>

            <VStack >

                <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%">
                    <Box w={"100%"}>
                        <EntradaTexto placeholder='Digite a Especialidade' ></EntradaTexto>
                        <EntradaTexto placeholder='Digite sua Localização' secureTextEntry={true}></EntradaTexto>
                    </Box>
                    <Botao onPress={() => navigation.navigate('Tabs')}>
                        Buscar
                    </Botao>
                </VStack>

                <Box alignItems="center" marginBottom="5%">
                    <Titulo color="blue.500" >Resultado da Busca</Titulo>
                </Box>

                <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%" marginBottom="5%">
                    <VStack flexDir="row"><Avatar size='xl' source={{
                        uri: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/5cb34d9fe41d4f7e8041fb06d6927ffa.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857670&x-signature=kiEvZ85y7CIPo1cLfj7a8rpLyW4%3D"
                    }} mt={5} />
                        <VStack pl="4">
                            <Text>Dra. Ana Lucia</Text>
                            <Text>Angiologista</Text>
                        </VStack>
                    </VStack>
                    <Botao mt={4}>
                        Agendar Consulta
                    </Botao>
                </VStack>

                <VStack marginBottom="5%">
                    <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%" >
                        <VStack flexDir="row"><Avatar size='xl' source={{
                            uri: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/5cb34d9fe41d4f7e8041fb06d6927ffa.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857670&x-signature=kiEvZ85y7CIPo1cLfj7a8rpLyW4%3D"
                        }} mt={5} />
                            <VStack pl="4">
                                <Text>Dra. Ana Lucia</Text>
                                <Text>Angiologista</Text>
                            </VStack>
                        </VStack>
                        <Botao mt={4}>
                            Agendar Consulta
                        </Botao>
                    </VStack>
                </VStack>

                <VStack marginBottom="5%">
                    <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%" >
                        <VStack flexDir="row"><Avatar size='xl' source={{
                            uri: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/5cb34d9fe41d4f7e8041fb06d6927ffa.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857670&x-signature=kiEvZ85y7CIPo1cLfj7a8rpLyW4%3D"
                        }} mt={5} />
                            <VStack pl="4">
                                <Text>Dra. Ana Lucia</Text>
                                <Text>Angiologista</Text>
                            </VStack>
                        </VStack>
                        <Botao mt={4}>
                            Agendar Consulta
                        </Botao>
                    </VStack>
                </VStack>
                
                <VStack marginBottom="5%">
                    <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%" >
                        <VStack flexDir="row"><Avatar size='xl' source={{
                            uri: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/5cb34d9fe41d4f7e8041fb06d6927ffa.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857670&x-signature=kiEvZ85y7CIPo1cLfj7a8rpLyW4%3D"
                        }} mt={5} />
                            <VStack pl="4">
                                <Text>Dra. Ana Lucia</Text>
                                <Text>Angiologista</Text>
                            </VStack>
                        </VStack>
                        <Botao mt={4}>
                            Agendar Consulta
                        </Botao>
                    </VStack>
                </VStack>

            </VStack>
        </ScrollView>
    )
}