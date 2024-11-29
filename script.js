function insert_Row() {

	let tb=document.getElementById("sampleTable");
	
    let tr=document.createElement('tr');
	let td1=document.createElement('td');
	let td2=document.createElement('td');

	let text1=document.createTextNode('New Cell1');
	let text2=document.createTextNode('New Cell2');

	td1.appendChild(text1);
	td2.appendChild(text2);

	tr.appendChild(td1);
	tr.appendChild(td2);

	
  tb.insertAdjacentElement('afterbegin',tr);
}
