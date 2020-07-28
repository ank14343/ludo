declare var canvas: HTMLCanvasElement;
var browserViewableCanvasScreen = {
    width: (window.innerWidth - canvas.width)/2,
    height: Math.ceil((window.innerHeight - canvas.height)/2)
}

window.onresize = (e: Event) => {
    // console.log(e)
    canvas.style.paddingTop = (window.innerHeight - canvas.height)/2 + "px";
    browserViewableCanvasScreen = {
        width: Math.ceil((window.innerWidth - canvas.width)/2),
        height: Math.ceil((window.innerHeight - canvas.height)/2)
    }
}

export function handleCanvasClicks(event: MouseEvent) {
    // console.log(event)
    console.log(event.clientX - browserViewableCanvasScreen.width, event.clientY - browserViewableCanvasScreen.height)
}