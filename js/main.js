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
    let money = userOption.slice(0,-1); //remove last letter
    parseInt(money)
    const computerContainer = document.getElementById("computer-container");

    if(money==250){

        let divImg = document.createElement("DIV");
        let img =  document.createElement("img");
        img.setAttribute("src","images/lowPc.png");
        img.classList.add("images");
        divImg.appendChild(img);
        computerContainer.appendChild(divImg);
        let divItems = document.createElement("DIV");
    }
        

});

