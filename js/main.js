class Computers{
    constructor(motherBoard,core,ram,ssd,graphic, price){
        this.motherBoard=motherBoard;
        this.core=core;
        this.ram=ram;
        this.ssd=ssd;
        this.graphic=graphic;
        this.price=price;
    }
}

let computers=[];

let basicPc=computers.push(new Computers ("Asus prime H610M-K D4","Intel PENTIUM Dual Core G7400","ddr4 2400 mhz vengance","Intenso state drive 120GB","None",250));

let medPc=computers.push(new Computers("Gigabyte B660 Gaming","Intel Core i5 12400F","Corsair LPX 16 GB","M.2 SSD High Performance 240 GB","RTX 2060",900));

let highPc=computers.push(new Computers("Asus TUF Gaming X570-Plus"," AMD-RYZEN 9 5950X","G.Skill Trident Z RGB 32GB","Western Digital 500 GB","Asus TUF-RTX3080TI",2400));
const button= document.getElementById("button");
button.addEventListener("click",()=>{

    const userOption = document.getElementById("budget").value;
    let divImprovements = document.getElementById("boost-container"); //container de mejoras
    let money = userOption.slice(0,-1); //remove last letter
    parseInt(money)
    const computerContainer = document.getElementById("computer-container");
    computerContainer.innerHTML="";
    divImprovements.innerHTML="";

    if(money==250){

        let divImg = document.createElement("DIV");
        let img =  document.createElement("img");
        img.setAttribute("src","images/lowPc.png");
        img.classList.add("images");
        divImg.appendChild(img);
        computerContainer.appendChild(printList(0));
        computerContainer.appendChild(divImg);
        let p = document.createElement("P");
        p.setAttribute("class","p");
        p.setAttribute("class","active");
        p.innerHTML= "IN ACTION";
        divImprovements.appendChild(p);

        let video2= document.createElement("IFRAME");
        video2.setAttribute("src", "https://www.youtube.com/embed/DRw38U3Zx6I");
        video2.style.width = "740px";
        video2.style.height = "680px";
        divImprovements.appendChild(video2);

    }else if(money==900){
        let divImg = document.createElement("DIV");
        let img =  document.createElement("img");
        img.setAttribute("src","images/med.png");
        img.classList.add("images");
        divImg.appendChild(img);
        computerContainer.appendChild(printList(1));
        computerContainer.appendChild(divImg);
        let p = document.createElement("P");
        p.setAttribute("class","p");
        p.setAttribute("class","active");
        p.innerHTML= "IN ACTION";
        divImprovements.appendChild(p);
        let video2= document.createElement("IFRAME");
        video2.setAttribute("src", "https://www.youtube.com/embed/3MGbtCU05Vw");
        video2.style.width = "740px";
        video2.style.height = "680px";
        divImprovements.appendChild(video2);
    }else if (money==2400){
        let divImg = document.createElement("DIV");
        let img =  document.createElement("img");
        img.setAttribute("src","images/high.png");
        img.classList.add("images");
        divImg.appendChild(img);
        computerContainer.appendChild(printList(2));
        computerContainer.appendChild(divImg);
        let p = document.createElement("P");
        p.setAttribute("class","p");
        p.setAttribute("class","active");
        p.innerHTML= "IN ACTION";
        divImprovements.appendChild(p);

        let video2= document.createElement("IFRAME");
        video2.setAttribute("src", "https://www.youtube.com/embed/zo4-uKYTCmE");
        video2.style.width = "740px";
        video2.style.height = "680px";
        divImprovements.appendChild(video2);

    }
        

});

const printList = (num)=>{
    let div = document.createElement("DIV");
    for(let i=0; i<7;i++){
        let li=document.createElement("LI");
        if(i==0){
            li.innerHTML=`MotherBoard: ${computers[num].motherBoard}`
            div.appendChild(li);
        }else if(i==1){
            li.innerHTML=`Processor: ${computers[num].core}`
            div.appendChild(li);           
        }else if(i==2){
            li.innerHTML=`RAM: ${computers[num].ram}`
            div.appendChild(li);
        }else if(i==3){
            li.innerHTML=`SSD: ${computers[num].ssd}`
            div.appendChild(li);
        }else if(i==4){
            li.innerHTML=`Graphics Card: ${computers[num].graphic}`
            div.appendChild(li);
        }else if(i==5){
            li.innerHTML=`Price: ${computers[num].price}$`
            div.appendChild(li);
        }
    }
    return div;
}

