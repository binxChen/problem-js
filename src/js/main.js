var MAIN = {
    $RUNTIME: {},
    init: function () {
        this.initLayout;
        this.initElement;
        this.initEvent();
    },
    initLayout: {},
    initElement: {},
    initEvent: function () {
            turnStringToZ($('.p1').val(),3)
    },
}
$(function () {
    MAIN.init();
})

/**
 *  Z字形转换 turnStringToZ
 */
function turnStringToZ(str,h) {
    var Array = [],j=0,k=0;
    var strArray = str.split('');
    for(let i in strArray){
        if(k>2){
            k=0;
            j++;
        }
        let judge = ((j+1)%2 == 0) ? true:false;
        if(judge){
            Array.push([j,k,'  '],[j,k+1,strArray[i]],[j,k+2,'  ']);
            j++;
        }else{
            let tmp = [j,k,strArray[i]];
            Array.push(tmp);
            k++;
        }
    }
    let newArray = Array.map(item =>{
        return [item[1],item[0],item[2]]
    });
    let a1=[],a2=[],a3=[];
    newArray.forEach(function(item) {
        console.log(item);
        switch (item[0]){
            case 0:
                a1.push(item[2]);
                break;
            case 1:
                a2.push(item[2]);
                break;
            case 2:
                a3.push(item[2]);
                break
        }
    });
    let textarea = '',finalArray = [];
    for(let i in a1){
        textarea += a1[i];
        if(a1[i]!=='  ') finalArray.push(a1[i])
    }
    textarea += '\r\n';
    for(let i in a2){
        textarea += a2[i];if(a2[i]!=='  ') finalArray.push(a2[i])
    }
    textarea += '\r\n';
    for(let i in a3){
        textarea += a3[i];if(a3[i]!=='  ') finalArray.push(a3[i])
    }
    $('.t1').val(textarea);
}