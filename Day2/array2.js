/* 
	a=[4,5,6,3,7]
	b=[8,3,2,1,5]
	find the common elements between a and b
 */
let a=[4,5,6,3,7];
let	b=[8,3,2,1,5];
console.log("same elements:");
a.forEach((n)=>{
	b.forEach((i)=>{
		(n==i)&&(console.log(i))
		 
	})
})
 
//arr =[1,2,3,4,5,6]
//target =7
//write a code find the all pairs that sum up to the target

let arr =[1,2,3,4,5,6];
let target=7;
console.log("sum elements: ");
	arr.forEach((n)=>{
		for(let i=0;i<6;i++)
		{
			let a=n+i;
			if(a==7)
			{
				console.log(n+" and "+i);
			}
		}
	})
	
//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
let c=[4,8,3,4,3,2,1,8,4];
	c.forEach((n)=>{
		c.forEach((i)=>{
			(n==i) 
		})
	})
	
	
//Array operation
//push and pop
arr2=['a','b','c'];
console.log(arr2);
arr2.push('e');
console.log(arr2);
arr2.pop('e');
console.log(arr2);

//reverse the array using push and pop







