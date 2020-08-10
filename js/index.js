function getViewportSize() {
    return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
}

const divContent = document.getElementById('content');
const divDownloadContent = document.getElementById('download-content');
const divSlogan = document.getElementById('slogan');
const divLinks = document.getElementById('links');

function renderPageForMobileDevices(){
    const {width} = getViewportSize();
    if(width < 576){
        const markupSlogan = `
            <div class="col-md-6 w-75 mx-auto" id="slogan">
                <p>Tu tiempo libre,<br> a tu manera.</p>
            </div>
        `;
        const markupLinks = `
            <div class="w-75 mx-auto" id="links">
                <h1>DESCARGA LA APP</h1>
                <div class="app-badges">
                    <a class="download-badge appstore-badge" href="https://apps.apple.com/us/app/ludo-club-fun-dice-game/id1267900294?mt=8"></a>
                    <a class="download-badge" href='https://play.google.com/store/apps/details?id=com.moonfrog.ludo.club&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class="googleplay-badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                </div>
                </div>
            </div>
        `;
        divSlogan.parentNode.removeChild(divSlogan);
        divLinks.parentNode.removeChild(divLinks);
        divContent.insertAdjacentHTML('afterbegin', markupSlogan);
        divContent.insertAdjacentHTML('beforeend', markupLinks);
    }
};
renderPageForMobileDevices();