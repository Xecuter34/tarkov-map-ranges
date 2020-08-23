import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import '../css/map-display.css';

import reserve from '../images/maps/reserve.png'

const MapDisplay = () => {
    let active = false;

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
                const coord = getMousePosition(e, c);
                ctx.beginPath();
                ctx.arc(coord.x, coord.y, 150, 0, 2 * Math.PI);

                ctx.fillStyle = 'green';
                ctx.globalAlpha = .3;

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
            <img id='map-display' src={reserve} style={{height: '100%'}} />
        </Col>
    );
};

export default MapDisplay;