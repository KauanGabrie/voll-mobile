import { VStack, Image, Text, Box, Divider } from 'native-base';
import Logo from '../assets/Logo.png';
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { ScrollView } from 'native-base';
import { Titulo } from '../componentes/Titulo';

export default function Principal({ navigation }) {
    return (
        <ScrollView>

        <VStack marginBottom="5%" >
            <VStack p="5">
            <Image source={Logo} alt='Login' marginBottom="5%"></Image>
            <Titulo fontSize="25" color="blue.500" marginBottom="5%" mb="25">Boas-Vindas!</Titulo>
            </VStack>
            <VStack w="90%" bg='white' p="5" borderRadius="lg" shadow="2" marginLeft="5%">
                <Box w={"100%"}>
                    <EntradaTexto placeholder='Digite a Especialidade' ></EntradaTexto>
                    <EntradaTexto placeholder='Digite sua Localização' secureTextEntry={true}></EntradaTexto>
                </Box>
                <Botao onPress={() => navigation.navigate('Tabs')}>
                    Buscar
                </Botao>
            </VStack>
            <VStack>
            <Titulo fontSize="25" color="blue.600"alignSelf="center" mb="25" >Depoimentos</Titulo>
            </VStack>
            <VStack marginBottom="10%">
                <Text>Trabalho como assistente social em São Paulo há mais de dez anos. Recentemente, conheci um homem de 45 anos que vive nas ruas desde que perdeu o emprego durante a pandemia. Ele era pedreiro e sustentava sua família com dignidade. É uma pessoa honesta e trabalhadora, mas a falta de oportunidades e o aumento do custo de vida o empurraram para essa situação. Ele sonha em conseguir um novo emprego e ter um lugar para chamar de lar novamente. Sua resiliência e esperança são inspiradoras.</Text>
            <Text fontSize="18" fontWeight="bold" color="gray.500" alignSelf="center">Kauan , 42 anos, Sao Paulo SP </Text>
            <Divider/>
            </VStack>
            <VStack marginBottom="10%">
                <Text>Sou empresário em Curitiba, e durante um projeto voluntário, conheci uma mulher de 38 anos que vive nas ruas há cinco anos. Ela perdeu tudo após um divórcio conturbado e, sem suporte familiar, acabou nas ruas. Muito inteligente, já trabalhou como professora e tem um vasto conhecimento em várias áreas. Com o apoio certo, ela poderia voltar a ter uma vida digna e estável. Sua força e determinação são impressionantes..</Text>
            <Text fontSize="18" fontWeight="bold" color="gray.500" alignSelf="center">Mateus , 82 anos, Sao Paulo SP </Text>
            <Divider/>
            </VStack>
            <VStack marginBottom="10%">
                <Text>Trabalho em uma ONG no Rio de Janeiro que oferece apoio a pessoas em situação de rua. Recentemente, conheci um jovem de 28 anos que está nessa situação há três anos. Ele saiu de casa devido a conflitos familiares e não conseguiu se estabelecer em um emprego fixo. Apesar de tudo, é muito talentoso na música e sonha em um dia poder se apresentar profissionalmente. Sua paixão pela música é contagiante e mostra o quanto ele ainda tem para oferecer à sociedade.</Text>
            <Text fontSize="18" fontWeight="bold" color="gray.500" alignSelf="center">Julia , 94 anos, Sao Paulo SP </Text>
            <Divider/>
            </VStack>
            <VStack marginBottom="5%">
                <Text>Como voluntário em uma instituição de caridade em Belo Horizonte, conheci uma senhora de 60 anos que vive nas ruas há mais de uma década. Ela era costureira e perdeu tudo após um incêndio em sua casa. Sem família para apoiá-la, acabou nas ruas. Mesmo com todas as dificuldades, ela ainda consegue manter um sorriso no rosto e ajuda outros moradores de rua com pequenas costuras. Sua bondade e capacidade de superar adversidades são verdadeiramente inspiradoras.</Text>
            <Text fontSize="18" fontWeight="bold" color="gray.500" alignSelf="center">Mareus , 100 anos, Sao Paulo SP </Text>
            <Divider/>
            </VStack>
        </VStack>
        </ScrollView>
    )
}