import './styles.scss';

export function Preloader() {
    return (
        <div className='preloader' data-testid='preloader'>
            <div className='preloader__img'></div>
        </div>
    );
}
