import { Icon, Text } from 'src/shared/ui';
import './styles.scss';

export const Greeting = () => {
    return (
        <div className='greeting'>
            <Icon icon='logo-title' width={129} height={108} />
            <Text tag='h1' size='xl' weight='bold' align='center'>
                Приветствуем <br /> в интернет-банкинге!
            </Text>
        </div>
    );
};
