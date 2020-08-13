function getViewportSize() {
    return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
}
let firstTime = true;
function renderPageForMobileDevices(){
    const {width} = getViewportSize();
    if(width < 576){
        div1.before(div2);
        div1.after(div3);
        if(firstTime) firstTime = false;
    }else if(!firstTime){
        divDownloadContent.appendChild(div2);
        div2.after(div3);
    }
};