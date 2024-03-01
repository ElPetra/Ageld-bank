import { Text } from 'src/shared/ui';

export const MainPage = () => {
    return (
        <div>
            <Text size={'xl'} weight={'bold'}>xl bold</Text>
            <Text size={'xl'} weight={'medium'}>xl medium</Text>
            <Text size={'xl'} weight={'regular'}>xl regular</Text>
            <Text size={'l'} weight={'bold'}>l bold</Text>
            <Text size={'l'} weight={'medium'}>l medium</Text>
            <Text size={'l'} weight={'regular'}>l regular</Text>
            <Text size={'m'} weight={'bold'}>m bold</Text>
            <Text size={'m'} weight={'medium'}>m medium</Text>
            <Text size={'m'} weight={'regular'}>m regular</Text>
            <Text size={'s'} weight={'bold'}>s bold</Text>
            <Text size={'s'} weight={'medium'}>s medium</Text>
            <Text size={'s'} weight={'regular'}>s regular</Text>

            <Text>Ссылка для header/footer</Text>
            Главная
        </div>
    );
};