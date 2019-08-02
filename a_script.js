const innNorma  = 12;
const accNorma	= 20;
const bikNorma	= 9;
const listOfCust= document.querySelector('select');
let allCol	    = document.querySelectorAll('.account');
const emptyCol  = allCol[0];
//
let idObj		= document.querySelector('input[name=id]');
let custNameObj = document.querySelector('input[name=cust_name]');
let innObj 		= document.querySelector('input[name=inn]');
let addressObj  = document.querySelector('input[name=address]');
let accNumber 	= document.getElementsByName('acc_number');
let accName 	= document.getElementsByName('acc_name');
let bik 		= document.getElementsByName('bik');
let balance 	= document.getElementsByName('balance');
//


// -- Getting list of customers
window.addEventListener('load', getList);

function getList() {
	const send = { field: "cust_name", table: "customer" };
	const add = document.createElement("script");
	add.src = "get_list.php?params=" + JSON.stringify(send);
	document.body.appendChild(add);
}

function getList_sub(dataset) {
	let temp, grid = document.getElementById('grid');
	for (i in dataset) {
	  temp += "<option value='" +dataset[i].cust_name +"'>" +dataset[i].cust_name +"</option>";
	}
	listOfCust.innerHTML = "<option>Choose:</option>" + temp;
	grid.style.display = 'block';
}


// ---- Filling the fields ----
listOfCust.addEventListener('change', function() {
	allCol= document.querySelectorAll('.account');
	for (i in allCol) {
		try {	allCol[i].remove() }
		catch { /* not to stop the dance */ }
	}
	const send = { name: this.value };
	const add = document.createElement("script");
	add.src = "filling.php?params=" + JSON.stringify(send);	// result appears after 6 functions above
	document.body.appendChild(add);
});


function filling_sub(dataset) {
	const sect = document.querySelector('section');
	/*
	const upd1 = document.querySelector('.update');
	const del1 = document.querySelector('.del');
	*/
	if (dataset.length === 0) {
		try {
			  idObj.value = "";	custNameObj.value = "";		innObj.value = "";		addressObj.value = "";
			  accNumber[0].value = "";		accName[0].value = "";		bik[0].value = "";		balance[0].value = "";
			  // upd1.style.display = 'none';	 del1.style.display='none';
			}
		catch { console.log('Thrown error as you had selected "Choose:" or a row had been deleted.'); }
		sect.innerHTML   += emptyCol.outerHTML;
		document.getElementsByClassName('update')[0].style.display = 'none';
		document.getElementsByClassName('del')[0].style.display='none';
	}
	else if (dataset.length > 0) {
		for (i in dataset) {
			sect.innerHTML 	  += emptyCol.outerHTML;		// as rows come, so columns are created
		}
		let custId = [];
		const butt_acc	= document.querySelectorAll('.account .buttons');
		const buttons 	= document.querySelectorAll('.buttons');
		idObj		= document.querySelector('input[name=id]');
		custNameObj = document.querySelector('input[name=cust_name]');
		innObj 	 	= document.querySelector('input[name=inn]');
		addressObj  = document.querySelector('input[name=address]');
		
		accNumber 	= document.getElementsByName('acc_number');
		accName 	= document.getElementsByName('acc_name');
		bik 		= document.getElementsByName('bik');
		balance 	= document.getElementsByName('balance');
		// Refreshed fields quantity before filling
		document.querySelector('.update').style.display = 'initial';
		document.querySelector('.del').style.display='initial';
		idObj.value		  = dataset[0].id;
		custNameObj.value = dataset[0].cust_name;
		innObj.value 	  = dataset[0].inn;
		addressObj.value  = dataset[0].address;
		for (i in dataset) {
			custId[i]		   = dataset[i].cust_id;
			accNumber[i].value = dataset[i].acc_number;
			accName[i].value   = dataset[i].acc_name;
			bik[i].value	   = dataset[i].bik;
			balance[i].value   = dataset[i].balance;
		}
			try {
		for (i in buttons) {
				buttons[i].style.display = 'block';
				butt_acc[i].classList = 'buttons acc-0'+i;
		} } catch { console.log('Miscounted buttons quantity'); }
		// Adding Event Listener for new account buttons
		for (i in butt_acc) {		
			butt_acc[i].onmousedown = function(e) {
				const str = e.target.parentNode.className;
				const type = e.target.className;
				const colNum = parseInt(str.substring(str.length-2, str.length));
				account(type, colNum, idObj, accNumber, accName, bik, balance);
			}
		}
	}
}



// ------ Buttons --------
// __account
function account(t, c, idObj, aNu, aNa, bi, bal) {
	idObj = parseInt(idObj.value);
	aNu = parseInt(aNu[c].value);
	aNa = aNa[c].value;
	bi  = parseInt(bi[c].value);
	bal = parseFloat(bal[c].value);
	console.log(t, idObj, '#', aNu, aNa, 'bik:', bi, 'balance:', bal);
	if (t === 'update') {
		// if ( !isNaN(aNu)  &&  !isNaN(bik)  &&  !isNaN(balance) ) {	// toString(aNu).length === accNorma   &&  toString(bik).length === bikNorma 
			const send = { id: idObj, acc_number: aNu, acc_name: aNa, bik: bi, balance: bal };
			const add = document.createElement("script");
			add.src = 'btn_save_acc.php?params=' +JSON.stringify(send);
			document.body.appendChild(add);
		// }	else {alert('Please fill Account correctly')}
	}
	else if (t === 'add') {
		// if ( !isNaN(aNu)  &&  !isNaN(bik)  &&  !isNaN(balance) ) {	// toString(aNu).length === accNorma   &&  toString(bik).length === bikNorma 
			const send = { id: idObj, acc_number: aNu, acc_name: aNa, bik: bi, balance: bal };
			const add = document.createElement("script");
			add.src = 'btn_add_acc.php?params=' +JSON.stringify(send);
			document.body.appendChild(add);
		//}		else {alert('Please fill Account correctly')}
	}
	else if (t === 'del') {
		//if ( toString(aNu).length === accNorma  &&  !isNaN(aNu) ) {
			const send = { acc_number: aNu };
			const add = document.createElement("script");
			add.src = 'btn_del_acc.php?params=' +JSON.stringify(send);
			document.body.appendChild(add);
		// }	else {alert('This account does not exist, please enter 20 digits')}
	}
	else { console.log('No buttons were heard.')}
	getList();
}


// __customer
function updateActC() {
	idObj 	 = document.querySelector('input[name=id]');
	custNameObj = document.querySelector('input[name=cust_name]');
	innObj 	 = document.querySelector('input[name=inn]');
	addressObj = document.querySelector('input[name=address]');
	if (custNameObj.value !== "" && !isNaN(parseInt(innObj.value)) && innObj.value.length === innNorma) {
		const send = { name: custNameObj.value, inn: innObj.value, address: addressObj.value, id: idObj.value };
		try {
			const add = document.createElement("script");
			add.src = "btn_save_cust.php?params=" + JSON.stringify(send);
			document.body.appendChild(add);
			}
		catch { console.log('Got issues in request SAVE (cust)') }
	}
	else { alert('Please fill Customer completely') }
	getList();
}

function addActC() {
	custNameObj = document.querySelector('input[name=cust_name]');
	innObj 		= document.querySelector('input[name=inn]');
	addressObj  = document.querySelector('input[name=address]');
	if (custNameObj.value != "" && !isNaN(parseInt(innObj.value)) && innObj.value.length === innNorma) {
		const send = { name: custNameObj.value, inn: innObj.value, address: addressObj.value };
		try {
			add.src = "btn_new_cust.php?params=" + JSON.stringify(send);
			document.body.appendChild(add);
			}
		catch { console.log('Got issues in request NEW (cust)') }
	} else { alert('Please fill Customer completely') }
	getList();
}

function delActC() {
	idObj = document.querySelector('input[name=id]');
	const send = { id: idObj.value };
	try {
		// let add = document.createElement("script");
		add.src = "btn_del_cust.php?params=" + JSON.stringify(send);
		document.body.appendChild(add);
		}
	catch { console.log('Got issues in request DEL (cust)') }
	idObj.value = "";	custNameObj.value = "";		innObj.value = "";		addressObj.value = "";
	allCol= document.querySelectorAll('.account');
	for (i in allCol) {
		try {	allCol[i].remove() }
		catch { /* not to stop the dance */ }
	}
	getList();
}
