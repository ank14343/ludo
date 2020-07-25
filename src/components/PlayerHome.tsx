import React, { useEffect } from 'react';

declare var ctx: CanvasRenderingContext2D;

interface propsType {
    playerHomeID: string,
    x_coord: number,
    y_coord: number,
    width: number,
    height: number
}

function PlayerHome({ playerHomeID, x_coord, y_coord, width, height }: propsType) {

    const PLAYER_MAIN_AREA = {
        homeX_coord: (width*1/3)/2,
        homeY_coord: (height*1/3)/2,
        homeWidth: width*2/3,
        homeHeight: height*2/3,
        playersHomeAreaWidth: (width*2/3)*5/16,
        playersHomeAreaHeight: (height*2/3)*5/16
    }
    const PASA = {
        x_coord: x_coord + PLAYER_MAIN_AREA.playersHomeAreaWidth + PLAYER_MAIN_AREA.homeX_coord,
        y_coord: y_coord + PLAYER_MAIN_AREA.playersHomeAreaHeight + PLAYER_MAIN_AREA.homeY_coord,
        width: PLAYER_MAIN_AREA.homeWidth - 2*PLAYER_MAIN_AREA.playersHomeAreaWidth,
        height: PLAYER_MAIN_AREA.homeHeight - 2*PLAYER_MAIN_AREA.playersHomeAreaHeight
    }
    useEffect(() => {
        // drawing players main area in home
        var homeHTML: HTMLElement = document.createElement("div");
        homeHTML.setAttribute("id", "home_" + playerHomeID);
        homeHTML.style.width = PLAYER_MAIN_AREA.homeWidth + "px";
        homeHTML.style.height = PLAYER_MAIN_AREA.homeHeight + "px";
        homeHTML.style.position = "absolute";
        homeHTML.style.paddingLeft = PLAYER_MAIN_AREA.homeX_coord + "px";
        homeHTML.style.paddingTop = PLAYER_MAIN_AREA.homeY_coord + "px";
        // console.log(homeHTML)
        document.getElementById(playerHomeID)?.appendChild(homeHTML);
        ctx.beginPath();
        ctx.rect(x_coord + PLAYER_MAIN_AREA.homeX_coord, y_coord + PLAYER_MAIN_AREA.homeY_coord, PLAYER_MAIN_AREA.homeWidth, PLAYER_MAIN_AREA.homeHeight);
        ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
        ctx.stroke();
        ctx.closePath();

        // drawing all four players in home
        // console.log(JSON.stringify(PLAYER_MAIN_AREA))
        let playerNo = 1;
        for( let col = 0; col < 2; col++ ) {
            for( let row = 0; row < 2; row++ ) {
                var playerHomeHTML: HTMLElement = document.createElement("div");
                playerHomeHTML.setAttribute("id", "home_" + playerHomeID + "_player" + playerNo);
                playerHomeHTML.style.width = PLAYER_MAIN_AREA.playersHomeAreaWidth + "px";
                playerHomeHTML.style.height = PLAYER_MAIN_AREA.playersHomeAreaHeight + "px";
                playerHomeHTML.style.position = "absolute";
                playerHomeHTML.style.paddingLeft = row*(PLAYER_MAIN_AREA.homeWidth - PLAYER_MAIN_AREA.playersHomeAreaWidth) + "px";
                playerHomeHTML.style.paddingTop = col*(PLAYER_MAIN_AREA.homeHeight - PLAYER_MAIN_AREA.playersHomeAreaHeight) + "px";
                // console.log(playerHomeHTML)
                document.getElementById("home_" + playerHomeID)?.appendChild(playerHomeHTML);
                playerNo++;
                ctx.beginPath();
                ctx.rect(x_coord + PLAYER_MAIN_AREA.homeX_coord + row*(PLAYER_MAIN_AREA.homeWidth-PLAYER_MAIN_AREA.playersHomeAreaWidth), y_coord + PLAYER_MAIN_AREA.homeY_coord + col*(PLAYER_MAIN_AREA.homeHeight-PLAYER_MAIN_AREA.playersHomeAreaHeight), PLAYER_MAIN_AREA.playersHomeAreaWidth, PLAYER_MAIN_AREA.playersHomeAreaHeight);
                ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
                ctx.stroke();
                ctx.closePath();
            }       
        }

        // drawing pasa
        var pasaHTML: HTMLElement = document.createElement("div");
        pasaHTML.setAttribute("id", "pasa_" + playerHomeID);
        pasaHTML.style.width = PASA.width + "px";
        pasaHTML.style.height = PASA.height + "px";
        pasaHTML.style.position = "absolute";
        pasaHTML.style.paddingLeft = PLAYER_MAIN_AREA.homeX_coord + PLAYER_MAIN_AREA.playersHomeAreaWidth + "px";
        pasaHTML.style.paddingTop = PLAYER_MAIN_AREA.homeY_coord + PLAYER_MAIN_AREA.playersHomeAreaHeight + "px";
        // console.log(pasaHTML)
        document.getElementById("home_" + playerHomeID)?.appendChild(pasaHTML);
        // console.log(JSON.stringify(PASA))
        ctx.beginPath();
        ctx.rect(PASA.x_coord, PASA.y_coord, PASA.width, PASA.height);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
        ctx.stroke();
        ctx.closePath();
    }, []);

    // drawing players home
    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
    ctx.stroke();
    ctx.closePath();

    // console.log(playerHomeID, x_coord, y_coord, width, height)

    return (
        <>
           <div id={playerHomeID} style={{width: width, height: height, position: "absolute", paddingLeft: x_coord, paddingTop: y_coord}}></div>
        </>
    );
}

export default PlayerHome;