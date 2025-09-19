const app = document.getElementById("app");

updateView();
function updateView(){
    let html =/*HTML*/ `
    <div class="header"><h1>cheasheet</h1></div>
    <div></div>
    <div class="menu">
    <b>codeAcademy:</b><br>
    <button onclick="falsyHtml()">falsy/truthy</button><br>
    <button onclick="ifElseHtml()">if/else etc</button><br>
    <button onclick="funksjonerHtml()">functions</button><br>
    
    <br>
    <b>skillShare:</b> <br>
    <button>incoming</button> <br>
    <br>
    <b>Moodle:</b> <br>
    <button onclick="gridsHtml()">grids</button><br>
    <br>
    <b>-</b><br>
    <button onclick="clearContent()">clear</button><br>
    </div> 
    <div class="mainContent">
    
    <div>${content}</div>

    <div class="activeNotes">
    ${scopeBlockHtml()}
    </div>

    <section>
    <b>links</b><br>
    <a href="https://getacademy.moodlecloud.com/mod/wiki/view.php?id=1212">Moodle oversikt</a>

    </section>
    </div>
    
    <div class="rightMargin"></div>
    <div class="leftMargin"></div>

    <div class="footer">latest update: 19.09.2025</div>
    `;

    app.innerHTML = html;
}

function createButtonsHtml(){
    let html = ``;
    for (let i = 0; i < btnArray.length; i++){
        html += `
        <button>${btnArray[i]}</button>
        `;
    }
    return html;
}

function falsyHtml(){
    let html = `
    <section>
    which values are 'falsy', or evaluate to false when checked as a condition?
    <ul>
        <li>'0'</li>
        <li>empty strings like ' '</li>
        <li>'null', which represents when there is no value at all</li>
        <li>'undefined', which reperesents when a declared variable lacks a value</li>
        <li>'NaN', or Not a Number</li>
    </ul>
    </section>
    `;
    content = html;
    updateView();
}

function ifElseHtml(){
    let html =`
    <section>
    <p>
    Man kan også bruke if/else i variablene. <br>
    Det vil si: <br>
    <span>
    let currentTool = 'key';<br>
    let tool = currentTool || 'standard tool' </span><br>
    ^her er tool 'key', men hvis currentTool ikke hadde en verdi/hadde en 'falsy' verdi, så er tool 'standard tool'.</p>
    <p>
    <br> Litt som <b>ternary operators</b>! if/else:
    <span>
    <br>let isNight = true;
    <br>isNight ? console.log('it is night') : console.log('it is not night')
    </span>
    </p>
    </section>
    <section>
    <p>
    En annen måte å skrive if/else på: <br>
    <span>
    let place = 'third';
    <br>switch(place)
    <br>case 'first':
    <br>console.log('first place');
    <br>break;
    <br>case 'second':
    <br>console.log('second place');
    <br>break;
    <br>case 'third':
    <br>console.log('third place');
    <br>break;
    <br>default:
    <br>console.log('no place');
    <br>break;
    </span>
    <br>personlig ser jeg ikke helt poenget, kanskje lettere å skrive en if/else. Men er vel en grunn til at vi ikke har lært om dette i moodle?
    </p>
    </section>
    `;
    content = html;
    updateView();
}

function funksjonerHtml(){
    let html = `
    <section>
    <b>litt om funskjoner</b><br>
    <p>
    En funskjon kan forkortes med <span>funskjonforkortelse()=>{}</span> <br>
    dvs: <br> <span>
    const evaluateTime = function(parameter) => {console.log()}
    </span> <br>
    eller noe lignende. Kan gå tilbake og skrive flere notater om det.
    </p>
    </section>
    `;
    content = html;
    updateView();
}

function scopeBlockHtml(){
    let html = `
    <section>
    <b>scope and blocks</b>
    <p>
    <span>block:</span> exists in a function or in an if/else statement - found inside curly brackets {}.<br>
    
    </p>
    </section>
    `;
    return html;
}

function gridsHtml(){
    let html = `
    <section>
    <b>responsive web-design</b> <br>
    <p>
    vh = view hight<br>
    vw = view width<br>
    sett body til 0 på padding og margin - den har en automatisk value <br>
    Så kan du sette view hight og width til 100. <br>
    </p>
    
    <p> 
    <span>grid-template-areas:</span> (til container) <br>
    <span>grid-area:</span> (til barna) <br>
    eksempel: <br> 
    <span> 
    grid template areas: 'header header' 'menu mainContent' 'menu footer'; </span><br>
    denne lager tre rader - en med bare header, en med menu og mainContent, og en med menu og footer. 
    Nå deler den alt helt likt. <br>
    For å bestemme hvordan det skal se ut og hvor mye plass: <br>
    <span>
    grid-template-columns: 1fr 3fr; <br>
    grid-template-rows: 1fr 10fr 1fr; </span><br> 
    note: fordi grid areas har 2 elementer i hver rad og 3 rader, så har 
    man 2 column fractions og 3 row fractions. <br>
    Man kan bruke pixel og fractions i samme linje her. altså: <br>
    <span>
    grid-template-columns: 200px 1fr; <br>
    grid-template-rows: 20px 10fr 20px; <br> 
    </span>

    Videre så kan man bruke media-tag. <br>
    - den skal helst være nederst i CSS, alt over er default. <br>
    eksempel: <br>
    <span>
    @media only screen and (max-width: 600 px){ <br>
    div.container { <br>
        grid-template-columns: 1fr; <br>
        grid-template-rows: 20px 1fr 4fr 20px; <br>
        grid-template-areas:    'header' <br>
                                'menu' <br>
                                'mainContent'<br>
                                'footer'; <br>
    }}<br>
    </span>
    note: bare en fr i columns fordi man nå har bare en dings i areas pr rad når den blir under 600px.
    </p>

    <!-- <button onclick="showImage()">se et screenshot av eksempel</button> -->
    <div class="popup"><img src="bilder/screenshot-grids.png" alt="screenshot-grids" width="300"></div>
    </section>
    <section class="flexExample">
        <div class="gridDiv" style="flex-grow: 10;">Here is a div</div>
        <div class="gridDiv" style="flex-grow: 1;">Here is a div</div>
        <div class="gridDiv" style="flex-grow: 1;">Here is a div</div>
        <div class="gridDiv" style="flex-grow: 1;">Here is a div</div>

    </section>
    <section class="gridExample">
        <div class="gridDiv">Here is a div</div>
        <div class="gridDiv">Here is a div</div>
        <div class="gridDiv">Here is a div</div>
        <div class="gridDiv">Here is a div</div>
    </section>
    `;
    content = html;
    updateView();
}