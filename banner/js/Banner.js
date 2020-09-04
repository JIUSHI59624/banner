
        var index=0, //当前图片索引
        timer=null,//定时器对象
        prev=document.getElementById("prev"),//上一张按钮
        next=document.getElementById("next"),//下一张按钮
        slides=document.getElementById("banner").getElementsByClassName("banner-slide"),//背景盒子
        dots=document.getElementById("dots").getElementsByClassName("dot"),//状态小圆点
        banner=document.getElementById("banner"),//整个轮播盒子
        menu_items=document.getElementsByClassName("menu-item"),//一级菜单项
        menu_two=document.getElementsByClassName("menu_two");//二级菜单

        //变换当前显示图片方法,根据索引显示对应背景盒子和高亮对应状态圆点
    function imgChange(){
        for(var i=0;i<slides.length;i++){
            slides[i].style.display='none';
            dots[i].className='dot';
        }
        slides[index].style.display='block';
        dots[index].className='dot active';
    }
         //自动轮播方法
    function autoPlay(){
        timer=setInterval(function () {
            index=(++index)%3;
            imgChange();
        },3000)
    }
         //自动轮播暂停方法
    function start_autoPlay(){
        if(timer){
            clearInterval(timer);
        }
    }
         //给两个按钮添加click事件实现切换图片
    next.addEventListener("click",function () {
        index=(++index)%3;
        imgChange();
    })
    prev.addEventListener("click",function () {
        index=(index+2)%3;
        imgChange();
    })
        //给状态圆点按钮添加click事件实现切换图片
    for(var j=0;j<dots.length;j++){
        dots[j].setAttribute("dot-id",""+j);
        dots[j].addEventListener("click",function () {
            index=this.getAttribute("dot-id");
            imgChange();
        })
    }
        //给轮播盒子添加事件，鼠标移入时取消自动轮播，移出时开始自动轮播
    banner.addEventListener("mouseover", start_autoPlay)
    banner.addEventListener("mouseout", autoPlay)
        //实现当鼠标移到对应导航项时显示对应二级菜单，移出导航项及二级菜单时，隐藏二级菜单
        //移入
    for(var m=0;m<menu_items.length;m++){
        menu_items[m].id = m+"";
        menu_two[m].setAttribute("menu_two_id",m+"");
        menu_items[m].addEventListener("mouseover",function () {
            menu_two[this.id].style.display='block';
        })
        menu_two[m].addEventListener("mouseover",function () {
            menu_two[this.getAttribute("menu_two_id")].style.display='block';
        })
    }
        //移出
    for(var n=0;n<menu_items.length;n++){
        menu_items[n].addEventListener("mouseout",function () {
            menu_two[this.id].style.display='none';
        })
        menu_two[n].addEventListener("mouseout",function () {
            menu_two[this.getAttribute("menu_two_id")].style.display='none';
        })
    }
        //进入、刷新网页，开始自动轮播
    autoPlay();

