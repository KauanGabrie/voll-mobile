import { Text, Avatar, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAtendido,
    foiAgendado
}:CardProps) {
    return (
        <VStack w="100%" bg={foiAgendado ? 'blue.100' : 'white'} p="5" borderRadius="lg">
            <VStack flexDir="row"><Avatar size='xl' source={{uri: foto }} mt={5} />
                <VStack pl="4">
                    <Text fontSize="md">{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {foiAtendido ? 'Cancelar': 'Agendar Consulatar'}
            </Botao>
        </VStack>
    )
}