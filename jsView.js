

function drawJSView(){
    let html =/*HTML*/ `
    <div></div>
    <div class="menu">
    <b>examples</b><br>
    <button onclick="fontsExampleHtml()">fonts</button><br>

    <br>
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
    <button onclick="stringMethodsHtml()">string methods</button><br>
    <button onclick="dataTypeHtml()">datatyper og<br>operatorer</button><br>
    <br>
    <b>-</b><br>
    <button onclick="clearContent()">clear</button><br>
    </div> 
    <div class="mainContent">
    
    <div>${content}</div>

    <div class="activeNotes">

    ${scopeHtml()}

    </div>


    <section>
    <b>links</b><br>
    <a href="https://getacademy.moodlecloud.com/mod/wiki/view.php?id=1212">Moodle oversikt</a>
    </section>
    </div>

    
    <div class="rightMargin"></div>
    <div class="leftMargin"></div>

    
    `;

    return html;
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

function scopeHtml(){
    let html = `
    <section>
    <b>Scope</b>
    <p>
    There are three types of scope: <br>
    <li>global scope</li>
    <li>function scope</li>
    <li>block scope</li>
    </p>
    <p>
    <b>Global: </b>Var, let and const are all global if declared outside of a block. Global variables can be accessed from anywhere in a JS program. <br>
    <br>
    <b>Function: </b> Each function has their own scope. Variables defined <i>inside</i> a function are not accessible from outside the function. (Derfor kan man bruke html igjen og igjen som i denne koden). Var, let and const all have function scope when declared inside a function. <br>
    Local variables has function scope: <br>
    - can only be accessed from within the function <br>
    - no scripts or functions outside the function can access them <br>
    - variables with the same name can be used outside the function <br>
    - variables with the same name can be used in different functions <br>
    - local variables are created when a function starts <br>
    - local variables are deleted when the function is completed <br>
    - arguments (parameters) work as local variables inside functions <br>
    <br>
    <b>Block:</b> <br>
    Did not exist before ES6. <br>
    ES6 introduced two new keywords: <span>let</span> and <span>const.</span> <br>
    <span>let</span> and <span>const</span> provide <b> Block Scope </b>. <br>
    Variables declared with <span>let</span> and <span>const</span> inside a code block are
    "block-scoped," meaning they are only accessibles within that block. <br>
    This hels prevent unintended variable overwrites and promotes better code organization. <br>
    Variables declare dwith <span>var</span> keyword cna NOT have block scope. <br>
    They can be accessed from outside the block.
    
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

function fontsExampleHtml(){
    let html = `
    <section>
    <b>different font examples</b><br><br>
    <li><span class="font1">'Courier New', Courier, monospace</span><br>
    <li><span class="font2">'Franklin Gothic Medium','Arial Narrow', Arial, sans-serif </span><br>
    <li><span class="font3">'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif</span><br>
    <li><span class="font4">'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif</span><br>
    <li><span class="font5">'Segoe UI', Tahoma, Geneva, Verdana, sans-serif</span><br>
    <li><span class="font6">'Times New Roman', Times, serif</span><br>
    <li><span class="font7">'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif</span><br>
    <li><span class="font8">Arial, Helvetica, sans-serif</span><br>
    <li><span class="font9">Cambria, Cochin, Georgia, Times, 'Times New Roman', serif</span><br>
    <li><span class="font10">Georgia, 'Times New Roman', Times, serif</span><br>
    <li><span class="font11">Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif</span><br>
    <li><span class="font12">Verdana, Geneva, Tahoma, sans-serif</span><br>
    <li><span class="font13">cursive</span><br>
    <li><span class="font14">fantasy</span><br>
    <li><span class="font15">monospace</span><br>
    <li><span class="font16">sans-serif</span><br>
    <li><span class="font17">serif</span><br>
    
    </section>
    `;

    content =  html;
    updateView();
}

function dataTypeHtml(){
    let html = /*HTML*/`
    <section>
    <b>datatyper og operatorer:</b><br>
    seksjoner inneholder notater fra youtube videoene i moodle oversikt.
    </section>
    
    <!-- DEL EN -->
    <section>
    <a href="https://www.youtube.com/watch?v=96SynAWVNeI&t=1s">YT: Del 1 Datatypen heltall ogo operatorer</a><br>
    <br><b>heltall:</b> -3, -2, -1, 0, 1, 2, 3 osv<br>
    <br>
    <b>aritmatiske operatorer:</b>
    <li>addisjon: <b>+</b></li>
    <li>subtraksjon: <b>-</b></li>
    <li>multiplikasjon: <b>*</b></li>
    <li>divisjon: <b>/</b></li>
    <li>øke med 1: <b>++</b></li>
    <li>redusere med 1: <b>--</b></li> <br>
    <b>eksempel1:</b><br>
    <span>
    let a = 0; <br>
    a + 2 // a er nå 2 <br>
    a++ // a er nå 3 <br>
    </span> <br>
    <b>eksempel2:</b> (ikke klart) <br> <!-- ikke ordnet -->
    <input type="number" onchange="setNum1(this.value)">
    <select id="operators">
    <option value="+" onchange="setOperator('+')">+</option>
    <option value="-" onchange="setOperator('-')">-</option>
    <option value="*" onchange="setOperator('*')">*</option>
    <option value="/" onchange="setOperator('/')">/</option>
    </select>
    <input type="number" onchange="setNum2(this.value)">
    <button onclick="calculateNums()">=</button> ${operatorResult} <br>

    <b>tilordningsoperatører:</b> (pluss/minus/gange erlik seg selv.)<br>
    <b>
    <li>=</li>
    <li>+=</li>
    <li>-=</li>
    <li>*=</li>
    <li>/*</li> 
    <br>
    eksempel1: </b><br>
    <span>
    let a = 5; <br>
    a *= 5; // a er nå 25 <br>
    a = a * 5 // en annen måte å skrive det på
    </span> <br> <br>
    <b>eksempel2:</b> (ikke klart) <br>
    let a = 100; a += <input type="number">; ?
    </section>
    
    
    <!-- DEL 2 -->
    <section>
    <a href="https://www.youtube.com/watch?v=GFQVMvXJD0M">YT: Del 3 -konvertere tall og tekst </a><br>
    <br>
    <b>Konvertere fra tekst til tall</b> <br> 
    Eksempel - plusse tekst og tall sammen <br> 
    <span>
    let x = 5; // typeof x er nummer <br>
    x += "55"; // x har nå verdien 555 og er av type string <br>
    let z = 2 + 4 + "9"; // z er nå "69" <br>
    </span> <br>
    <b>Konvertere tekst fra input til tall via parseInt()</b><br>
    <span>
    let a = "55"; <br>
    let b = "45"; // a og b er av type string <br> 
    <br>
    a = parseInt(a); // konverterer string "55" til tall 55 <br>
    b = Number(b); // annen måte <br>
    <br>
    console.log(typeof a, typeof b, a + b); // number number 100; <br>
    </span>
    <br>
    <b>Konvertere fra tall til tekst</b><br>
    <span>
    let a = 15; <br>
    let b = a.toString(); // konverterer til string<br>
    let c = 15 + ""; // Kan også brukes, en annen måte bare<br>
    console.log(typeof b); // string <br>
    console.log(typeof c); // string <br>
    </span>
    <br>
    </section>

    <!-- DEL 3 -->
    <section>
    <a href="https://www.youtube.com/watch?v=QSXZznQAkrk&t=1s">YT: Del 4 Undefined og Sammenlignings-operator</a> <br>
    undefined: <br>
    variabler deklarert uten verdi få primitive verdien 'undefined'
    <br>
    <span>
    let x; // typeof x er undefined <br>
    x = 5; // typeof x er number <br>
    <br>
    function getType(a, b){<br>
        console.log(typeof a, typeof b);<br>
    }<br>
    <br>
    getType(5); // logger: number undefined <br>
    </span>fordi den bare bruker ett av parameterene a og b i funksjonen <br>
    <span>
    getType(5, "5"); // logger: number string <br>
    </span>
    <br>
    <b>Strenge sammenlignsoperatorer === og !==</b><br>
    Vanlige sammenlignsoperatorer (== og !=) vil alltid prøve å konvertere og sammenligne med hverandre <br>
    Strenge sammenlignsoperatorer (=== og !==) vil alltid sjekke både datatype og verdi <br>
    <b>streng sjekking:</b> <br>
    <span>console.log(2 === '2') // false</span> <br>
    <b>vanlig sjekking:</b> <br>
    <span>console.log(2 == '2') // true</span> <br>
    </section>
    `;

    content = html;
    updateView();
}

function stringMethodsHtml(){
    let html = /*HTML*/`<section>
    <b>string metoder (fra moodle):</b> <br>
    man kaller på string metoder ved å skrive: <span>navnPåvVariabel.stringMetode</span> <br>
    Variabelet man kaller på må være type string. <br>
    <br> <!-- ------------------------------------------>
    
    <b>charAt()</b> <br>
    henter ut bokstaven/tegnet på en gitt indeks. <br>
    <span>
    let firstName = 'Terje'; <br>
    firstName.charAt(0) </span>// henter ut bokstav på index 0, altså T.<br>
    Lest slik: firstName sin character på index 0 er T <br>
    <br> <!-- ------------------------------------------>
    
    <b>indexOf()</b> <br>
    henter ut index til en gitt character som finnes i stringen. Man kan søke etter en match
    bestående av en eller flere tegn. <br>
    <span>
    let firstName = 'Terje'; <br>
    firstName.indexOf('e'); </span> // returnerer 1 <br>
    <span>
    let text = 'Terje is cool'; <br>
    text.indexOf('is'); </span> // returnerer 6 <br>
    hvis indexOf() ikke finner stringen/tegnet man leter etter returnerer den -1.<br>
    <br><!-- ------------------------------------------>
    
    <b>substring()</b> <br>
    henter ut en del av en string. <br>
    forventer <i> to </i> parametre: startindex og sluttindex av stringen man vil hente ut. <br>
    F eks: Vi vil ha første navnet. Setningen er alltid "Navn is cool", derfor henter vi index til "is" <br>
    <span>
    let text = 'Terje is cool'; <br>
    let indexOfIs = text.indexOf('is'); </span>
    // henter index til is<br>
    <span>
    text.substring(0,indexOfIs); 
    </span>
    // 0: start av substring, indexOfIs: slutt av substring. <br>
    <span>
    </span>
    substring() aksepterer også kun ett parameter hvis vi ønsker å hente ut sluttparten av en string <br>
    Da starter den på gitt index. <br>
    <span>text.substring(indexOfIs) 
    </span>    // gir 'is cool'</span> <br>
    <br><!-- ------------------------------------------>

    <b>slice()</b> <br>
    lik substring, men at man kan bruke negative tall som parameter. <br>
    Bruker man negative tall, starter den bakerst i string og teller nedover. <br>
    f eks: <br>
    <span>
    let text = 'Terje is cool'; <br>
    text.slice(-4); </span> // Henter ut index 4 fra bakerst i stringen, altså 'cool' <br>
    <br><!-- ------------------------------------------>

    <b>replace()</b> <br>
    bytter noe i en tekst-string med noe annet. <br>
    <span>
    let text = 'Terje is cool'; <br>
    newText = text.replace('Terje', 'Marie'); <br>
    console.log(text); // Har verdien 'Terje is cool' <br>
    console.log(newText); // Har verdien 'Marie is cool' <br>
    </span>
    I eksempelet over beholder man det originale variabelet 'text' og lagrer den endrede verdien
    i det nye variabelet 'newText' <br>
    Hvis man vil endre på selve verdien i variabelet gjør man: <br>
    <span>
    text = text.replace('Terje', 'Marie'); <br>
    </span> 
    note: replace() erstatter <i>kun</i> første treff den finner. Dersom text var 'Terje is cool Terje', 
    blir resultatet 'Marie is cool Terje'. Hvis man vil erstatte alle kan man bruke <br>
    <b>replaceAll()</b><br>
    <br><!-- ------------------------------------------>


    <b>toUpperCase()</b> <br>
    skifter alle bokstaver til stor: <br>
    <span>
    let text = 'Terje is cool'; <br>
    text = text.toUpperCase(); </span> // Resultat: 'TERJE IS COOL' <br>
    <br><!-- ------------------------------------------>

    <b>toLowerCase()</b> <br>
    motsatt - > <br>
    <span>
    let text = 'Terje is cool'; <br>
    text = text.toLowerCase(); </span> // Resultat: 'terje is cool' <br>
    <br><!-- ------------------------------------------>

    <b>split()</b> <br>
    Deler opp en string i nye elementer som legges i en array []. Trenger et parameter som
    skal tolkes som oppdeler/slutten på hvert element. f eks <br>
    - mellomrom lager array med ord <br>
    - punktum lager array med setninger <br>
    - parameteret kan være hva som helst <br>
    eksempel: <br>
    <span>
    let text = 'Terje is cool'; <br>
    words = text.split(' '); // parameteret er et mellomrom <br>
    <br>
    words = ['Terje', 'is', 'cool']; <br>
    words[0] = 'Terje' <br>
    words[1] = 'is' <br>
    words[2] = 'cool' <br>
    </span>
    <br>
    eksempel på splitting i lengre elementer: <br>
    <span>
    let text = 'Terje is cool, Linn is awesome'; <br>
    sentences = text.split(','); // parameteret er komma <br>
    <br>
    sentences = ['Terje is cool', 'Linn is awesome']; <br>
    sentences[0] = 'Terje is cool'; <br>
    sentences[1] = 'Linn is awesome'; <br>
    </span>
    <br><!-- ------------------------------------------>

    <b>trim()</b> <br>
    Fjerner alle 'whitespaces' (mellomrom) før første tegn + etter siste tegn. <br>
    <span>
    let text = '   Terje is cool   '; <br>
    text = text.trim() // resultat er 'Terje is cool'<br>
    </span> 
    <br><!-- ------------------------------------------>


    </section>
    <section>diverse andre string metoder</section>

    <section>
    lyst til å lage en interaktiv dings her med en tekstboks og output
    <div class="textbox">${stringExample}</div>
    <div class="textboxButtons">
    <button class="otherButtons" onclick="changeTextUppercase()">text.toUpperCase()</button>
    <button class="otherButtons" onclick="changeTextLowercase()">text.toLowerCase()</button>
    </div>
    kanskje en sånn "hent ut string" boks som i YT del 3.
    </section>
    
    
    `;

    content = html;
    updateView();
}
