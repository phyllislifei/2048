box=[
    [1,1,0,3],
    [3,4,5,0],
    [0,0,0,0],
    [3,2,1,0]];

function colDirection(action) {
    let count=0;
    while(count<4){
        let temp=[];
        for(let i=0;i<4;i++){
            if(box[i][count]){
                temp.push(box[i][count]);
            }
        }
        let len=4-temp.length;
        while(len--){
            if(action===1){
                temp.push(0);
            }
            else {
                temp.unshift(0);
            }
        }
        // console.log(temp);
        let temp1=add(action,temp);
        for(let i=0;i<4;i++){
            box[i][count]=temp1[i];
        }
        count+=1;
    }
}

function add(action,temp) {
    if(action===1){
        // console.log(1);
        for(let i=0;i<temp.length-1;i++){
            if(temp[i]===temp[i+1]&&temp[i]!==0){
                temp[i]+=temp[i+1];
                temp[i+1]=0;
            }
        }
    }
    else{
        // console.log(2);
        for(let i=temp.length;i>0;i--){
            if(temp[i]===temp[i-1]&&temp[i]!==0){
                temp[i]+=temp[i-1];
                temp[i-1]=0;
            }
        }
    }
    // console.log(temp);
    let temp1=[];
    for(let i=0;i<4;i++){
        if(temp[i]){
            temp1.push(temp[i]);
        }
    }
    let len=4-temp1.length;
    while(len--){
        if(action===1){
            temp1.push(0)
        }
        else{
            temp1.unshift(0);
        }
    }
    console.log(temp1);
    return temp1;
}

colDirection(1);
