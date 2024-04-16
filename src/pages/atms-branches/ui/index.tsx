import {
    Map,
    YMaps,
    SearchControl,
    RulerControl,
    ZoomControl,
    Placemark
} from '@pbe/react-yandex-maps';

import './styles.scss';

export const ATMsBranchesPage = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [59.95354024191497, 30.309087827396112],
                    zoom: 15,
                    controls: []
                }}
                // options={{ autoFitToViewport: 'always' }}
                width='100%'
                height='100%'
            >
                <Placemark geometry={[59.95354024191497, 30.309087827396112]} />
                <SearchControl
                    className='search-control'
                    options={{
                        float: 'right',
                        size: 'auto'
                    }}
                />
                <RulerControl
                    options={{
                        position: { right: 10, bottom: 30 }
                    }}
                />
                <ZoomControl
                    options={{
                        size: 'large',
                        position: { right: 10, bottom: 30 },
                        zoomDuration: 10
                    }}
                />
            </Map>
        </YMaps>
    );
};
