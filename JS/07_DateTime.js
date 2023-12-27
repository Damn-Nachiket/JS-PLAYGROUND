const myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(typeof myDate);

const myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

const MyCreatedDate_Time = new Date(2023,0,23,4,5)
console.log(MyCreatedDate_Time.toLocaleString());

const mmddyy = new Date("01-14-2023")
console.log(mmddyy.toLocalString());

const MyTimeStamp = Date.now()
console.log(MyTimeStamp);
console.log(mmddyy.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

 const InterDate = new Date()
 `${InterDate.getDay()} and the time is ${InterDate.toLocaleString()}` //String Interpolation

//Internationalization
newDate.toLocalString('default', {
	weekday: "long",
})