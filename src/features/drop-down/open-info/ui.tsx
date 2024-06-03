import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Icon, Text } from 'src/shared/ui';
import { useDropDown } from 'src/shared/lib';

import './styles.scss';

interface Props {
    options: { text: string, to: string }[];
}

export const MoreInfoButton = ({ options }: Props) => {
    const { t } = useTranslation();
    const [open, setOpen] = useDropDown('more__info__container');

    return (
        <div className='more__info__container'>
            <button
                className='more__info__button'
                onClick={() => setOpen(prev => !prev)}
            >
                <Icon widthAndHeight={24} icon='more-icon' />
            </button>
            {open && (
                <div className='more__info__dropdown'>
                    {options.map((el, index) => (
                        <Link key={index} to={el.to}>
                            <Text weight='medium' color='quadruple'>
                                {t(el.text)}
                            </Text>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
