let locator=document.getElementsByClassName("sector_container")[0];
let homeBtn=document.getElementsByClassName("sector_home")[0];
let sector_item=document.getElementsByClassName("sector_item");

//点击导航按钮，按钮旋转，再次点击按钮反转 开始
//导航按钮旋转
function rotate(){
    locator.style.left="500px";
    locator.style.bottom="500px";
    homeBtn.style.transform="rotate(360deg)";
    homeBtn.style.transition="1s";
}
function rotate_reverse(){
    homeBtn.style.transform="rotate(0deg)";
    locator.style.left="0px";
    locator.style.bottom="60px";
    homeBtn.style.transition="1s";

}
let toggle=true;
homeBtn.addEventListener("click",function(){
    if(toggle){
        rotate();
        emerge();
    }
    else{
    rotate_reverse();
    vanish()
    }
    toggle=!toggle;
})
//点击导航按钮，按钮旋转，再次点击按钮反转  结束



//点击导航按钮，扇形导航出现。 开始

//扇形导航位置移动
function get_coordinate(length,deg){
    let left=Math.round(length*(Math.sin(Math.PI/180*deg)))+"px";
    let bottom=Math.round(length*(Math.cos(Math.PI/180*deg)))+"px";
    return {
        "left":left,
        "bottom":bottom
    }
}
let len=260;
function emerge(){
    for(let i=0;i<sector_item.length;i++){
        sector_item[i].style.left=get_coordinate(len,36*i)["left"];
        sector_item[i].style.bottom=get_coordinate(len,36*i)["bottom"];
        sector_item[i].style.transform="rotate(360deg)";
        sector_item[i].style.transition=1+i*0.2+"s";


    }
}

function vanish(){
    for(let i=0;i<sector_item.length;i++){
        sector_item[i].style.left="0px";
        sector_item[i].style.bottom="0px";
        sector_item[i].style.transform="rotate(0deg)";
        sector_item[i].style.transition=2-i*0.2+"s";
    }
}
//点击导航按钮，扇形导航出现。 结束



//点击导航小按钮，出现放大的效果。
function expand_clear(){
    this.style.transition="0.1s";
    this.style.transform="scale(1)";
    this.removeEventListener("transitionend",expand_clear);
}

for(let i =0;i<sector_item.length;i++){
    sector_item[i].addEventListener("click",function(){
        this.style.transform="scale(2)";
        this.style.transition="0.1s";
        this.addEventListener("transitionend",expand_clear)
    });

}