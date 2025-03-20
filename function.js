//functions
function printMsg(){
	console.log("Hello Js");
}

printMsg();

function sum()
{
	return 5+6
}

console.log(sum())

function sub(a,b)
{
	return (a-b)
}

console.log(sub(5,3))

//write a boolean function to find a given number is prime 

function prime(n)
{
	 if(n<=1)
	 {
		 return false
	 }
	 else
	 {
		 for(i=2;i<n;i++)
		 {
			 if(n%i==0)
			 {
				 return false;
			 }
			 else
			 {
				 return true;
			 }
		 }
	 }
}
 console.log("Prime number: "+prime(8));
 console.log("Prime number: "+prime(7));
 

// write recursive function to print numbers 

 function printNum(n)
 {	
	if(n<=0)
	{
		return
	}
	 printNum(n-1)
	 console.log(n)
}
 printNum(10)
 

 




