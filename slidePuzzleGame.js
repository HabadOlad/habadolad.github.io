const rows = 3;
const columns = 3;

const currentTile; //references the tile that you click to switch with
const otherTile; //target tile you want to swap with me - the blank tile

const turns = 0; 

//const imageOrder = ["1","2","3","4","5","6","7","8","9"];
const imageOrder = ["4","2","8","5","1","6","7","9","3"]

window.onload = function() { //this populates the image onto the page
  for (let r =0; r < rows; r ++){
      for (let c = 0; c < columns; c++){
        //this creates the image tag
        let tile = document.createElement("img");
        tile.id = r.toString + "-" + c.toString();
        tile.src = imageOrder.shift() + ".jpg"; //this pops the first image off , so the source is 1.jpg then 2/jpg then 3.jpeg etc.

        document.getElementById("board").append(tile);//This line takes the html tag board and inserts it into the html page
      }

  }
}


