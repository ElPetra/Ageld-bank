import {
    Map,
    Placemark,
    RulerControl,
    YMaps,
    ZoomControl
} from '@pbe/react-yandex-maps';

import { Container } from 'src/shared/ui';

import './styles.scss';
import { MapFilter } from 'src/features/filters';

export const ATMsBranchesPage = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [59.95354024191497, 30.309087827396112],
                    zoom: 15,
                    controls: []
                }}
                className='map'
            >
                <div className='map__forward-container'>
                    <Container variant='none'>
                        <MapFilter />
                    </Container>
                </div>
                <Placemark geometry={[59.95354024191497, 30.309087827396112]} />
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
