//Array
//number Array
let numarray=[2,4,6,3,9,7];

	//print Array method 1
	console.log(numarray) 

	//method 2
	for(let i=0;i<=5;i++)	
	{
	console.log(numarray[i]);
	}
	
	//method 3
	numarray.forEach((n) =>{
		console.log(n)
		})
	 
	
//string Array
let stringarray=["apple","orange","pineapple"];
	console.log(stringarray);
	
	for(let i=0;i<=2;i++)
	{
	console.log(stringarray[i]);
	}

//find max number from Array
let num=[3,5,1,7,8];
let max=0;
 num.forEach(n=>{
	/*  	if(max<n)
			{ max=n;} 			*/  
	(max<n) && (max=n)
	  
 })
	console.log("Max is: "+max);
 // print the nested Array
 
 let nes=[ [1,2,3],
		   [4,5,6],
		   [7,8,9]  ]
 
 console.log(nes);
 //use forEach loop to print all elements
	nes.forEach((n) =>{
		n.forEach((i)=>{
			console.log(i)
		})
			})
 
 
 
 
 
 
 
 
 
 
 

	