var investors = [

{first:'Lavanya',last:'nimushakavi',year:1300,passed:1380},
{first:'karthik',last:'nimushakavi',year:1400,passed:1450},
{first:'swathi',last:'venkat',year:1510,passed:1590},
{first:'john',last:'killer',year:1460,passed:1550},
{first:'bob',last:'miller',year:1310,passed:1390},
];

const people = ['abel, king', 'lion, queen', 'sid, brahma','chirashree, banerjee','prasad, poruri','kanth, kanchiraju','alekhya, polapragada','kavitha, kukarni','girija, gurajada','breg, william','sairam, gurajada','biden, joseph'
];

//1. list of investors born before 1500
var beforead =  investors.filter((investor)=>{return(investor.year < 1500)});


//2. give array of first and last names of investors
var firstlast = investors.map((investor)=>{return (investor.first+" "+investor.last)}); 
console.log(firstlast);

//3. Sort inestors by birtdate oldest to youngest
var oldtoyoung = investors.sort((a,b)=>{return (a.year-b.year)}); 
console.log(oldtoyoung);

//4. how may years did all investors live
var noofyears = investors.reduce(function(acc,cur){
//console.log("years lived"+ (cur.passed-cur.year));
	return(acc+(cur.passed-cur.year));

},0); 
console.log("noofyears"+noofyears);

//5. Sort investors by no of years lived
var sortbyage = investors.sort((a,b)=>{return ((a.year-a.passed)-(b.year-b.passed))}); 
console.log(sortbyage);

//6.Sort people alphabetically by last name
var splitarr = people.map((name)=>name.split(","));
var sortbylastname = splitarr.sort((a,b) => {
if (a[1] < b[1]) {
    return -1;
  }
  if (a[1] > b[1]) {
    return 1;
  }

  // names must be equal
  return 0;

}); 
console.log(sortbylastname);


var collection = ['a','b','d','f','g','g','f','d','s','a'];
const reduced = collection.reduce(function(acc,cur){

if(!acc[cur]){
    acc[cur]=0;
}

  acc[cur]++;
return acc;
},{});

console.log(reduced);

