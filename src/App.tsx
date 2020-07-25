import React from 'react';
import PlayerHome from './components/PlayerHome';
import HorizontalPath from './components/HorizontalPath';
import VerticalPath from './components/VerticalPath';

declare var ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement;
export const CANVAS_ATTRIBUTES = {
    X_COORD: 0,
    Y_COORD: 0,
    WIDTH: canvas.width,
    HEIGHT: canvas.height,
    CHILD_X_COORD: (canvas.width)*3/5,
    CHILD_Y_COORD: (canvas.height)*3/5,
    CHILD_WIDTH: (canvas.width)*2/5,
    CHILD_HEIGTH: (canvas.height)*2/5
}

function App() {
    ctx.beginPath();
    ctx.rect(CANVAS_ATTRIBUTES.X_COORD, CANVAS_ATTRIBUTES.Y_COORD, CANVAS_ATTRIBUTES.WIDTH, CANVAS_ATTRIBUTES.HEIGHT);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
    // console.log(ctx)
    return (
        <>
            <div id="ludo" style={{width: CANVAS_ATTRIBUTES.WIDTH, height: CANVAS_ATTRIBUTES.HEIGHT, paddingLeft: (window.innerWidth-CANVAS_ATTRIBUTES.WIDTH)/2}}>
                <PlayerHome playerHomeID="box1" x_coord={CANVAS_ATTRIBUTES.X_COORD} y_coord={CANVAS_ATTRIBUTES.Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <PlayerHome playerHomeID="box2" x_coord={CANVAS_ATTRIBUTES.X_COORD + CANVAS_ATTRIBUTES.CHILD_X_COORD} y_coord={CANVAS_ATTRIBUTES.Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <PlayerHome playerHomeID="box3" x_coord={CANVAS_ATTRIBUTES.X_COORD + CANVAS_ATTRIBUTES.CHILD_X_COORD} y_coord={CANVAS_ATTRIBUTES.Y_COORD + CANVAS_ATTRIBUTES.CHILD_Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <PlayerHome playerHomeID="box4" x_coord={CANVAS_ATTRIBUTES.X_COORD} y_coord={CANVAS_ATTRIBUTES.Y_COORD + CANVAS_ATTRIBUTES.CHILD_Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
            
                <HorizontalPath hPathID="hPath1" x_coord={CANVAS_ATTRIBUTES.X_COORD} y_coord={CANVAS_ATTRIBUTES.CHILD_HEIGTH} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_Y_COORD - CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <HorizontalPath hPathID="hPath2" x_coord={CANVAS_ATTRIBUTES.X_COORD + CANVAS_ATTRIBUTES.CHILD_X_COORD} y_coord={CANVAS_ATTRIBUTES.CHILD_HEIGTH} width={CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_Y_COORD - CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <VerticalPath vPathID="vPath1" x_coord={CANVAS_ATTRIBUTES.CHILD_WIDTH} y_coord={CANVAS_ATTRIBUTES.Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_X_COORD - CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
                <VerticalPath vPathID="vPath2" x_coord={CANVAS_ATTRIBUTES.X_COORD + CANVAS_ATTRIBUTES.CHILD_WIDTH} y_coord={CANVAS_ATTRIBUTES.CHILD_Y_COORD} width={CANVAS_ATTRIBUTES.CHILD_X_COORD - CANVAS_ATTRIBUTES.CHILD_WIDTH} height={CANVAS_ATTRIBUTES.CHILD_HEIGTH} />
            </div>
        </>
    )
}

export default App;