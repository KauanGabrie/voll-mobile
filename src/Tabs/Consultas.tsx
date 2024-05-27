import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas(){
    return(
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta 
            nome='Dr. Julia Caroline'
            especialidade='Urologista'
            foto='https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/0050dbe317684834bbed8f6d842f0b25.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857486&x-signature=aSVC9hM9I2Oy8WpDtZ9xfkXFGN8%3D'
            data='19/07/2005'
            foiAtendido
            foiAgendado/>
        </VStack>
    )
}