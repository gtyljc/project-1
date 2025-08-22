
const adds = [
    `<div class="h__ad">
        <p>Free returns & exchanges</p>
        <button class="open-ad-btn">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" class="_arrow-icon_17wou_92"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.2929L8.35359 11.6465L7.64648 12.3536L16 20.7071L24.3536 12.3536L23.6465 11.6465L16 19.2929Z" fill="black"></path></svg>
        </button>
    </div>`,
    `<div class="h__ad">
        <p>Free standard delivery with AdiClub</p>
        <button class="h__open-ad-btn">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" class="_arrow-icon_17wou_92"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.2929L8.35359 11.6465L7.64648 12.3536L16 20.7071L24.3536 12.3536L23.6465 11.6465L16 19.2929Z" fill="black"></path></svg>
        </button>
    </div>`
]
const ad_con = document.getElementsByClassName("h__ad-con")[0];
var index = -1;

function scrollAd(){
    if (index + 1 == adds.length) {
        index = 0;
    }
    else {
        index += 1;
    }

    ad_con.innerHTML = adds[index];

    ad_con.onanimationend = scrollAd;
}

// init
ad_con.innerHTML = adds[0];

ad_con.children[0].onanimationend = scrollAd;