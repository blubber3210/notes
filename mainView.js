const app = document.getElementById("app");


updateView();
function updateView(){
    let content = ``

    if (model.app.currentPage == 'jsPage'){
        content = drawJSView();
    } else if (model.app.currentPage == 'cSharpPage'){
        content = drawCSharpPage();
    } else if (model.app.currentPage == 'homePage'){
        content = drawHomePage();
    } else if (model.app.currentPage == 'updateNotesPage'){
        content = drawUpdatesPage();
    } else {
        content = 'something went wrong';
    }

    app.innerHTML = `
    <div class="header">${drawHeader()}</div>
    
    ${content}
    
    <div class="footer">${drawFooter()}</div>
    `; 
}

function drawHeader(){
    let html = `<div class="header"><h1>cheatsheet</h1></div>
    <button onclick="changePage('homePage')">home</button>
    <button onclick="changePage('jsPage')">javascript</button>
    <button onclick="changePage('cSharpPage')">c#</button>
    <button onclick="changePage('updateNotesPage')">update log</button>
    
    `;

    return html;
}

function drawFooter(){
    let html = `latest update: 20.11.2025 by Lidus`;

    return html;
}

function drawHomePage(){
    let html = `homePage (not at all finished) <br>
    - navigate to notes via buttons above <br>
    - updates in update log
    `;

    return html;
}