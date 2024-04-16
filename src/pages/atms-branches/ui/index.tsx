import { Map, YMaps, SearchControl } from '@pbe/react-yandex-maps';

import './styles.scss';

export const ATMsBranchesPage = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.751574, 37.573856],
                    zoom: 9,
                    controls: []
                }}
                width='100%'
                height='720px'
            >
                <SearchControl
                    className='search-control'
                    options={{ float: 'right', size: 'large' }}
                />
            </Map>
        </YMaps>
    );
};
