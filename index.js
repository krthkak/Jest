function capitalize(str){
    return str[0].toUpperCase() + str.substring(1);
}

function reverseString(str){
    return str.split('').reduce((acc,cur)=>cur+acc,'')
}

const calculator = {
    add:(a,b) => a+b,
    subtract:(a,b) => a-b,
    divide:(a,b) => a/b,
    multiply:(a,b) => a*b,
}

function analyzeArray(arr){
    const average = arr.reduce((acc,cur)=>acc+cur,0)/arr.length;
    const min = arr.reduce((acc,cur)=>{
        if(acc > cur)
                return cur;
        else return acc;
    },arr[0]);
    const max = arr.reduce((acc,cur)=>{
        if(acc < cur)
                return cur;
        else return acc;
    },arr[0]);

    const length = arr.length;

    return {
        average,min,max,length
    }
}


export {capitalize,reverseString,calculator,analyzeArray}