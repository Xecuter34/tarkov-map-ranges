import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import MapContext from '../context/MapContext';
import DebugContext from '../context/DebugContext';

const MapSelect = ({...props}) => {
    const [active, setActive] = useState<boolean>(false);
    const CurrentMapContext = useContext(MapContext);
    const MapDebugContext = useContext(DebugContext);

    const containerClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) : void => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        };
    };

    const MapItem = ({mapName}: any) => {
        return (
            <li className={
                classNames('map-item', CurrentMapContext.currentMap === mapName && 'active')
            } onClick={(e) => { 
                CurrentMapContext.setFunc(mapName);
                containerClick(e);
                if (MapDebugContext.dispatch !== undefined) {
                    MapDebugContext.dispatch({type: 'map', value: mapName});
                };
            }}>{mapName}</li>
        )
    }

    return (
        <div className='map-container'>
            <div className='map-title' onClick={containerClick}>
                Locations
                <FontAwesomeIcon className='map-title-icon' 
                    icon={faChevronDown} 
                    rotation={active ? 180 : undefined} 
                />
            </div>
            <ul className={classNames(
                    'map-list',
                    active && 'active'
                )}
            >
                <MapItem mapName='factory' />
                <MapItem mapName='woods' />
                <MapItem mapName='customs' />
                <MapItem mapName='shoreline' />
                <MapItem mapName='reserve' />
            </ul>
        </div>
    );
};

export default MapSelect;