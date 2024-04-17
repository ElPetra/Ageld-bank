import {
    Map,
    Placemark,
    RulerControl,
    SearchControl,
    YMaps,
    ZoomControl
} from '@pbe/react-yandex-maps';

import { Container, Icon, Text } from 'src/shared/ui';

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
                className='map'
            >
                <div className='map__forward-container'>
                    <Container variant='none'>
                        <div className='map__forward-continer__content'>
                            <button className='map__filter'>
                                <Icon icon='filter-lines' />
                                <Text weight='bold'>Фильтр</Text>
                            </button>
                        </div>
                    </Container>
                </div>
                <Placemark geometry={[59.95354024191497, 30.309087827396112]} />
                <SearchControl
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
