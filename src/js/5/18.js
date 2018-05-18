(function () {
    const  gas  = [3,1,1],
    cost = [1,2,2];
    console.log(can(gas,cost));
})();
// function canCompleteCircuit(gas,cost) {
//     let start = gas.length - 1;
//     let end = 0;
//     let sum = gas[start] - cost[end];
//     while (start > end) {
//         if (sum >= 0) {
//             sum += gas[end] - cost[end];
//             ++end;
//         }
//         else {
//             --start;
//             sum += gas[start] - cost[start];
//         }
//     }
//     return sum >= 0 ? start : -1;
// }

function can(gas,cost) {
    let length = gas.length,lowest,sum=0,index;
    for(let i = 0;i<length;i++){
        sum += (gas[i] - cost[i]);
        lowest = lowest?lowest : sum;
        index = index?index : i;
        if(sum < lowest){
            lowest = sum;
            index = i+1 >= length?0:i+1
        }
        console.log(sum+','+lowest+','+index);
    }
    let sum2 = 0;
    for(let i =(index);i<length;i++ ){
        sum2 += (gas[i] - cost[i]);
        if(sum2<0){
            return -1
        }
    }
    for(let i = 0;i<=index;i++){
        sum2 += (gas[i] - cost[i]);
        if(sum2<0){
            return -1
        }
    }
    return index
}