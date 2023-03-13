import React, {useLayoutEffect, useRef, useState} from "react";


const Whiteboard = () =>{
    const canvasRef = useRef();
    const canvasContext = useRef();

    const [MouseDown, setMouseDown] = useState(false);


    useLayoutEffect(() =>{
        canvasContext.current = canvasRef.current.getContext('2d');
        canvasRef.current.onMouseDown = onStartDraw;
        canvasRef.current.onMouseUp = onEndDraw;
        canvasRef.current.onMouseMove = onMoveDraw;
    });

    const onStartDraw = (event)=> {
        setMouseDown(true);
        canvasContext.current.beginPath();
    };

    const onEndDraw = (event) =>{
        setMouseDown(false);
        canvasContext.current.beginPath();
    };


    const onMoveDraw = (event) =>{
        if (!MouseDown) return;
        canvasContext.current.lineTo(event.clientX, event.clientY);
        canvasContext.current.stroke();
    };


    return (

        <>
            <div>Hello World</div>
            <canvas 
            width={window.innerWidth}
            height={window.innerHeight}
            ref = {canvasRef}
            onMouseDown = {onStartDraw}
            onMouseUp = {onEndDraw}
            onMouseMove = {onMoveDraw}
            ></canvas>
        </>
    )
};


export default Whiteboard;