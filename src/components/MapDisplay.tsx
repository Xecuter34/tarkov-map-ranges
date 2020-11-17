import React, { useState, useEffect, useContext } from 'react';
import { Col } from 'react-bootstrap';

import '../css/map-display.css';

import IRange from '../interfaces/IRange';

import MapContext from '../context/MapContext';
import MapRangeContext from '../context/MapRangeContext';

import MapReserve from './maps/MapReserve';


const MapDisplay = () => {
    let active = false;
    const CurrentMapContext = useContext(MapContext);

    /*

        TODO: Try and get this to somehow update properly
        as it completely ignored when it is updated from
        the context.
        
    */
    const [mapRanges, setMapRanges] = useState<IRange>({
        one: 100,
        two: 200,
        three: 300,
        four: 400,
        five: 500
    });

    useEffect(() => {
        const mapDisplay = document.getElementById('map-display');
        if (mapDisplay !== null) {
            const mapContainer = document.getElementById('map-container');
            const canvas = document.createElement('canvas');
            canvas.id = 'range-display';
            canvas.setAttribute('class', 'range-display');
            canvas.width = document.body.clientWidth;
            canvas.height = mapDisplay.clientHeight;
            canvas.onmousedown = (e) => {
                setMouseActive(e);
            };

            canvas.onmouseup = (e) => {
                setMouseActive(e);
            };

            canvas.onmousemove = (e) => {
                //@ts-ignore
                drawRadius(e);
            };

            mapContainer?.appendChild(canvas);
        };
    }, []);

    const setMouseActive = (e: MouseEvent) => {
        if (e.type === 'mousedown') {
            active = true;
            //@ts-ignore
            drawRadius(e);
        } else if (e.type === 'mouseup') {
            active = false;
        };
    };

    const drawRadius = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (active) {
            const c = e.currentTarget;
            const ctx = c.getContext('2d');

            if (ctx !== null) {
                ctx.clearRect(0, 0, c.width, c.height);

                const coord = getMousePosition(e, c);
                ctx.beginPath();

                ctx.arc(coord.x, coord.y, mapRanges.one, 0, Math.PI * 2);
                ctx.fillStyle = '#00ff00';
                ctx.globalAlpha = .2;
                ctx.fill();

                ctx.arc(coord.x, coord.y, mapRanges.two, 0, Math.PI * 2, false);
                ctx.arc(coord.x, coord.y, mapRanges.one, 0, Math.PI * 2, true);
                ctx.fillStyle = '#ff9933';
                ctx.globalAlpha = .2;
                ctx.fill();

                ctx.arc(coord.x, coord.y, mapRanges.three, 0, Math.PI * 2, false);
                ctx.arc(coord.x, coord.y, mapRanges.two, 0, Math.PI * 2, true);
                ctx.fillStyle = '#ff0000';
                ctx.globalAlpha = .2;
                ctx.fill();
            };
        };
    };

    const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>, c: HTMLCanvasElement) => {
        const coord = {x:0, y:0};
        coord.x = e.clientX - c.offsetLeft;
        coord.y = e.clientY - c.offsetTop;
        return coord;
    };

    return (
        <Col id='map-container' xl={12} style={{height: 'calc(100vh - 50px)', textAlign: 'center'}}>
            <MapRangeContext.Provider value={{mapRanges: mapRanges, setFunc: setMapRanges}}>
                {(() => {
                    switch(CurrentMapContext.currentMap) {
                        case 'reserve':
                            return <MapReserve />
                        default:
                            return <></>
                    }
                })()}
            </MapRangeContext.Provider>
        </Col>
    );
};

export default MapDisplay;