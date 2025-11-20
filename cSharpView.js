
function drawCSharpPage(){
    let html = /*HTML*/`
    <div class="menu">
    <b>examples</b><br>
    <button onclick="">incoming</button><br>

    <br>
    <b>codeAcademy:</b><br>
    <button onclick="">incoming</button><br>
    <button onclick="">incoming</button><br>
    
    <br>
    <b>skillShare:</b> <br>
    <button>incoming</button> <br>
    <br>
    <b>Moodle:</b> <br>
    <button onclick="">incoming</button><br>
    <br>
    <b>-</b><br>
    <button onclick="clearContent()">clear</button><br>
    </div> 
    <div class="mainContent">
    
    <div>${content}</div>

    <div class="activeNotes">
    <section>
    hay que hacer la tarea y llenar esta pagina con algo sobre c#
    </section>
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

// ASCII RANGES (IMPORTANT PARTS)

// Digits 0–9:

// '0' is 48

// '1' is 49

// ...

// '9' is 57

// Uppercase letters A–Z:

// 'A' is 65

// 'B' is 66

// ...

// 'Z' is 90

// Lowercase letters a–z:

// 'a' is 97

// 'b' is 98

// ...

// 'z' is 122

// Because these ranges are continuous, you can check type like this: