import React, { useEffect } from 'react';

declare var ctx: CanvasRenderingContext2D;

interface propsType {
    hPathID: string,
    x_coord: number,
    y_coord: number,
    width: number,
    height: number
}

function HorizontalPath({ hPathID, x_coord, y_coord, width, height }: propsType) {

    var boxHTML: HTMLElement = document.createElement("div");
    // each small box attr...
    const smallBox = {
        width: width/6,
        height: height/3
    }
    useEffect(() => {
        for(let col = 0; col < 3; col++) {
            for(let row = 0; row < 6; row++) {
                var box: HTMLElement = document.createElement("div");
                box.setAttribute("id", hPathID+'_box_'+col +''+ row);
                box.style.width = smallBox.width+"px";
                box.style.height = smallBox.height+"px";
                box.style.position = "absolute";
                box.style.paddingLeft = row*smallBox.width+"px";
                box.style.paddingTop = col*smallBox.height+"px";
                box.innerHTML = col +''+ row;
                boxHTML.appendChild(box)
                // console.log(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
                ctx.beginPath();
                ctx.rect(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
                ctx.strokeStyle = 'rgba('+(50+col*30)+', '+(50+row*30)+', '+(50+row*30)+', 1)';
                ctx.stroke();
                ctx.closePath();
            }
        }
        document.getElementById(hPathID)?.appendChild(boxHTML);
    }, []);

    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();

    // console.log(hPathID);

    return (
        <>
           <div id={hPathID} style={{width: width, height: height, position: "absolute", paddingLeft: x_coord, paddingTop: y_coord}}>
                
           </div>
        </>
    );
}

export default HorizontalPath;