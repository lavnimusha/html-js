const people = [
    {name: "lavanya", year: 1990},
    {name: "kartik", year: 1988},
    {name: "sairam", year: 1985},
    {name: "ramya", year: 1999},
    {name: "sweetu", year: 2001}
];
/*const people = [
    {name: "lavanya", year: 2001},
    {name: "kartik", year: 2001},
    {name: "sairam", year: 2001},
    {name: "ramya", year: 2001},
    {name: "sweetu", year: 2001}
];*/
const comments = [
{text: "hey hi", id: 523423},
{text: "super good", id: 823423},
{text: "you are the best", id: 203423},
{text: "Ramen in my fav food ever", id: 123523},
{text: "Nice Nice Nice", id: 54238}
]

//1). Is atleast one 19 years old
    var current_year = new Date().getFullYear();
    people.some((person)=>{
            if(((current_year)-(person.year)) === 19){
                console.log(person);
                return true;
            }
    });

//2. Is every one 19?
const result = people.every((person)=>{
    if(((current_year)-(person.year)) != 19){
        return false;
    }
    return true; 
});
console.log(result);

//3. find with particular id

const find_res = comments.find((item)=>{return (item.id===54238)});
console.log(find_res);

//4. findIndex with particular id

const findindx_res = comments.findIndex((item)=>{return (item.id===54238)});
comments.splice(findindx_res);
//delete comments[findindx_res];
console.log(comments);