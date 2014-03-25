// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
	var size = 32;
	
  new GameManager(size, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  CreateGridHtml(size);
});

function CreateGridHtml(size){
	var grid = document.getElementById("grid-container");
	for(var i = 0; i <size; i++){
		var row = document.createElement("div");
		row.setAttribute("class","grid-row");
		for(var j = 0;j<size; j++){
			var cell = document.createElement("div");
			cell.setAttribute("class","grid-cell");
			row.appendChild(cell);
		}
		
		grid.appendChild(row);
	}	
	
	var gameContainer = document.getElementById("game-container");
	var width = size * (106.25 + 15) + 20;
	var height = size * (106.25 + 15) + 20;
	gameContainer.setAttribute('style','width:' + width + 'px; height:' + height + 'px;');
	
	var title = document.getElementById("title");
	title.innerHTML = title.innerHTML + " x " + size;
}
