const nums=[10,20,30];
let length =nums.length;
nums[length-1] =99;
console.log(nums);

function getLastValue(array){
  const length = array.length;
  console.log(`last-value: ${array[length-1]}`);
}

getLastValue([1,20,22,24,5]);
getLastValue(['hi','hello','good']);

function arraySwap(array){
  let array1=[];
  for(i= array.length-1 ;i >=0;i--)
  {
    array1.push(array[i]);
   
  }
  console.log(array1);
}
arraySwap([5,20,22,24,1]);
arraySwap(['good','hello','hi']);

for(let i=0; i<=10 ;i=i+2){
  console.log(i);
}

for(let i=5;i>=0;i--){
  console.log(i);
}
let j= 0;
while(j <= 10)
{
  console.log(j);
  j=j+2;
}

j=5
while(j >= 0){
  console.log(j);
  j--;
}
array=[1,2,3];
let array2=[];
for(let i =0; i <= array.length-1;i++){
  array2[i]= array[i] + 1;
}
console.log(array2);

function addOne(array){
  let array2=[];
for(let i =0; i <= array.length-1;i++){
  array2[i]= array[i] + 1;
}
console.log(array2);
}
addOne([1,2,3]);
addOne([-2,-1,0,99]);

function addNum(array , num){
  let array2=[];
  for(let i=0 ;i< array.length;i++)
  {
    array2[i]= array[i]+ num;
  }
  console.log(array2);
}

addNum([1,2,3],2);
addNum([1,2,3],3);
addNum([-2,-1,0,99], 2);

function addArrays(array , array2){
  let array3=[];
  for(let i=0 ;i< array.length;i++)
  {
    array3[i]= array[i]+ array2[i];
  }
  console.log(array3);
}

addArrays([1,1,2],[1,1,3]);
addArrays([1,2,3],[4,5,6]);

function countPositive(nums){
  let count=0;
  for(let i=0;i< nums.length;i++){
    if(nums[i] > 0){
      count ++;
    }
  }
 console.log(count);
}

countPositive([1,-3,5]);
countPositive([-2,3,-5,7,10]);


