/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let ticketPrice = 800;
const age = 8;
if(age < 10){
    console.log("Free ticket for childrens.");
}
else if(age >= 10 && age < 30){
    const discount = ticketPrice * (50/100);
    ticketPrice = ticketPrice - discount;
    console.log("Student's ticket price is: "+ ticketPrice);
}
else if(age >= 60){
    const discount = ticketPrice * (15/100);
    ticketPrice = ticketPrice - discount;
    console.log("Senior citizen's ticket price is: "+ ticketPrice);
}
else{
    console.log("Regular ticket price is: "+ ticketPrice);
}
