function nameChange(){
	var name=prompt("What is your name?", "Enter FIRST and LAST name");
	var newName=name+"ski!";
	var redName= newName.fontsize(7).fontcolor("red").italics().bold();
	if (name ==="" || name==="Enter FIRST and LAST name"){
		alert ("Please enter a name!")
			document.getElementById("poname").innerHTML = "TRY AGAIN!";
			document.body.style.backgroundColor = ("red");
		} else {
			document.body.style.backgroundColor = ("#b3e6ff");
			document.getElementById("pname").innerHTML = "Your Polish Name is... ";
			document.getElementById("poname").innerHTML = redName;
			document.getElementById("poname").style.textDecoration = "underline blue";
			// alert ("Your polish name is "+ newName);
		}
}
