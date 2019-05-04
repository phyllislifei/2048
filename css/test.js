// box=[
//     [1,1,1,3],
//     [3,4,5,2],
//     [1,2,1,1],
//     [3,2,1,1]
// ];
//
// function rowDirection(action) {
//     for(let i=0;i<4;i++){
//         let temp=[];
//         for(let j=0;j<4;j++){
//             if(box[i][j]){
//                 temp.push(box[i][j]);
//             }
//         }
//         let len=4-temp.length;
//         while(len--){
//             if(action=== 1){
//                 temp.push(0);
//             }
//             else {
//                 temp.unshift(0);
//             }
//         }
//         // console.log(temp);
//         let temp1=add(action,temp);
//         // console.log(temp1);
//         box[i]=[].concat(temp1);
//     }
// }
//
// function add(action,temp) {
//     if(action=== 1){
//         for(let i=0;i<temp.length-1;i++){
//             if(temp[i]===temp[i+1]&&temp[i]!==0){
//                 temp[i]+=temp[i+1];
//                 temp[i+1]=0;
//             }
//         }
//     }
//     else{
//         for(let i=temp.length;i>0;i--){
//             if(temp[i]===temp[i-1]&&temp[i]!==0){
//                 temp[i]+=temp[i-1];
//                 temp[i-1]=0;
//             }
//         }
//     }
//     let temp1=[];
//     for(let i=0;i<4;i++){
//         if(temp[i]){
//             temp1.push(temp[i]);
//         }
//     }
//     let len=4-temp1.length;
//     while(len--){
//         if(action===1){
//             temp1.push(0)
//         }
//         else{
//             temp1.unshift(0);
//         }
//     }
//     // console.log(temp1);
//     return temp1;
// }
//
// rowDirection(1);
// console.log(box);

function f(num) {
    switch (num) {
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return 3;

    }
}

let num=f(4);
console.log(num);
