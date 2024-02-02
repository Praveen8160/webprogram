const card_type = ["Spades", "Diamonds", "Club", "Heart"];
const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

let cards = [];
for (let i = 0; i < card_type.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], cardtype: card_type[i] };
        cards.push(card);
    }
}
function card()
{
    for (let x = cards.length - 1; x >= 0; x--) {
        let y = Math.floor(Math.random() * x);
        let temp = cards[x];
        cards[x] = cards[y];
        cards[y] = temp;
    } 
    console.log("********************************* \n first player cards \n *********************************")
    for (let i = 0; i < 5; i++) {
        console.log(`${cards[i].Value} of ${cards[i].cardtype}`);
    }
    console.log("********************************* \n second player cards \n *********************************")
    for (let i = 5; i < 10; i++) {
        console.log(`${cards[i].Value} of ${cards[i].cardtype}`);
    }
}

function time()
{
    const day = new Date();
    const result = day.getTime();
    const date=day.getDate();
    const month=day.getMonth()+1;
    const year=day.getFullYear();
    const hour=day.getHours();
    const minute=day.getMinutes();
    const second=day.getSeconds();
    alert(`Today Date: ${date}
    Month: ${month}
    Year: ${year}
    Hour: ${hour}
    Minute: ${minute}
    Second: ${second}
    convert date into number: ${result}`);
}
function w()
{
    let word=prompt("enter value");
    const content=document.getElementById('content');
    content.innerHTML+=word;
}

function show()
{
    const img = new Image();
    img.src = "img2.jpeg";
    img.alt="this is html image";
    img.onload=function(){
        alert(`width : ${img.width} height : ${img.height} \n alt : ${img.alt}`)
    }
}
