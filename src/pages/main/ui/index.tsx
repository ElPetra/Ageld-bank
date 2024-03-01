import { Input } from 'src/shared/ui/input';

export const MainPage = () => {
    return (
        <div>
            <Input placeholder='Номер телефона'></Input>
            <Input placeholder='Номер телефона' status='error'></Input>
            <Input placeholder='Номер телефона' size='large'></Input>
            Главная
        </div>
    );
};