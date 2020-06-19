let obj ={
	name: "lavanya",
	age:'26',
	companies:{
		one:'nomus',
		two:'Aricent'	
	}

};

let cpy_obj = Object.assign({},obj);
let obj1 = JSON.parse(JSON.stringify(obj));
console.log(obj, cpy_obj,obj1);
//cpy_obj.companies.one = "hcl";
obj1.companies.one = "hcl";
console.log(obj, cpy_obj,obj1);


const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep');


let obj2 = clone(obj);

console.log(obj2);
