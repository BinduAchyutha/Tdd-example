const add = (numbers) => {
    if(numbers === ''){
        return 0; // Empty string returns 0
    }
    const delimeters = ['\n',',', '/', ';']; // Avaliable delimeters
    const existingdelimeters = delimeters.filter((char)=> numbers.includes(char));
    let nums = numbers;
    existingdelimeters.forEach((char) => {       
        nums = nums.split(char).join('+');
    }) // split given string based on delimeters
    nums= nums.split('+')
    if(nums.length === 1){
        return Number(nums[0])
    }
    else {
        let sum =0;
        let errStr = ''
        nums.map((num) => {           
            if(Number(num) < 0){
                errStr+= errStr === '' ? Number(num) : `,${Number(num)}`; // negative numbers
            }
            else{
                sum = Number(num)+ sum // Add positive numbers to sum
            }
        });          
        return errStr ? `Negatives are not allowed ${errStr}` : sum;
    }
}


console.log(add("1\n2,3"));
console.log(add('1,2,3'));
console.log(add(''));
console.log(add('1\n'));
console.log(add('//;\n1;2'));
console.log(add('//;-1;2'));
console.log(add('//;-1;2;-3'));
console.log(add('-1,-1234'));
console.log(add('1,1234876543790'));


module.exports = add;