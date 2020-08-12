function getViewportSize() {
    return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
}

function renderPageForMobileDevices(){
    const {width} = getViewportSize();
    if(width < 576){
        div1.before(div2);
        div1.after(div3);
    }else{
        divDownloadContent.appendChild(div2);
        div2.after(div3);
    }
};