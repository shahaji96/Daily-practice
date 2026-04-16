/*let n=0
for(i=1;i<=40;i++)
{
    if(i%2==0 && i%5==0)
    {
        n++
        console.log(i)
        if(n==3)
        break
    }
}
 let i=2;
  do{
    console.log(i)
    i=i+2;
  } while(i<=10); 
    

const person=
{ Name:"shahaji",
  adress:"Pune",
  pin:415523

}
//Access object property
console.log(person["Name"])
console.log(person.adress);
//Add new property in existing object
//person["weight"]=60;
person.weight=60;
console.log(person["weight"]);
//Remove the property from the object
//delete person.adress;
delete person["adress"];
console.log(person);

function addno(a,b)
{
    return (a+b);
}
 let res=addno(1030,234);
 console.log(res);*/

 //for in loop
 const person=
{ Name:"shahaji",
  adress:"Pune",
  pin:415523
}
 for(let x in person)
 {
   console.log(x);
 }
