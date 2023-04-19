let columns = 0, rows = 0;
const wrapper = document.getElementById("tiles");
// wrapper.innerHTML = "";
// let columns = Math.floor(document.body.clientWidth / 50),
// rows = Math.floor(document.body.clientHeight / 50);
// wrapper.style.setProperty("--columns", columns);
// wrapper.style.setProperty("--rows", rows);



const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add('tile');
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) =>{
        wrapper.appendChild(createTile(index));
    })
}


createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
}

window.onresize = () => createGrid();

onload = () =>{
    var tiles = document.getElementsByClassName("tile");
    var i = 0;       

    function myLoop() {       
        setTimeout(function() {   
            var max = (columns * rows) - 1;
            const min = 0;
            randomNum = Math.floor(Math.random() * (max - min + 1) + min)
            randomNum2 = Math.floor(Math.random() * (max - min + 1) + min)
            randomNum3 = Math.floor(Math.random() * (max - min + 1) + min)
            randomNum4 = Math.floor(Math.random() * (max - min + 1) + min)
            randomNum5 = Math.floor(Math.random() * (max - min + 1) + min)
            tiles[randomNum].style.outline = "1px solid gold";  
            tiles[randomNum2].style.outline = "1px solid gold";
            tiles[randomNum3].style.outline = "none";
            tiles[randomNum4].style.outline = "none";  
            tiles[randomNum5].style.outline = "none";   
            i++;                
            if (i > 0) {           
                myLoop();           
            }                       
        }, 30)
    }       
    myLoop(); 
}

createGrid();