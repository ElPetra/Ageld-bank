import cn from 'classnames';
import { type RefObject } from 'react';
import { useCarouselControlls } from 'src/shared/lib/carousel';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    containerRef: RefObject<HTMLDivElement>;
    angle: number;
}

export const Controlls = ({ containerRef, angle }: Props) => {
    const { changeRotateByArrow, changeRotateByControl, active } =
        useCarouselControlls(containerRef, angle);
    const { t } = useTranslation();
    const controllClasses = (el: 'center' | 'prev' | 'next') =>
        cn({
            controll: true,
            active_controll: el === active
        });
    return (
        <div className='carousel_controlls_container'>
            <div className='controll_block_container'>
                <div
                    className='controll_block'
                    onClick={() => changeRotateByControl('prev')}
                >
                    <div
                        className={controllClasses('prev')}
                        aria-label={t('предыдущий слайд')}
                        role='button'
                    ></div>
                </div>
                <div
                    className='controll_block'
                    onClick={() => changeRotateByControl('center')}
                >
                    <div
                        className={controllClasses('center')}
                        aria-label={t('актуальный слайд')}
                        role='button'
                    ></div>
                </div>
                <div
                    className='controll_block'
                    onClick={() => changeRotateByControl('next')}
                >
                    <div
                        className={controllClasses('next')}
                        aria-label={t('следующий слайд')}
                        role='button'
                    ></div>
                </div>
            </div>
            <div className='controll_block_container arrows'>
                <div
                    className='controll_block'
                    onClick={() => changeRotateByArrow('left')}
                >
                    <div
                        className='arrow controll'
                        aria-label={t('переключить назад')}
                        role='button'
                    ></div>
                </div>
                <div
                    className='controll_block right_arrow'
                    onClick={() => changeRotateByArrow('right')}
                >
                    <div
                        className='arrow controll'
                        aria-label={t('переключить вперед')}
                        role='button'
                    ></div>
                </div>
            </div>
        </div>
    );
};
