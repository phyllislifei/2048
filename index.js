(function () {
    //action代表按下的键
    let action;
    //得分
    var score=0;
    var max=0;
    let nowscore=document.querySelector('.now-score');
    let maxscore=document.querySelector('.max-score');
    let begin=document.querySelector('.begin-btn');
    // function myclick(){
    //     init();
    //     show();
    // }
    begin.addEventListener('click',function () {
        let beginrbtn=document.querySelector('.begin-btn');
        beginrbtn.innerHTML='重新开始';
        init();
        randPos();
        show();
    });

    document.onkeydown=function (event) {
        let e=event||window.event;
        if(e.keyCode===37){
            action='left';
        }
        else if(e.keyCode===38){
            action='up'
        }
        else if(e.keyCode===39){
            action='right'
        }
        else if(e.keyCode===40){
            action='down'
        }
        else{
            return;
        }
        move(action);
    };
    let box=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];

    function move(action) {
        if(action==='left'||action==='right'){
            rowDirection(action);
        }
        else if(action==='up'||action==='down'){
            colDirection(action);
        }
        show();
        let flag=dead();
        let full=isfull();
        if(!flag&&full){
            if(max<score){
                max=score;
                maxscore.innerHTML=max;
            }
            alert("game over");
            return;
        }
        randPos();
    }
    //生成0-3的随机数
    function rand() {
        return Math.floor(Math.random()*4);
    }

    //初始化
    function init(){
        score=0;
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                let x=i+1;
                let y=j+1;
                let pos=x*10+y;
                box[i][j]=0;
                document.getElementById(pos.toString()).style.backgroundColor=color(box[i][j]);
            }
        }
    }

    //位置
    function randPos() {
        let full=isfull();
        if(full){
            return;
        }
        let x=rand();
        let y=rand();
        while(box[x][y]){
            x=rand();
            y=rand();
        }
        if(x%2){
            box[x][y]=2;
        }
        else {
            box[x][y]=4;
        }
        show();
    }

    //box里面是否全部是非0的数
    function isfull() {
        var full=true;
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(box[i][j]===0){
                    full=false;
                    break;
                }
            }
        }
      return full;
    }

    //非0与0各占一边
    function rowDirection(action) {
        for(let i=0;i<4;i++){
            let temp=[];
            for(let j=0;j<4;j++){
                if(box[i][j]){
                    temp.push(box[i][j]);
                }
            }
            let len=4-temp.length;
            while(len--){
                if(action==='left'){
                    temp.push(0);
                }
                else {
                    temp.unshift(0);
                }
            }
            let temp1=add(action,temp);
            box[i]=[].concat(temp1);
        }
    }

    //非0与0各占一边
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
                if(action==='up'){
                    temp.push(0);
                }
                else {
                    temp.unshift(0);
                }
            }
            let temp1=add(action,temp);
            for(let i=0;i<4;i++){
                box[i][count]=temp1[i];
            }
            count+=1;
        }
    }

    //相邻相同的数字相加
    function add(action,temp) {
        if(action==='left'||action==='up'){
            for(let i=0;i<temp.length-1;i++){
                if(temp[i]===temp[i+1]&&temp[i]!==0){
                    temp[i]+=temp[i+1];
                    score+=temp[i];
                    temp[i+1]=0;
                }
            }
        }
        else{
            for(let i=temp.length;i>0;i--){
                if(temp[i]===temp[i-1]&&temp[i]!==0){
                    temp[i]+=temp[i-1];
                    score+=temp[i];
                    temp[i-1]=0;
                }
            }
        }
        let temp1=[];
        for(let i=0;i<4;i++){
            if(temp[i]){
              temp1.push(temp[i]);
            }
        }
        let len=4-temp1.length;
        while(len--){
            if(action==='left'||action==='up'){
                temp1.push(0)
            }
            else{
                temp1.unshift(0);
            }
        }
        return temp1;
    }

    //显示
    function show() {
        //显示当前分数
        nowscore.innerHTML=score;
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                let x=i+1;
                let y=j+1;
                let pos=x*10+y;
                if(box[i][j]===0){
                    document.getElementById(pos.toString()).innerHTML=' ';
                }
                else {
                    document.getElementById(pos.toString()).innerHTML=box[i][j];
                }
                document.getElementById(pos.toString()).style.backgroundColor=color(box[i][j]);
            }
        }
    }

    //game over
   function dead() {
        let flag=false;
       for(let i=1;i<4;i++){
           for(let j=1;j<4;j++){
            if(box[i][j]===box[i][j-1]||box[i-1][j]===box[i][j]){
                flag=true;
                break;
            }
           }
       }
       return flag;
   }

//数字块的背景色
   function color(num) {
       switch (num) {
           case 0:
               return '#ffccdd';
           case 2:
               return '#fe9800';
           case 4:
               return '#dd5145';
           case 8:
               return '#ffce44';
           case 16:
               return '#cccf94';
           case 32:
               return '#afce44';
           case 64:
               return '#affe24';
           case 128:
               return '#cccef4';
           case 512:
               return '#ffcef4';
           case 1024:
               return '#f1fe4f';
           case 2048:
               return '#55cf11';
           default:
               return '#f534f6';
       }
   }
}());
