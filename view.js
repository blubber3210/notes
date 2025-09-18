const app = document.getElementById("app");

updateView();
function updateView(){
    let html =/*HTML*/ `
    <div class="header"><h1>notes</h1></div>
    <div></div>
    <div class="menu">
    <b>menu:</b><br>

    <button onclick="falsyHtml()">falsy/truthy</button><br>
    <button onclick="ifElseHtml()">if/else etc</button><br>
    <button onclick="funksjonerHtml()">functions</button><br>
    <button onclick="clearContent()">clear</button><br>
    </div> 
    <div class="mainContent">
    
    <div>${content}</div>

    <div class="activeNotes">
    ${scopeBlockHtml()}
    ${gridsHtml()}
    </div>

    <section>
    <b>links</b><br>
    <a href="https://getacademy.moodlecloud.com/mod/wiki/view.php?id=1212">Moodle oversikt</a>

    </section>
    </div>
    

    <div class="footer"></div>
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
    <b>flex</b> <br>
        <p>
            flex: wrap, direction, justify-content. align-items: stretch (!! den kunne jeg brukt)
        </p>
        <p></p> 
        <p></p>

        <p><b>grid</b></p>
        <p>
        
        </p>
        <p></p> 
        <p></p> 
    

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
    return html;
}