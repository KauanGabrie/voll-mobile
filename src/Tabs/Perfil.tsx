import { VStack, Text, ScrollView,Avatar, Divider, } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
            <Titulo color="blue.500">Meu Perfil</Titulo>
            <Avatar size='xl' source={{
                uri:"https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/5cb34d9fe41d4f7e8041fb06d6927ffa.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857670&x-signature=kiEvZ85y7CIPo1cLfj7a8rpLyW4%3D"}}mt={5}/>
            <Titulo  color="blue.500">Informacoes Pessoais</Titulo>
            <Titulo fontSize="lg">Kauan Gabriel</Titulo>
            <Titulo fontSize="lg">29/05/2004</Titulo>
            <Titulo fontSize="lg">Votuporanga/SP</Titulo>

            <Divider mt={5}/>

            <Titulo color="blue.500">Historico Médico</Titulo>
            <Titulo fontSize={20}>Bronquite</Titulo>
            <Titulo fontSize={20}>Sinusite</Titulo>
        </VStack>
        </ScrollView>
    )
}