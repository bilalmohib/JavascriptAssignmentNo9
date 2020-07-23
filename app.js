//CHAPTER1

// question1
// 1. Write a script to greet your website visitor using JS alert
// box.
//Answer:
// alert("Welcome to the alerts question no 1 solved");
// question1

// question2
// 2. Write a script to display following message on your web
// page:
//Answer:
// alert("Error! Please enter a valid password.");
// question2

// question3
// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
//Answer:
// alert("Welcome to JS Land...\nHappy Coding");
// question3


// question4
// 4. Write a script to display following messages in sequence:
//Answer:
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
// question4


// question5
// 5. Generate the following message through browser’s
// developer console:
//Answer:
// just go to settings and open 'More tools' and then open 'developer tools' 
// and then open console window in developer tools

// console.log(alert("Hello.. I can run JS through my developers console"));
//OR
//Right Click and click inspect and console and type the following
//  alert("Hello.. I can run JS through my developers console");
// question5


// question6
// Make use of alerts in your new/existing HTML & CSS
// project.
// Answer
// I have used the alerts in my recent assignment the link to this is https://shaureducationalcomplexschool.web.app/
// question6

// question7
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
//Answer I have used it in the index.html file attached with it 
// question7

//CHAPTER1

/////////////////////////////////////////////////////////////////////////

//CHAPTER2               VARIABLES FOR STRINGS

// question 1
// 1. Declare a variable called username

//var userName; //Camel Case

// question 1

// question2
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

//var myName = "Muhammad Bilal";

// question2


// question 3


// 3. Write script to
// a) Declare a JS variable, titled message.
//var message;
// b) Assign “Hello World” to variable message
//message = "Hello World";
// c) Display the message in alert box.
// alert(message);
// question 3


//question 4
// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// var name = "Bilal Mohib";
// var age = 19;
// var course="Certified Mobile Application Development";

// alert(name);
// alert(age + " years old");
// alert(course);

//question 4


//question 5
//var All="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(All);
//question 5

//question 6
// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
//var email= "bilalmohib7896@gmail.com";
// alert("My email address is " + email);
//question 6


//question7
// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
//var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book); 
// question7


// question8
//8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JavaScript<br><br>");
// question8


// question9
// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// alert("▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬<br><br>");
// question9


//CHAPTER2

//CHAPTER3 VARIABLES FOR NUMBERS

//question1
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
//var age = 19;
// alert("I am " + age + " years old<br><br>");
//question1

//question2
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// var count = 0;
// check for Navigation Timing API support reference stack overflow
// if (window.performance) {
//     console.info("window.performance works fine on this browser");
//   }
//     if (performance.navigation.type) {
//       alert( "This page is reloaded" );
//       count=count+1;
//     } else {
//       alert( "This page is not reloaded");
//     }
// alert("You have visited this site " + count + " times ");
//question2

//question3
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
//var birthYear = 2001 + "\n";
// document.write("My birth year is " + birthYear  + "<br>Data type of my declared variable is number<br><br>");
//question3

//question4
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// var visitorsName = "Bilal Mohib";
// var productTitle = "T-shirt(s)";
// var quantity = "10";
// document.write(visitorsName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store<br><br>");
//question4



//CHAPTER3 

//CHAPTER4                         VARIABLE NAMES: LEGAL & ILLEGAL
//question1
// 1. Declare 3 variables in one statement
// var varOne,varTwo,varThree;
//question1

//question2
// 2. Declare 5 legal & 5 illegal variable names.
//Legal variables
// var car;
// var bus_no;
// var school_2
// var z;
// var varName;
//Illegal variables
//any key word is illegal for var and starting with number using symbols like #,$ or % is illegal
// var var;
// var 2car;
// var this;
// var Any_any%No$;
// var ^thisvar;
//question2

//question3
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// var head="Rules for naming JS variables";
// var contain1="numbers",contain2="$",contain3="_",contain4="letter",contain5="keywords";
// var caseCondition = "sensitive";
// document.write(head.bold()+ "<br><br><br>Variable names can only contain " + contain1 + ","
//  + contain2 +" and "+contain3+" For example $my_1stVariable<br>"+
// "Variables must begin with a "+contain4+" "+contain2+" or " + contain3+"."+
// "For example $name, _name or name<br>Variable names are case "+caseCondition+ "<br>"+ 
// "Variable names should not be JS "+contain5<br>+"<br></br>");
//question3

//CHAPTER4

//CHAPTER5                   MATH EXPRESSIONS
// question1
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var num1=2;
// var num2=4;
// var sum;
// sum=num1 +num2;
// document.write("Sum of "+num1+" and "+num2+" is "+" "+sum+"<br>");
// question1

// question2
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
// var num1=100;
// var num2=76;
// var sub;
// sub=num1 - num2;
// document.write("DIFFERRENCE of "+num1+" and "+num2+" is "+sub+"<br>");
// multiplication
// var num1=120;
// var num2=3;
// var mul;
// mul=num1 * num2;
// document.write("Product of "+num1+" and "+num2+" is "+mul+"<br>");

// division
// var num1=120;
// var num2=3;
// var div;
// div=num1 / num2;
// document.write("Division of "+num1+" by "+num2+" is "+div+"<br>");

//modulus
// var num1=12;
// var num2=3;
// var modulus;
// modulus=num1 / num2;
// document.write("Reminder of "+num1+" divided by "+num2+" is "+modulus+"<br>");

// question2


//question3
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
//var anyVariable;

// b. Show the value of variable in your browser like “Value

// after variable declaration is: ??”.
// document.write("<br>Value after variable declaration is: "+anyVariable); 
// c. Initialize the variable with some number.
//anyVariable=5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// document.write("<br>Initial value is: "+anyVariable); 
// e. Increment the variable.
//anyVariable++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// document.write("<br>Value after increment is: "+anyVariable);
// g. Add 7 to the variable.
// anyVariable=anyVariable+7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// document.write("<br>Value after addition is: "+anyVariable);
// i. Decrement the variable.
// anyVariable--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// document.write("<br>Value after decrement is: "+anyVariable);
// k. Show the remainder after dividing the variable’s value
// by 3.
// var remainder=anyVariable%3;
// l. Output : “The remainder is : 0”.
// document.write("<br>The remainder is: "+remainder+"<br>");
//question3


//question4
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output
// var ticketPrice = 600;
// var cost=ticketPrice*5;
// document.write("Total cost to buy 5 tickets for a movie is "+ cost+"PKR<br>");
//question4

//question5
// 5. Write a script to display multiplication table of any
// number in your browser;
// var num=9;
// var head="Table of nine is";
// document.write(head.bold());
// for(var i=1;i<=10;i++)
// {
//     var tab=num*i;
//     document.write("<br>"+(num)+" x "+(i)+" = "+tab);
// }
//question5

//question6
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// var TemperatureCelsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//var TemperatureFahrenheit=(TemperatureCelsius*(9/5)+32);
// document.write("<br><br>"+TemperatureCelsius+"°C is "+TemperatureFahrenheit+"°F");
// c. Now store a Fahrenheit temperature into a variable.
//TemperatureFahrenheit=100;
// d. Convert it to Celsius & output “NNoF is NNoC”.
//TemperatureCelsius=(TemperatureFahrenheit-32)*(5/9);
// document.write("<br>"+TemperatureFahrenheit+"°F is "+TemperatureCelsius+" °F");

//question6

// question7
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// var priceItem1=650;
// b. Price of item 2
//var priceItem2=100;
// c. Ordered quantity of item 1
//var QuanItem1=3;
// d. Ordered Quantity of item 2
//var QuanItem2=7;
// e. Shipping charges
// var shippingCharges = 100;
// var totalCost=(priceItem1*QuanItem1)+(priceItem2*QuanItem2)+shippingCharges;
// Compute the total cost & show the receipt in your browser.
// document.write("<br><br>Total cost of your order is "+totalCost);
// question7

// question8
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// var totalMarks=916;
// var obtainedMarks=1100;
// var percentage = (totalMarks/obtainedMarks)*100;
// document.write("<br><br><br>Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"%<br><br><br>");
// question8


// question9
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//var name="Currency in PKR";
// document.write(name.bold());
// var USD=10;
// var SR=25;
// var RS=(USD*104.80)+(SR*28);
// document.write("<br>Total currency in PKR is: "+RS);
// question9


// question10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// var num=4;
// a. Add 5
// num=((num+5)*10)/2;
// b. Multiply by 10;
// c. Divide the result by 2
// document.write("<br><br>The result is "+ num+"<br><br>");
// Perform all calculations in a single expression
// question10

// question11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// var currentYear=2020;
// var birthYear=2001;
// var Age=currentYear-birthYear;
// document.write("<br><br>Current Year is = "+currentYear+"<br>");
// document.write("Birth Year is = "+birthYear+"<br>");
// document.write("Your Age is = "+Age+"<br>");

// question11



// question12
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// var radius=20.0;
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// var circum=(2.0*3.142*radius);
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var Area=(3.142*(20*20));
// document.write("<br><br>Circumference of circle is:"+circum);
// document.write("<br>Radius of circle is: "+radius+"<br>");
// document.write("Area of circle is: "+Area+"<br><br>");
// question12

// question13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// var favoriteSnack="chocolateChip";
// var currentAge=19;
// var estimatedMaxAge=65;
// var amountPerDay=1;
// var estimatedEat=(estimatedMaxAge-currentAge)*amountPerDay*365;
// document.write("<br><br>You will need "+estimatedEat + " to last you until the ripe old age of "
// +estimatedMaxAge);

// question13




//CHAPTER5
 
//Chapter 6-9                         MATH EXPRESSIONS

//question1
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var a=10;
// document.write("<br><br>The value of a is: "+a)
//++a;
// document.write("<br>The value of ++a is: "+a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of a++ is: "+ a++);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of --a is: "+ --a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of a-- is: "+ a--);
// document.write("<br>Now the value of a is: "+a+"<br><br>");
//question1

//question2
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
//At --a it is 1 because the value is 1
// --a - --b;
// At this stage b is 0 so --a - --b=1;
// --a - --b + ++b = 1 - 0 + 0=2;
// --a - --b + ++b + b--=;
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("result is "+result+"<br>");
//question2

//question3
// 3. Write a program that takes input a name from user &
// greet the user.
// var name=prompt("Whats your name?");
// alert("Your name is "+name);
//question3


//question4
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// var num=prompt("Enter a number: ");
// var num1=5;
// var mul;
// if(!num)
// {
//     for(var i=1;i<=10;i++)
//     {
//         mul=num1*i;
//         document.write(num1+" x "+i+" = "+mul+"<br>");
//     }
// }
// else
// {
//     for(var i=1;i<=10;i++)
//     {
//         mul=num*i;
//         document.write(num+" x "+i+" = "+mul+"<br>");
//     }
// }
//question4

// question5
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// var sub1,sub2,sub3;
// sub1=prompt("Enter first subject name");
// sub2=prompt("Enter second subject name");
// sub3=prompt("Enter third subject name");
// b) Total marks for each subject is 100, store it in another
// variable.
// var total_marks = 100;
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// var x=prompt("Enter obtained marks for subject one ");
// var obtained_marks1 = parseInt(x);
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// var y=prompt("Enter obtained marks for subject two ");
// var obtained_marks2 = parseInt(y);
// var z=prompt("Enter obtained marks for subject three ");
// var obtained_marks3 = parseInt(z);
// var percent1=(obtained_marks1/total_marks)*100;
// var percent2=(obtained_marks2/total_marks)*100;
// var percent3=(obtained_marks3/total_marks)*100;
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// var Total=total_marks*3;
// var TotalPercentage;
// var obtained=obtained_marks1+obtained_marks2+obtained_marks3;
// TotalPercentage=(obtained/Total)*100;
// var head1 = "Subject";
// var head2 = "Total Marks";
// var head3 = "Obtained Marks";
// var head4 = "Percentage";
// document.write(head1.bold()+"&nbsp;&nbsp;&nbsp;"+head2.bold()+"&nbsp;&nbsp;&nbsp;"+head3.bold()+"&nbsp;&nbsp;&nbsp;"
// +head4.bold()+"<br>"+sub1+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks1+"&nbsp;&nbsp;&nbsp;"+percent1+"<br>"
// +sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks2+"&nbsp;&nbsp;&nbsp;"+percent2+"<br>"
// +sub3+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks3+"&nbsp;&nbsp;&nbsp;"+percent3+"<br>"
// +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Total+"&nbsp;&nbsp;&nbsp;"+obtained+"&nbsp;&nbsp;&nbsp;"+"&nbsp;&nbsp;&nbsp;"+TotalPercentage+"<br>");
// question5


//Chapter 6-9                         MATH EXPRESSIONS



//Chapter 9-11              USER INPUT & CONDITIONAL STATEMENT

// question1
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city=prompt("Enter your city name?");
// var xcity=city.toLocaleLowerCase();
// if(xcity=="karachi")
// {
//     alert("Welcome to city of lights");
// }
// else{
//     alert("We are not ordered to welcome you");
// }
// question1

// question2
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var gender=prompt("Enter your gender");
// gender=gender.toLowerCase();
// if(gender=="male")
// {
//     alert("Good Morning Sir");
// }
// else if(gender=="female"){
//     alert("Good Morning Ma'm");
// }
// question2

// question3
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
// var color=prompt("Input color of road traffic signal");
// color=color.toLowerCase();
// if(color==="red")
// {
//     alert("Must stop");
// }
// else if(color==="yellow")
// {
//     alert("ready to move");
// }
// else if(color==="green")
// {
//     alert("move now");
// }
// else
// {
//     alert("Enter right value");
// }
// question3

// question4
// 4.Write a program to take input remaining fuel in car 
//(in litres) from user. If the current fuel is less than 
//0.25litres,show the message “Please refill the fuel in 
//your car”
// var fuel=prompt("Input remaining fuel in your car(in litres)");
// fuelNum=parseFloat(fuel);
// if(fuelNum<0.25)
// {
//     alert("Please refill the fuel in your car");
// }
// else if(fuelNum>=0.25)
// {
//     alert("Your fuel is ok now");
// }
// question4

// question5
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//yes its ok alert is running
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// No its Not true it must be ++b to run.alert is not running 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//only condition 2 and 4 is true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//Yes the cost equals
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//Yes true
//f. if("car" < "cat"){
//     alert("car is smaller than cat");
// }
//Yes alert is running because r comes first than t
// try it to clear the concept
// if("caq" < "car"){
//     alert("caq is smaller than car");
// }
// question5

// question6
//6. Write a program to take input the marks obtained in 
//three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade 
//as per following table:
// var sub = prompt("Enter the marks for sub1");
// var sub1=parseFloat(sub);
// sub = prompt("Enter the marks for sub2");
// var sub2=parseFloat(sub);
// sub = prompt("Enter the marks for sub3");
// var sub3=parseFloat(sub);
// var obt=sub1+sub2+sub3;
// var total=prompt("Enter the total marks");
// total=parseFloat(total);
// var percentage=(obt/total)*100;
// var grade;
// var remarks;
// if(percentage>=80)
// {  
//     grade="A-one";
//     remarks="excellent";
// }
// else if(percentage>=70)
// {
//     grade="A";
//     remarks="Good";
// }
// else if(percentage>=60)
// {
//     grade="B"
//     remarks="You need to improve";
// }
// else if(percentage<60)
// {
//     grade="fail";
//     remarks="Sorry";
// }
// var marksheet="MarksSheet";
// var tm="Total Marks";
// var mo="Marks Obtained";
// var perc = "Percentage";
// var gra="Grade";
// var rema ="Remarks";
// document.write(marksheet.bold()+"<br>"+tm.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+total
// +"<br>"+mo.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+obt+"<br>"+perc.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+
// percentage+"%"+"<br>"+gra.bold()+"&nbsp;&nbsp;:"+grade+"<br>"+rema.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"
// +remarks);
// question6

// question7
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var sec=Math.floor(Math.random()*10);
// var guess=prompt("Guess the secret number");
// guess=parseInt(guess);
// if(guess===sec)
// {
//     alert("Bingo!Correct Answer aa");
// }
// else if((guess-1)===sec)
// {
//     alert("Close enough to the correct answer");
// }

// question7


// question8
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3
// var che=prompt("Enter the number to check if its divisible by 3");
// check=parseInt(che);
// if(check%3===0)
// {
//     alert("Yes it is divisible by 3");
// }
// else 
// {
//     alert("No its not divisible by 3");
// }

// question8

// question9
// 9. Write a program that checks whether the given input is an
// even number or an odd number
// var eve=prompt("Enter the number to check for even or odd");
// eve=parseInt(eve);
// if(eve%2===0)
// {
//     alert("Even Number it is");
// }
// else
// {
//     alert("Its an Odd number");
// }
// question9


// question10
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var T=prompt("Enter the temperature");
// var temp=parseInt(T);
// if(temp>40)
// {
//     alert("It is too hot outside");
// }
// else if(temp>30)
// {
//     alert("The Weather today is normal");
// }
// else if(temp>20)
// {
//     alert("Today's weather is Normal");
// }
// else if(temp>10)
// {
//     alert("OMF! Today’s weather is so Cool.");
// }
// question10


// question11
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// var num1=prompt("Enter first number");
// num1=parseFloat(num1);
// var num2=prompt("Enter second number");
// num2=parseFloat(num2);
// var result;
// var sym=prompt("Enter the operation to perform (+, -, *, /, %)");
// if(sym==="+")
// {
//     result=num1+num2;
//     alert("The sum of two numbers is equal to:    " + result);
// }
// else if(sym==="-")
// {
//     result=num1-num2;
//     alert("The difference of two numbers is equal to:   "+result);
// }
// else if(sym==="*")
// {
//     result=num1*num2;
//     alert("The multiplication of two numbers is equal to:    "+result);
// }
// else if(sym==="/")
// {
//     result=num1/num2;
//     alert("The division of two numbers is equal to:     "+result);
// }
// else if(sym==="%")
// {
//     result=num1%num2;
//     alert("The remainder of two numbers is equal to:    "+result);
// }
// else
// {
//     alert("Enter right symbol please");
// }
// question11

//Chapter 9-11              USER INPUT & CONDITIONAL STATEMENT
//Chapter 12-13              IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 
// question1
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// question1
// var num=prompt("Enter the number or string");
// var num1=parseInt(num);
// if(num.charCodeAt(0)>=65&&num.charCodeAt(0)<=90)
// {
//     alert("It is the upper case letter")
// }
// else if(num.charCodeAt(0)>=97&&num.charCodeAt(0)<=122)
// {
//     alert("It is the lower case letter");
// }
// else if(Number.isInteger(num1))
// {
//     alert("its an number");
// }
// else
// {
//     alert("It is something else");
// }
 

// alert(String.fromCharCode(65,66,67)); // returns 'ABC'
// question1


// question2
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var num=prompt("Enter the first number");
// var num1=parseInt(num);
// num=prompt("Enter the second number");
// var num2=parseInt(num);
// if(num1>num2)
// {
//     alert("The number 1 is larger");
// }
// else if(num2>num1)
// {
//     alert("The number 2 is larger");
// }
// else if(num1==num2)
// {
//     alert("The number 1 and number 2 are equal");
// }
// question2


// question3
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var num=prompt("Enter the number");
// var num1=parseInt(num);
// if(num1===0)
// {
//     alert("The number is equal to zero");
// }
// else if(num1>0)
// {
//     alert("The number is positive");
// }
// else if(num1<0)
// {
//     alert("The number is negative");
// }
// question3


// question4
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// var len=prompt("Enter a character i.e(The length of string 1)");
// var str=len.length;
// str=parseInt(str);
// if(str===1)
// {
//     len=len.toLowerCase();
//     if(len==="a"||len==="e"||len==="i"||len==="o"||len==="u")
//     {
//         alert("True its a vowel");
//     }
//     else{
//         alert("False its not a vowel");
//     }
// }
// else{
//     alert("Please Enter a character i.e(The length of string 1)");
// }
// question4


// question5
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pas1=prompt("Please! Enter a password");
// var len=pas1.length;
// len=parseInt(len);
// while(len===0)
// {
//     alert("Please enter a password here");
//     pas1=prompt("Please! Enter a password");
//     len=pas1.length;
//     len=parseInt(len);
//     if(len!=0)
//     {
//         break;
//     }
// }
// var pas2=prompt("Please!Re-Enter the password");
// if(pas1===pas2)
// {
//     alert("Correct the password entered matches the original password");
// }
// else if(pas1!=pas2)
// {
//     alert("Incorrect password");
// }


// question5

// question6
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }
//The brackets {} were not there correctly
//Answer
// question6

// question7
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time=prompt("Enter the time in 24 hours");
// var timecheck=time.length;
// while(timecheck!=4)
// {
//     alert("Enter the time in 24 hours");
//     time=prompt("Enter the time in 24 hours");
//     timecheck=time.length;
//     if(timecheck===4)
//     {
//         break;
//     }
// }
// if(time>=0000&time<1200)
// {
//     alert("Good morning");
// }
// else if(time>=1200&&time<1700)
// {
//     alert("Good afternoon");
// }
// else if(time>=1700&&time<2100)
// {
//     alert("Good evening")
// }
// else if(time>=2100&&time<=2359)
// {
//     alert("Good night");
// }
// else
// {
//     alert("Where are you coming out of the required condition Its 24 hour time program");
// }
// question7            



//Chapter 12-13              IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 





//Chapter 14-16              ARRAYS 
// question1
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var arrStudent=[];
// question1

// question2
// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentArray=new Array();
// question2

// question3
// 3. Declare and initialize a strings array
// var arrString=["bilal","ammar","hassan","ali"];
// question3

// question4
// 4. Declare and initialize a numbers array.
//var arrNum=[1,2,3,4,5];
// question4


// question5
// 5. Declare and initialize a boolean array.
// var arrBoolean=[1,0,false,true];
// alert(arrBoolean);
// question5


// question6
// 6. Declare and initialize a mixed array.
// var arrMixed=[1,"bilal",true,'a'];
// alert(arrMixed);
// question6


// question7
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var qual="Qualifications";
// document.write(qual.bold()+"&nbsp;");
// var degrees=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
// for(var i=0;i<=7;i++)
// {
//     document.write("<br>"+(i+1)+"&nbsp;)&nbsp;&nbsp;"+degrees[i]);
// }
// question7


// question8
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var arrName=new Array(3);
// var arrScore=new Array(3);
// var Marks=500;
// var arrPercentage=new Array(3);
// for(var i=0;i<3;i++)
// {
//    arrName[i]=prompt("Enter the student "+(i+1)+" name"); 
//    arrScore[i]=prompt("Enter the score of student "+arrName[i]);
//    arrScore[i]=parseFloat(arrScore[i]);
//    arrPercentage[i]=(arrScore[i]/Marks)*100; 
// }
// //outputting the data
// for(var i=0;i<3;i++)
// {
//     document.write("Score of&nbsp;&nbsp;"+arrName[i]+"&nbsp;is&nbsp;"+arrScore[i]+"&nbsp;Percentage:&nbsp;"+arrPercentage[i]+"%<br>");
// }
// question8


// question9
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var arrColor=["red","blue","green","yellow","purple"];
// var size=arrColor.length;
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// var addbegin=prompt("Enter the color you want to add at the beggining"+
// " of the array ");
// arrColor.unshift(addbegin);
// size=arrColor.length;
// // Display the updated array in your browser.
// var updated="The updated array is now after adding at the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// var addend=prompt("Enter the color you want to add at the end"+
// " of the array");
// arrColor.push(addend);
// size=arrColor.length;
// updated="The updated array is now after adding at the end is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// c. Add two more color to the beginning of the array.
// var addbegin21=prompt("Enter the 1st more color you want to add at the beggining"+
// " of the array ");
// var addbegin22=prompt("Enter the 2nd more color you want to add at the beggining"+
// " of the array ");
// arrColor.unshift(addbegin21,addbegin22);
// size=arrColor.length;
// // Display the updated array in your browser.
// updated="The updated array after adding 2 more colors at the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// d. Delete the first color in the array. Display the updated
// array in your browser.
// arrColor.shift();
// size=arrColor.length;
// updated="The updated array after removing ONE color from the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// e. Delete the last color in the array. Display the updated
// array in your browser.
// arrColor.pop();
// size=arrColor.length;
// updated="The updated array after removing ONE color from the last is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// var index=prompt("Enter the index at which you want to add color to "+
// "the array");
// index=parseInt(index);
// var addmid=prompt("Enter the color which you want to add in the desired index "+index);
// arrColor.splice(index,0,addmid);
// size=arrColor.length;
// updated="The updated array after adding color at the desired index is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var index1=prompt("Enter the index at which you want to delete color to "+
// "the array");
// index1=parseInt(index1);
// var removeColor=prompt("How many colors you want to remove");
// removeColor=parseInt(removeColor);
// arrColor.splice(index1,removeColor);
// size=arrColor.length;
// updated="The updated array after desired No of colors at the desired index is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }

// question9



// question10
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// alert("Enter the student's scores in an array I will sort it for you");
// var Size=prompt("Enter the No of Students");
// var Score=new Array(Size);
// for(var i=0;i<Size;i++)
// {
//     Score[i]=prompt("Enter the student "+(i+1)+" Score here");
//     Score[i]=parseInt(Score[i]);
// }
// document.write("Scores of students: ");
// for(var i=0;i<Size;i++)
// {
//     document.write(Score[i]+"&nbsp;&nbsp;");
// }
// Score.sort(function(a,b){ return a-b;});
// OR
// Score.sort((a,b)=>a-b)
// document.write("<br>");
// document.write("Ordered Scores of students: ");
// for(var i=0;i<Size;i++)
// {
//     document.write(Score[i]+"&nbsp;&nbsp;");
// }
// question10


// question11
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var CityNames=[];
// var selectedCities=[];
// var Size=prompt("Enter the number of cities");
// Size=parseInt(Size);
// while(Size<4)
// {
//     alert("Enter atleast 4 size to check the condition Please!");
//     Size=prompt("Enter the number of cities again atleast four to continue");
//     Size=parseInt(Size);
//     if(Size>4||Size===4)
//     {
//         break;
//     }
// }
// for(var i=0;i<Size;i++)
// {
//     CityNames[i]=prompt("Enter the name of "+(i+1)+" st city");
// }
// var cl="Cities List: ";
// document.write(cl.bold());
// for(var i=0;i<Size;i++)
// {
//     document.write(CityNames[i]+"&nbsp;&nbsp;");
// }
// document.write("<br>");
// selectedCities=CityNames.slice(0,3); //Selects the first three elements of the array
// Size=selectedCities.length;
// var scl="Selected Cities List: ";
// document.write(scl.bold());
// for(var i=0;i<Size;i++)
// {
//     document.write(selectedCities[i]+"&nbsp;&nbsp;");
// }        
// question11


// question12
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This","is","my","cat"];
// var singleString=arr.join(" ");
// document.write("Array:<br>"+arr+"<br>"+"String:<br>"+singleString);
// question12


// question13
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var arr=[];
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// var size=arr.length;
// document.write("The first in policy is: "+arr+"<br>");
// document.write("<br><br>The first out policy is: ");
// for(var i=0;i<size;i++)
// {
//     document.write("<br>"+"OUT"+"<br>"+arr[i]);
// }
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// question13


// question14
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
// var arr=[];
// arr.unshift(2);
// arr.unshift(3);
// arr.unshift(4);
// arr.unshift(5);
// var size=arr.length;
// document.write("<br>"+"The last in policy is: "+arr);
// document.write("<br><br>The first out policy is: ");
// for(var i=0;i<size;i++)
// {
//     document.write("<br>"+"OUT"+"<br>"+arr[i]);
// }
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// question14

// question15
// 15.Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// var phoneArray=["Apple","Motorola","Nokia","Sony","Haier"];
// var size=phoneArray.length;
// for(var i=0;i<size;i++)
// {
//     document.write(phoneArray[i]+"<br>");
//}

// question15



//Chapter 14-16              ARRAYS 



//Chapter 17-20              ARRAYS AND LOOP
//question1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
//question1
// var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 
//question1



//question2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// var size =matrix.length;
// for(var i=0;i<3;i++)
// {
//     for(var j=0;j<4;j++)
//     { 
//         document.write(matrix[i][j]);
//     }
//     document.write("<br>");
// }
//question2


//question3
// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=0;i<10;i++)
// {
//     document.write((i+1)+"<br>");
// }
//question3


//question4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var number = prompt("Enter a number to show its multiplication table");
// number=parseInt(number);
// var mul;
// var length=prompt("Enter the length of multiplication table");
// length=parseInt(length);
// while(length===-1||length===0)
// {
//     alert("Please! Enter a positive number for length");
//     length=prompt("Enter the length of multiplication table");
//     length=parseInt(length);
//     if(length>0)
//     {
//         break;
//         alert("Correct Now see the table");
//     }
// }
// document.write("Multiplication table of &nbsp;"+number+"<br>");
// document.write("Length &nbsp;"+length+"<br>");
// for(var i=1;i<=length;i++)
// {
//     mul=number*i;
//     document.write("<br>"+number+" x "+i+" = "+mul);
// }
//question4



//question5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
// var fruits = ["apple","banana","mango","orange","strawberry"];
// var size=fruits.length;
// for(var i=0;i<size;i++)
// {
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<size;i++)
// {
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }
//question5



//question6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<b>Counting:</b><br>");
// for(var i=1;i<=15;i++)
// {
//     document.write(i+" , ");
// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<br><br><b>Reverse Counting:</b><br>");
// for(var i=15;i>=1;i--)
// {
//     document.write(i+" , ");
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<br><br><b>Even:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<br><br><b>Odd:</b><br>");
// for(var i=1;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<br><br><b>Series:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+"k, ");
// }


//question6


//question7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
//question7
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var size=A.length;
// var check=false;
// for(var i=0;i<=size;i++)
// {
//     if(search===A[i])
//     {
//         alert(search+" is available at index "+(i+1)+" of our bakery");
//         check=true;
//         break;
//     }
// }
// if(check==false)
// {
//     alert("We are sorry "+search  +" is not available in our bakery");
// }

//question8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var larger=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]>larger)
//     {
//         larger=A[i];
//     }
// }
// document.write("<br>The largest number is "+larger+"<br><br>");

//question8

//question9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var small=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]<small)
//     {
//         small=A[i];
//     }
// }
// document.write("<br>The smallest number is "+small+"<br><br>");
//question9


//question10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// for(var i=1;i<=100;++i)
// {
//     if(i%5==0)
//     {
//         document.write(i+" , ");
//     }
// }
//question10

//Chapter 17-20              ARRAYS AND LOOP 

//Assignement no 6 Roll NO:WM6613 Name:Muhammad Bilal Email:bilalmohib7896@gmail.com
// CHAPTER 21 to 25
// Q#1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// var fullName=firstName+" "+secondName;
// alert("Welcome "+fullName);
// Q#2
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var favoriteMobile=prompt("Enter your favorite Mobile Phone Model: ");
// var length=favoriteMobile.length;
// document.write("<h3>My favorite Phone is : "+favoriteMobile+" "+"</h3>");
// document.write("<h3>Length of String: "+length+"</h3>");

// Q#3
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// var str="Pakistani";
// var index=str.indexOf('n');
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Index of 'n' : "+index+"</h3>");

// Q#4
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser
// var str="Hello World";
// var index=str.lastIndexOf('l');
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Last index of 'l' : "+index+"</h3>");

// Q#5
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var str="Pakistani";
// var index=str.charAt(3);
// document.write("<h3>String : "+str+" "+"</h3>");
// document.write("<h3>Character at index 3 : "+index+"</h3>");

// Q#6
// 6. Repeat Q1 using string concat() method.
//Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// var a="asdf";
// var fullName=firstName.concat(" ",secondName);
// document.write("Welcome "+fullName);

// Q#7
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser
// var str="Hyderabad";
// document.write("City: "+str+"<br>");
// var rep=str.replace("Hyder","Islam");
// document.write("After replacement: " + rep);

// Q#8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace=message.replace(/and/g,"&");
// document.write("<b>Message:</b> "+message+"<br>");
// document.write("<b>After replacement:</b> "+replace);

// Q#9
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var str="472";
// var strtype=typeof(str);
// var num=parseInt(str);
// var numtype=typeof(num);
// document.write("Value: "+str+"<br>");
// document.write("Type: "+strtype+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type: "+numtype+"<br>");

// Q#10
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var input=prompt("Enter the string");
// var convert=input.toUpperCase();

// document.write("User Input: "+input+"<br>");
// document.write("Upper Case: "+convert);
// Q#11
// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var ent=prompt("Enter the input to convert to Title Case");
// var str=ent.toLowerCase();
// str=str.split("&nbsp;");
// for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); 
// }
// str=str.join(" ");
// document.write("User Input: "+ent+"<br>");
// document.write("Title case: "+str+"<br>");

// Q#12
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var number=35.36;
// var inString=number.toString();
// var replace=inString.replace(".","");
// document.write("Number :"+number);
// document.write("<br>Number :"+replace);

// Q#13
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var userName=prompt("Enter your Input: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);
// Q#14
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A=["cake", "apple pie","cookie", "chips", "patties"];
// var userI=prompt("Enter the item for searching it?");
// userInput=userI.toLowerCase();
// var news;
// var length=A.length;
// var found=false;
// for(var i=0;i<length;i++)
// {
//     if(userInput===A[i])
//     {
//         found=true;
//         alert(userI+" is available at index "+(i+1)+" of our bakery");
//         break;
//     }
// }
// if(found===false)
// {
//    alert("WE are Sorry "+userI+" is not available in our bakery");
// }

// Q#15
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// var password=prompt("Enter the password: ");
// var splitPassword=[];
// splitPassword=password.split("");
// var formatPassword=splitPassword.join("");
// document.write("Entered password: "+password+"<br>");
// for(var i=0;i<formatPassword.length;i++)
// {
//     var message;
//     var firstCondition=formatPassword.charCodeAt(0);
//     var secondCondition=formatPassword.charCodeAt((i));
//     var thirdCondition=formatPassword.charCodeAt(i);
//     document.write("first condition: "+firstCondition+"<br><br>");
//     document.write("2nd condition: "+secondCondition+"<br><br>");
//     while((secondCondition<48&&secondCondition>30)||(secondCondition<=64&&secondCondition>=58)
//     ||(firstCondition>=48&&firstCondition<=57)||(formatPassword.length<6)
//     ||isNaN(secondCondition)||(secondCondition<=96&&secondCondition>=91)||(secondCondition>=123))
//     {
//         alert("Wrong password");
//         password=prompt("Enter the password: ");
//         splitPassword=password.split("");
//         formatPassword=splitPassword.join("");
//         firstCondition=formatPassword[0].charCodeAt(0);
        
//     }
//     if((firstCondition<49&&firstCondition>57)&&(formatPassword.length>=6))
//     {
//         document.write("Correct!");   
//         break;
//     }
// }
// Q#16
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university="University of Karachi";
// var Splited=[];
// var arr=[];
// Splited=university.split("");
// var formatArray=Splited.join("");
// for(var i=0;i<formatArray.length;i++)
// {
//     document.write(formatArray[i]+"<br>");
// }

// Q#17
// 17. Write a program to display the last character of a user
// input.
// var string=prompt("Enter the number to display its last character ");
// var leng=string.length;
// var ind=string.charAt(leng-1);
// document.write("User Input: "+string+"<br>");
// document.write("Last Character: "+ind+"<br>");
// Q#18
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var check=prompt("Enter string to count the occurence of word 'the'");
// var countThe=(check.split("the").length - 1);
// document.write("Text: "+check+"<br>");
// document.write("There are "+countThe+ " occurences of the word 'the'");
// CHAPTER 21 to 25


//CHAPTER 26 TO 30

//question 1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//The number must be positive integer so parse int I have used so ceil/float and floor are the same


// var num=prompt("Enter the positive integer");
// num=parseInt(num);
// if(num>0)
// {
//     var roundoffNum=Math.round(num);
//     var floorNum=Math.floor(num);
//     var ceilNum=Math.ceil(num);
//     document.write("number: "+num+"<br>");
//     document.write("Round off value: "+roundoffNum+"<br>");
//     document.write("Floor value: "+floorNum+"<br>");   
//     document.write("Ceil value: "+ceilNum);  
// }
// while(num<0)
// {
//    alert("Please enter a postive num");
//    num=prompt("Enter a positive number");
//    num=parseInt(num);
//    if(num>0)
//    {
//        alert("You entered positive");
//        break;
//    }
// }

//question 2
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var num=prompt("Enter the positive integer");
// num=parseFloat(num);
// if(num<0)
// {
//     var roundoffNum=Math.round(num);
//     var floorNum=Math.floor(num);
//     var ceilNum=Math.ceil(num);
//     document.write("number: "+num+"<br>");
//     document.write("Round off value: "+roundoffNum+"<br>");
//     document.write("Floor value: "+floorNum+"<br>");   
//     document.write("Ceil value: "+ceilNum);  
// }
// while(num>0)
// {
//    alert("Please enter a negative num");
//    num=prompt("Enter a negative number");
//    num=parseInt(num);
//    if(num<0)
//    {
//        alert("You entered negative");
//        break;
//    }
// }


//question3
// 3.Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var num=prompt("Enter the value to display absolute value: ");
// num=parseInt(num);
// var numAbsoluteValue=Math.abs(num); 
// document.write("The absolute value of "+num+" is "+numAbsoluteValue);


//question4
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var randomNum=Math.floor(Math.random()*7);
// document.write("random dice value "+randomNum);

//question5
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var num=Math.random()*2;
// var coin=Math.floor(num);
// var value;
// if(coin===1)
// {
//     value="Heads";
// }
// else{
//     value="Tails";
// }
// document.write(coin+"<br>");
// document.write("random coin value: "+value+"<br>");

//question6
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// var randomNumber=Math.floor(Math.random()*100);
// document.write("Random number between 1 and 100 is: "+randomNumber);

//question7
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var weight=prompt("Enter your weight?");
// weight=parseFloat(weight);
// document.write("The weight of user is: "+weight+" kilograms");

//question8
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var randomNumber=Math.random()*10;
// var num=Math.floor(randomNumber);
// var input=prompt("Enter the number between 1 to 10","for example:5");
// input=parseInt(input);
// while(input<=0||input>10)
// {
//     alert("Please enter between 1 to 10 to find the number ");
//     input=prompt("Please again Enter the number between 1 to 10","for-example:10");
// input=parseInt(input);
// if(input>=1&&input<=10)
// {
//     break;
// }
// }
// if(input===num)
// {
//     alert("Congratulations you found the number");
// }
// else{
//     alert("The number was not found between 1 to 10");
// }
//CHAPTER 26 TO 30


//CHAPTER 31 TO 34

//question1
// 1. Write a program that displays current date and time in
// your browser.
// var date=new Date();
// document.write(date);
 
//question2
// 2. Write a program that alerts the current month in words.
// For example December.
// var arrMonths=["January","February","March","April","May","June","July","August","September",
// "October","November","December"];
// var Month=new Date();
// var month=Month.getMonth();
// document.write("Current Month: "+arrMonths[month+1]);

//question3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// document.write("Today is: "+CurrentDay);


//question4
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// if(CurrentDay==="Sat"||CurrentDay==="Sun")
// {
//     document.write("Its fun day");
// }
// else{
//     document.write("Its a working day");
// }

//question5
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var Date=new Date();
// var date=Date.getDate();
// if(date<16)
// {
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//question6
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var num=new Date();
// var millisecondsSinceMidnight=num.getTime();
// var InSeconds=(millisecondsSinceMidnight/1000);
// var InMinutes=InSeconds/60;
// document.write("Current date:- "+num+"<br>");
// document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
// document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

//question7
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var num=new Date();
// var check=num.getHours();
// if(check<12)
// {
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

//question8
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate=new Date(2020,11,31);
// document.write("Later Date: "+laterDate);

//question9
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var num1=new Date(2020,3,24);
// var num2=new Date();
// sdr=num1.getTime();
// edr=num2.getTime();
// var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
// document.write(num+" days have passed since "+num1);

//question10
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var num1=new Date(2020,0,1);
// var num1c=num1.getTime();
// var num2=new Date();
// var num2c=num2.getTime();
// var diff=num2c-num1c;
// var secPassed=Math.floor((diff/1000));
// document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

//question11
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var currentDate=new Date();
// var getHours=currentDate.getTime();
// var currentTime=Math.floor(getHours/(1000*60*60));
// getHours=getHours+(1000*60*60);
// var incrementedTime=Math.floor(getHours/(1000*60*60));
// var diff=incrementedTime-currentTime;
// diff--;
// var newDate=new Date();
// newDate.setHours(diff);
// document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

//question12
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var currentDate=new Date();
// var currentYear=currentDate.getFullYear();
// var YearBack100=currentYear-100;
// var YearBack100Date=new Date();
// YearBack100Date.setFullYear(YearBack100);
// alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

//question13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser
// var age=prompt("Enter your age?");
// age=parseInt(age);
// var date=new Date();
// var currentYear=date.getFullYear();
// var HisAge=currentYear-age;
// var dateofBirth=new Date(HisAge);
// var yearDate=dateofBirth.setFullYear(HisAge);
// var YearOfdateofBirth=dateofBirth.getFullYear();
// document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


//question14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//Sir I have checked on the net for k-billing it is 10% for the late payment surcharge

// var name=prompt("Enter your name?");
// var month=prompt("Enter the month?");
// var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
// units=parseFloat(units);
// var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
// chargesPerUnit=parseFloat(chargesPerUnit);

// var netAmountPayable=units*chargesPerUnit;
// var NetAmountPayable=netAmountPayable.toFixed(2);
// var LatePaymentSurcharge=(10/100)*NetAmountPayable;
// var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
// var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
// GrossAmountPayable=GrossAmountPayable.toFixed(2);

// var finalUnits=units.toFixed(2); 
// var finalChargesPerUnit=chargesPerUnit.toFixed(2);

// document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
// +finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
// "Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
// "<br>Gross Amount Payable (After due date): "+GrossAmountPayable);

//CHAPTER 31 TO 34

///////////////////////////////////////////////////////////////////////////////////////

//CHAPTER 35 to 38

//question1
// 1. Write a function that displays current date & time in your
// browser

// displayDate();
// function displayDate()
// {
//     var date=new Date();
//     document.write(date);
// }


//question2
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// greet(firstName,secondName);
// function greet(fn,ln)
// {
//     var fullName=fn+ln;
//     alert("Welcome "+fullName);
// }


//question3
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var sum=sum(num1,num2);
// alert("The sum of "+num1+" and "+num2+" is: "+sum);
// function sum(n1,n2)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var sum=n1+n2;
//     return sum;
// }


//question4
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var operator=prompt("Enter +,-,* or / to perform");
// var check=false;
// if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
// {
//     check=true;
// }
// else{
//     check=false;
// }
// while(check===false)
// {
//     alert("Please enter right operation");
//     operator=prompt("Enter the operatoion +,-,x or / to perform");
//     if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
//     {
//         check=true;
//         break;
//     }
// }
// var result=calculator(num1,num2,operator);
// if(operator==="+")
// { 
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The sum of "+num1+" and "+num2+" is: "+result);
// }
// else if(operator==="-")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The difference of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="*")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The product of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="/")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The division of "+num1+" and "+num2+" is: "+result)
// }
// function calculator(n1,n2,o)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var result;
//     if(o==="+")
//     { 
//         result=n1+n2;
//     }
//     else if(o==="-")
//     {
//         result=n1-n2;
//     }
//     else if(o==="*")
//     {
//         result=n1*n2;
//     }
//     else if(o==="/")
//     {
//         result=n1/n2;
//     }
//     return result;
// }


//question5
// 5. Write a function that squares its argument.
// var num=prompt("Enter a number to find its square?");
// var result=square(num);
// document.write("The square of "+num+" is = "+result);
// function square(n)
// {
//     n=parseInt(n);
//     var square=n*n;
//     return square;
// }

//question6
// 6. Write a function that computes factorial of a number
// var fact=prompt("Enter a number to find its factorial?");
// var result=factorial(fact);
// document.write("The factorial of "+fact+" is = "+result);
// function factorial(n)
// { 
//     n=parseInt(n);
//     var fact=1;
//     for(var i=1;i<=n;i++)
//     {
//         var result=fact*(n-i);
//         var fact=fact+result;
//     }
//     return fact;
// }


//question7
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// var ns=prompt("Enter the starting number?");
// var ne=prompt("Enter the ending number?");
// while(ns>ne)
// {
//     alert("Enter right number");
//     ns=prompt("Enter the starting number?");
//     ne=prompt("Enter the ending number?");
//     if(ns<=ne)
//     {
//         break;
//     }
// }
// counting(ns,ne);
// function counting(sn,en)
// {
//     sn=parseInt(sn);
//     en=parseInt(en);
//     for(var i=sn;i<=en;i++)
//     {
//         document.write(i+"<br>");
//     }
// }


//question8
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// var b=prompt("Enter the base of triangle");
// var p=prompt("Enter the prependicuar of trianlge");
// var result=hypotenous(b,p);
// document.write("The hypotenous of base"+b+" and "+" prependicular "+p+" is = "+result);
// function hypotenous(b,p)
// {
//     b=parseInt(b);
//     p=parseInt(p);
//     var h=square(b,p);
//     function square(b,p)
//     {
//         var bi=b*b;
//         var pi=p*p;
//         var sum=bi+pi;
//         return sum;
//     }
//     return h;
// }


//question9
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectamgle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
// function Area(w,h)
// {
//     w=parseFloat(w);
//     h=parseFloat(h)
//     var a=w*h;
//     return a;
// }


//question10
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// var s=prompt("Enter the string to check for palindrome");
// palindrome(s);
// function palindrome(s)
// {
//     var spl;
//     spl=s.split("").reverse().join("");
//     if(s===spl)
//     {
//         alert(s+" is a palindrome");
//     }
//     else{
//         alert(s+" is not a palindrome");
//     }
// }

//question11
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// var s=prompt("Enter the string");
// var s1=capital(s);
// document.write(s1);
// function capital(s)
// {
//    var s=s.split(" ");
//    var len=s.length;
//    for(i=0;i<len;i++)
//    {
//     s[i] = s[i][0].toUpperCase() + s[i].substr(1);
//    }
//    return s.join(" ");
    
// }

// question12
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// var str=prompt("Enter the string");
// var strr=fLW(str);
// document.write("The longest word is: "+strr);
// function fLW(str) {
    
//     var string = str.match(/\w[a-z]{0,}/gi);
//   var result = string[0];


//   for(var i = 1 ; i < string.length ; i++)
//   {
//     if(result.length < string[i].length)
//     {
//     result = string[i];
//     } 
//   }
//   return result;
//   }



//question13
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// var str=prompt("Enter the string");
// var letter=prompt("Enter letter");
// var res=charCount(str,letter);
// document.write(letter+" is "+res+" times");
// function charCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }



//question14
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// var radius=prompt("Enter the radius");
// radius=parseInt(radius);
// calcCircumference(radius);
// calcArea(radius);
// function calcCircumference(radius)
// {
//     var c=2*(3.14)*radius;
//     document.write("The crcumference is: "+c+"<br>");
// }
// function calcArea(radius)
// {
//     var a=(3.14*radius*radius);
//     document.write("The radius is: "+a);
// }
//CHAPTER 35 to 38
//////////////////////////////////////////////////////////////////
//CHAPTER 38 to 42
//question1
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function power(a,b)
// {

// a = parseInt(a);
// b = parseInt(b);


//    if (b === 0) 
//    {
//     return 1;
//     }
//   else 
//   {
//     return a * power(a, b-1);
//   }
// };

// var a = prompt("Enter the number a for calculating its power?");
// var b = prompt("Enter the number for calculating pow of a i.e enter power of a");
// var answer=power(a,b);
//alert("The result "+  a + " ^ " + b + " is "  + answer);

//question2
// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. Leap years ..., 
// 2012, 2016, 2020, 
// var year = prompt("Enter the year to check for the leap year?");
// var length=year.length;
// while(length>4||length<1)
// {
//   alert("Enter the right value");
//   year = prompt("Enter(right value) the year to check for the leap year?");
//   if(year.length<5&&year.length>0)
//   {
//     alert("correct");
//     break;
//   }
// }
// function leapYear(y)
// {
//     y=parseInt(y);
//   if(y%4==0)
//     {
//      if(y%100==0)
//      {
//        if(y%400==0)
//        {
//          return true;
//        }
//       else{
//          return false;
//       }
//     }
//   }
//   else
//   {
//     return false;
//   }

  
// }
// if(leapYear(year)==true)
// {
//   alert("The year : "+year+" is a leap year.");
// }
// else
// {
//   alert("The year : "+ year+" is not a leap year.");
// }

//question3
// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, 
// then area of triangle is given by area = S(S − a)(S − b)(S − c) where, 
// S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions
// var val1=prompt("Enter the first value");
// var val2=prompt("Enter the second value");
// var val3=prompt("Enter the third value");
// val1=parseInt(val1);
// val2=parseInt(val2);
// val3=parseInt(val3);
// var S=calculateS(val1,val2,val3);
// function calculateS(a,b,c)
// {
//   var S=(a+b+c)/2;
//   return S;
// } 
// function calculateArea(S,a,b,c)
// {
//  var area = S*(S - a)*(S - b)*(S - c);
//  return area;
// }
// var answerArea=calculateArea(S,val1,val2,val3);
// document.write("The val1 is: "+val1+"<br>"+"The val2 is: "+val2+"<br>"+"The val3 is: "+val3+"<br>"+"The <b>S</b> is : "+S+" and <b>Area</b> is: "+answerArea);

//question4
// 4. Write a function that receives marks received by a student in 3 subjects and returns the 
// average and percentage of these marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions from mainFunction and display 
// result in mainFunction.

// mainFunction();
// function mainFunction()
// {
//   var size=prompt("Enter the number of subjects: ");
//   size=parseInt(size);
//   var total=prompt("Enter the total marks of each subject");
//   total=parseInt(total);
//   total=total*size;
//   var array=[];
//   for(var i=0;i<size;i++)
//   {
//     var arr=prompt("Enter the score of "+(i+1)+" subjects");
//     array[i]=parseInt(arr);
//   } 
//   var averageResult=average(array,size);
//   alert("The average of subjects "+size+" of student  is "+averageResult);

//   var percentageStudent=percentage(array,total,size);
//   alert("The percentage of subjects "+size+" of student  is "+percentageStudent+" %");
// }

// function average(arr,size)
// { 
//   var sum=0;
//   for(var i=0;i<size;i++)
//   { 
//     sum=sum+arr[i];
//   }
//   var average=sum/size;
//   return average;
// }
// function percentage(arr,t,size)
// {
//     var sum=0;
//     for(var i=0;i<size;i++)
//     { 
//       sum=sum+arr[i];
//     }
//     var percen=(sum/t)*100;
//     return percen; 
// }


//question5
// 5. You have learned the function indexOf. Code your own custom function that will perform the 
// same functionality. You can code for single character as of now.
// var sentence=prompt("Enter the sentence: ");

// var string = prompt("Enter the string to search in the sentence: ");
// var start = prompt("Enter the start value of search: ");
// start=parseInt(start);
// alert(indexOfCustom(string,start,sentence));
// function indexOfCustom(string,start=0,sentence)
// {
//     var position;
//     var check=1;
//     if(sentence.length==0)
//     {
//         return -1;
//     }
//     else
//     {
//         var chars = sentence.split("");
//         for(var i=start;i<sentence.length;i++)
//         {
//             if(chars[i]=string)
//             {
//                 position=i;
//             }
//             else{
//                 check=false;
//             }
//         }
//     }
//     if(check==false)
//     {
//         return -1;
//     }
//     else{return position;}
  
// }

//question 6
// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not 
// more than 25 characters long.
// var abc=prompt("Enter the string to remove vowels: ");
// var result=deleteVowels(abc);
// alert(result);
// function deleteVowels(str)
// {
//     var spl=str.split("");
//     for(var i=0;i<str.length;i++)
//     {
//         if(spl[i]=='a'||spl[i]=='e'||spl[i]=='i'||spl[i]=='o'||spl[i]=='u')
//         {
//             spl[i]="";
//         }
//         else{
//             continue;
//         }
//     }
//     var res=spl.join("");
//     return res;
// }

//question 7
// 7. Write a function with switch statement to count the number of occurrences of any two 
//vowels in succession in a line of text. For example, in the sentence 
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
//question 7
// const def = prompt('Enter the string to count two vowels in succetion : ');
// const answer = deleteVowelsS(def);
// alert('The vowels in succetion are ' + answer + ' times');

// function deleteVowelsS(str) {
//   let count = 0;
//   for (let i = 1; i < str.length; i++) { // Start with 1 in stead of 0, so you know the previous character exists
//     switch (str[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if (str[i] === str[i - 1]) {
//           count++;
//         }
//         break;

//       default:
//         break;
//     }
//   }
//   return count;
// }  
                    
//question 8
// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// var kmdistance=prompt("Enter the input in km between two cities: ");
// dmeters(kmdistance);
// dfeet(kmdistance);
// dinches(kmdistance);
// dcm(kmdistance);
// function dmeters(d)
// {
//     d=parseInt(d);
//     var res=d*1000;
//     document.write("\nThe distance in meters is : ",res);
// }
// function dfeet(d)
// {
//     d=parseInt(d);
//     var res=d*3280.84;
//     document.write("\nThe distance in feet is : ",res);
// }
// function dinches(d)
// {
//     d=parseInt(d);
//     var res=d*39370.1;
//     document.write("\nThe distance in inches is : ",res);
// } 
// function dcm(d)
// {
//     d=parseInt(d);
//     var res=d*100000;
//     document.write("\nThe distance in cm is : ",res);
// }

//question 9
// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
//calling the function
// calcOverTimePay();
// function calcOverTimePay()
// {
//     var hours = prompt("Enter the no. of hours you work?");
//     hours=parseInt(hours);
//     if(hours>40)
//     {
//         var overHours=hours-40;
//         var overtimePay=12*overHours;
//         alert("The overtime payrate of employee is : "+overtimePay+" Rs");
//     }
// }


//question 10
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
// cashBreaker();
// function cashBreaker()
// {
//     var amount=prompt("Enter the amount: ");
//     amount=parseInt(amount);
//     if(amount>=100)
//     {
//         var tens;
//         var fiftys;
//         var hundreds=amount/100;
//         var value=amount-(parseInt(hundreds))*100;
//         if(value<50)
//         {
//             tens=(amount-(parseInt(hundreds))*100)/10;
//             fiftys=value/50;
//         }
//         else if(value>=50)
//         {
//             var img=amount/100;
//             img=(amount-(parseInt(img))*100-50)/10;
//             tens=value/10;
//             fiftys=value/50;
//         }
//         alert("The hundreds are: "+parseInt(hundreds)+" and fiftys are: "+parseInt(fiftys)+" and tens are: "+parseInt(tens));
//     }
// }



//CHAPTER 38 to 42
//////////////////////////////////////////////////////////////////////////////////////////////
//CHAPTER 43 to 48

//question 1
// 1. Show an alert box on click on a link
//Please see the html.This is code below but works in html see index.html
/* <a href="#" onClick="alert('Aoa Sir this is chapter 43 Question no:1');">Click on link to see alert</a> */


//question 2
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
function greet()
{
    alert("Thanks for purchasing the phone from us");
}

//question 3
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted
function deleteRow()
{
    var td =event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}


//question 4
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


//question 5
// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var i=0;
function increase()
{
    var paf=document.getElementById("counter");
    i++;
    paf.innerHTML=i;
}
function decrease()
{
    var paf=document.getElementById("counter");
    i--;
    paf.innerHTML=i;
}

//CHAPTER 43 to 48
///////////////////////////////////////////////////////////////////////////////////////////


//CHAPTER 49 to 52
//question1
// 1. Create a signup form and display form data in your web
// page on submission.
function getData()
{
    //gettting the values
    var email = document.getElementById("email").value;
    var password= document.getElementById("password").value; 
    var telephone= document.getElementById("telephone").value; 
    var mobile= document.getElementById("mobile").value; 
    //saving the values in local storage
    localStorage.setItem("txtValue", email);
    localStorage.setItem("txtValue1", password);
    localStorage.setItem("txtValue2", mobile);
    localStorage.setItem("txtValue3", telephone);
    
}
//displaying the value from local storage to another page by their respective Ids
// document.getElementById("data").innerHTML=localStorage.getItem("txtValue");
// document.getElementById("data1").innerHTML=localStorage.getItem("txtValue1");
// document.getElementById("data2").innerHTML=localStorage.getItem("txtValue2");
// document.getElementById("data3").innerHTML=localStorage.getItem("txtValue3");


//question 2
// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 
function more()
{
   var a=document.getElementById("para1");
   var c=document.getElementById("paraadd").innerHTML;
   a.innerHTML=c;
}

//question 3
// 3. In previous assignment you have created a tabular data
//  using javascript. Let’s modify that. Create a form which
//  takes student’s details and show each student detail in
//  table. Each row of table must contain a delete button and
//  an edit button. On click on delete button entire row should
//  be deleted. On click on edit button, a hidden form will
//  appear with the values of that row.
// function getDataAgain()
// {
    //gettting the values
    // var email = document.getElementById("emails").value;
    // var password= document.getElementById("passwords").value; 
    // var education= document.getElementById("educations").value; 
    // var mobile= document.getElementById("mobiles").value; 
    //saving the values in local storage
    // localStorage.setItem("txtValue", email);
    // localStorage.setItem("txtValue1", password);
    // localStorage.setItem("txtValue2", mobile);
    // localStorage.setItem("txtValue3", telephone);
   
    //showing data in table
// var table = document.getElementById("myTable");
// var row = table.insertRow(0);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";

// }


// function deleteRowAgain()
// {
//     var td =event.target.parentNode; 
//     var tr = td.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// }

// function editRow()
// {
//     var td =event.target.parentNode; 
//     var tr = td.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// }

//CHAPTER 49 to 52


//CHAPTER 53 to 58
//Question 1
//⦁	Consider you have 4 images in a file as shown below: 
//Now When you click on an image it should display in a modal.
function bigImage1()
{
    var btn=document.getElementById('btnpic').style="display:block;";

    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    var image3=document.getElementById("img3");
    var image4=document.getElementById("img4");
    image1.setAttribute("class","images");
    image2.setAttribute("class","imagesC");
    image3.setAttribute("class","imagesC");
    image4.setAttribute("class","imagesC");
}
function bigImage2()
{
    var btn=document.getElementById('btnpic').style="display:block;";

    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    var image3=document.getElementById("img3");
    var image4=document.getElementById("img4");
    image1.setAttribute("class","imagesC");
    image2.setAttribute("class","images");
    image3.setAttribute("class","imagesC");
    image4.setAttribute("class","imagesC");
}
function bigImage3()
{
    var btn=document.getElementById('btnpic').style="display:block;";

    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    var image3=document.getElementById("img3");
    var image4=document.getElementById("img4");
    image1.setAttribute("class","imagesC");
    image2.setAttribute("class","imagesC");
    image3.setAttribute("class","images");
    image4.setAttribute("class","imagesC");
}
function bigImage4()
{
    var btn=document.getElementById('btnpic').style="display:block;";

    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    var image3=document.getElementById("img3");
    var image4=document.getElementById("img4");
    image1.setAttribute("class","imagesC");
    image2.setAttribute("class","imagesC");
    image3.setAttribute("class","imagesC");
    image4.setAttribute("class","images");
}
function closeImage()
{
    var image1=document.getElementById("img1");
    var image2=document.getElementById("img2");
    var image3=document.getElementById("img3");
    var image4=document.getElementById("img4");
    image1.setAttribute("class","imagesC");
    image2.setAttribute("class","imagesC");
    image3.setAttribute("class","imagesC");
    image4.setAttribute("class","imagesC");
    var btn=document.getElementById('btnpic');
    btn.style="display:none;";
}

//Question 2
// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph
function ZoomIn()
{
    var para = document.getElementById('zoom');
    style = window.getComputedStyle(para, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    para.style.fontSize = (currentSize + 10) + 'px';
}
function ZoomOut()
{
    var para = document.getElementById('zoom');
    style = window.getComputedStyle(para, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    para.style.fontSize = (currentSize - 10) + 'px';
}
//CHAPTER 53 to 58 


//CHAPTER 58 to 67


//question 1
// i. Get element of id “main-content” and assign them in a variable.
var mc=document.getElementById("main-content");
// ii. Display all child elements of “main-content” element.

  for (var i = 0; i < mc.childNodes.length; i++) {
    //console.log(mc.children[i]);
  }
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
var mc=document.getElementById("main-content");
var book = document.getElementsByClassName("render");
for (var i = 0; i < mc.children.length; i++) {
 //   console.log(book[i].childNodes[0])
}
// iv. Fill input value whose element id first-name using javascript.
var inp=document.getElementById("form-content");
console.log(inp.childNodes[0].children.value="kjhkjhkjh");
// v. Repeat part iv for id ”last-name” and “email”.




//CHAPTER 58 to 67