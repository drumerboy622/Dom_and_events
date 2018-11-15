//Author: Matthew Solbrack
//Date: 10/25/2018
//Subject: HW Assignment- DOM and Events, This javascript file will make a table and allow you to explore with 
//buttons. It will change the border and possibly change the background color. 



//Create the 4x4 table
fourByFourTable();

function fourByFourTable() 
{  
    	var table = document.createElement("table"); 
    	var content = document.createElement("tbody");   
     
    	for (var rows = 0; rows < 4; rows++) 
    	{        
        	var row = document.createElement("tr");    
        	for (var columns = 1; columns < 5; columns++) 
		{     
 			var header = document.createElement("th"); 
			var tableData = document.createElement("td"); 
			if (rows == 0) 
			{    
                		var cellText = document.createTextNode("  Header " + columns + "  "); 
                		header.appendChild(cellText);     
				row.appendChild(header);
           		} 
			else 
			{          
                		var cellText = document.createTextNode(rows + " , " + columns);  
                		tableData.appendChild(cellText);     
				row.appendChild(tableData);
            		} 
        	}     
		content.appendChild(row); 
	}   
     
    	table.appendChild(content);
	content.setAttribute("border", "1px");
   	document.body.appendChild(table);  
    	table.setAttribute("border", "2px");
}


buttons();

    	//Resource: https://www.w3schools.com/jsref/met_document_createelement.asp
    	//Create Buttons for Up, Down. Left, Right, and Mark Cell

function buttons() 
{
	//Up Button
    	var btn = document.createElement("BUTTON");
    	var text = document.createTextNode("Up");
    	btn.appendChild(text);
    	document.body.appendChild(btn);
	btn.id = "up";

    	
	//Down Button
    	var btn = document.createElement("BUTTON");
    	var text = document.createTextNode("Down");
    	btn.appendChild(text);
    	document.body.appendChild(btn);
	btn.id = "down";
	
	
	//Left Button
    	var btn = document.createElement("BUTTON");
    	var text = document.createTextNode("Left");
    	btn.appendChild(text);
    	document.body.appendChild(btn);
	btn.id ="left";
	

 	//Right Button
    	var btn = document.createElement("BUTTON");
    	var text = document.createTextNode("Right");
    	btn.appendChild(text);
    	document.body.appendChild(btn);
	btn.id = "right";
	

	//Mark Cell Button
    	var btn = document.createElement("BUTTON");
    	var text = document.createTextNode("Mark Cell");
	btn.appendChild(text);
    	document.body.appendChild(btn);
	btn.id = "change";
}

//Select the first td element
var choose = document.getElementsByTagName("td")[0];
//Give the object a name
choose.id = "selected";
//Give the object an initial Border
choose.style.border = "4px solid black";

function goUp() 
{
	//Create an object
	var choose = document.getElementById("selected");

	//Find out if the selected object can not go up
   	if (choose.parentNode.rowIndex <= 1)
	{ 
		return;
	}
	else
	{
		//find out what cell we are currently on and store it
		//reference: https://www.w3schools.com/jsref/prop_tabledata_cellindex.asp
		var tempColumn = choose.cellIndex;

		//Change the border of the current cell 
		choose.style.border = "1px solid black";

		//Remove the "id" from the selected attribute
		choose.removeAttribute("id");

		//by using the parent/sibling/child nodes find the row up one
		//Reference: https://www.w3schools.com/jsref/prop_node_parentnode.asp
		choose = choose.parentNode;
		choose = choose.previousElementSibling;
		choose = choose.firstElementChild;

		//by using the previous column find the column in the new row
    		for (var count = 0; count < tempColumn; count++) 
		{
        		choose = choose.nextElementSibling;
   		}

		//Change the border
		choose.style.border = "4px solid black";

		//Change the address of the selected object
		choose.id = "selected";
	}
}

function goDown() 
{
	//Create an object
	var choose = document.getElementById("selected"); 
      
	//Find out if the selected object can not go down
	if (choose.parentNode.rowIndex >= 3) 
	{
		return;
    	}
	else 
	{
		//Hold the column number for later on
    		var tempColumn = choose.cellIndex; 

		//Change the border of the current cell 
		choose.style.border = "1px solid black";

		//Remove the "id" from the selected attribute
    		choose.removeAttribute("id");

		//by using the parent/sibling/child nodes find the row down one
		//Reference: https://www.w3schools.com/jsref/prop_node_parentnode.asp
    		choose = choose.parentNode;
    		choose = choose.nextElementSibling;
    		choose = choose.firstElementChild;

		//by using the previous column find the column in the new row
    		for (var count = 0; count < tempColumn; count++) 
		{
        		choose = choose.nextElementSibling;
   		}

		//Change the border
		choose.style.border = "4px solid black";
		
		//Change the address of the selected object
		choose.id = "selected";
	}
}

function goLeft() 
{
	//Create an object
	var choose = document.getElementById("selected"); 

	//Find out if the selected object can not go left
	if (choose.cellIndex == 0)
	{
		return;
	}
	else 
	{
		//Change the border of the current cell 
		choose.style.border = "1px solid black";

		//Remove the "id" from the selected attribute
		choose.removeAttribute("id");

		//by using the parent/sibling/child nodes find the column to the left
		//Reference: https://www.w3schools.com/jsref/prop_node_parentnode.asp
		choose = choose.previousElementSibling;

		//Change the border
		choose.style.border = "4px solid black";

		//Change the address of the selected object
		choose.id = "selected";
    }

}

function goRight() 
{
	//Create an object
	var choose = document.getElementById("selected"); 

	//Find out if the selected object can not go right
	if (choose.cellIndex == 3) 
	{
		return;
	}
	else
	{
		//Change the border of the current cell 
		choose.style.border = "1px solid black";

		//Remove the "id" from the selected attribute
		choose.removeAttribute("id");

		//by using the parent/sibling/child nodes find the column to the right
		//Reference: https://www.w3schools.com/jsref/prop_node_parentnode.asp
		choose = choose.nextElementSibling;

		//Change the border
		choose.style.border = "4px solid black";

		//Change the address of the selected object
		choose.id = "selected";
	}
	
}


//Change the cell to Yellow
function changeYellow() 
{
    	document.getElementById("selected").style.backgroundColor = "yellow";
}



//Actions taken when the buttons are clicked
document.getElementById("up").addEventListener("click", goUp);
document.getElementById("down").addEventListener("click", goDown);
document.getElementById("left").addEventListener("click", goLeft);
document.getElementById("right").addEventListener("click", goRight);
document.getElementById("change").addEventListener("click", changeYellow);
