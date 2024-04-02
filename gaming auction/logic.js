// let players
// fetch('./players.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Use the data here
//   })
//   .catch(error => console.error('Error loading the JSON file:', error));
// console.log(players)

const images = [
    "plat_diamond.png",
    "gold.png",
    "unranked.png",
    "card.png",
    "sexy.png",
    "mergenta.webp"
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];}

    const videos = [
        "OMENSOLDF.mp4",
        "RAZESOLDF.mp4",
        "SAGESOLDF.mp4",
        "NOOBSOLD.mp4"
      ];
      
      function getRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
      }
var players = [
    { "dir": getRandomImage(), "ign": "stEiNer#chad", "crank": "Gold", "prank": "Plat 3", "role": "Yoru","slink": "OMENSOLDF.mp4" }, 
    { "dir":getRandomImage(), "ign": "bob the builder #noRR", "crank": "Unranked", "prank": "Plat 1", "role": "Deadlock","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "knapsack#8787X", "crank": "Platinum", "prank": "Plat 1", "role": "Omen","slink": getRandomVideo() },
    { "dir":getRandomImage(), "ign": "Hulkbuster#9272", "crank": "Platinum", "prank": "Same", "role": "Iso","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Hughjackman#buny", "crank": "Platinum", "prank": "Diamond ", "role": "Raze","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "POTLI#6969", "crank": "Platinum", "prank": "Plat 1", "role": "Phoenix ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "ZETRON #9944", "crank": "Platinum", "prank": "Plat 3", "role": "Killjoy","slink": getRandomVideo() },
    { "dir":getRandomImage(), "ign": "ChloroEthane", "crank": "Platinum", "prank": "Plat I", "role": "Brimstone ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "HaraHuaHu#Sad", "crank": "Immortal", "prank": "Immo 2", "role": "Yoru","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "FlukeGAWD#7106", "crank": "Diamond", "prank": "Diamond 3", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Baka #Bulla", "crank": "Platinum", "prank": "Plat 3", "role": "Omen","slink": getRandomVideo() },
    { "dir":getRandomImage(), "ign": "uchihamadara2600#2796", "crank": "Gold", "prank": "Diamond 2", "role": "Skye","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "NoFL1cks#plz", "crank": "Dia ", "prank": "Dia 2", "role": "Sova","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "BAIGUN #001", "crank": "Gold", "prank": "Diamond 1", "role": "Ryena","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Aniii#1802", "crank": "Gold", "prank": "Plat 2", "role": "Raze","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "HuMonster911#9570", "crank": "Unranked", "prank": "Silver 1", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Vedz #9731", "crank": "Silver", "prank": "Silver 2", "role": "Breach","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Magnum#1893", "crank": "Silver", "prank": "Silver3", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "chrotic#b3T4 ", "crank": "Silver", "prank": "Gold ", "role": "Raze","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "MORTIS1919#6177", "crank": "Silver", "prank": "Silver 3", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "BHEDIYA#8971", "crank": "Silver", "prank": "Silver 3", "role": "Phoenix ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "ASVIN 7#gmgkm", "crank": "Silver", "prank": "Gold 3", "role": "Gekko","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "novaaa#00000", "crank": "Silver", "prank": "Silver 2", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Warcrane#5903", "crank": "Silver", "prank": "S2", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "AckermanLevi023#5509", "crank": "Silver", "prank": "Silver 2", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "shemissme#aww", "crank": "Silver", "prank": "Gold 2", "role": "Cypher","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "VI 8502#FLY", "crank": "Silver", "prank": "Silver", "role": "Killjoy","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "StormHawk #9118", "crank": "Silver", "prank": "Silver 3", "role": "Cypher","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "M4G Reaper #1580", "crank": "Unranked", "prank": "Gold 1", "role": "Neon, Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Klaus#nhk", "crank": "Gold", "prank": "G2", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Vishal#9885", "crank": "Bronze", "prank": "Silver ", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "my bad (#crack)", "crank": "Silver", "prank": "Gold 1", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "KICKBATAUSKI#0000", "crank": "Silver", "prank": "Gold 2", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "HackBeast69#5519", "crank": "Silver", "prank": "Silver 3", "role": "Raze","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "LoneWolf#1525", "crank": "Iron", "prank": "Iron III", "role": "Iso","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Maverick7#COOL", "crank": "Iron", "prank": "Bronze 2", "role": "Raze","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Sedundnes#7834", "crank": "Bronze", "prank": "Bronze 3", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "CRUSHERBANIYA ", "crank": "Unranked", "prank": "Unranked", "role": "Phoenix ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "BLUE69 #SAHIL", "crank": "Bronze", "prank": "Bronze 2", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "PANDIT JI#9889", "crank": "Unranked", "prank": "BRONZE 3", "role": "Cypher","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Heloo#3083", "crank": "Unranked", "prank": "0", "role": "Neon","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "TANAY#4324", "crank": "Unranked", "prank": "bronzze 1", "role": "Fade","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "OnEtAp#gojo", "crank": "Iron", "prank": "Iron 3", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "VimdhayakJi", "crank": "Unranked", "prank": "Iron", "role": "Phoenix","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Catwoman#9856", "crank": "Bronze", "prank": "b2", "role": "Gekko","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Daredevil #7329", "crank": "Bronze", "prank": "Bronze 3", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "LordKazekage#GAARA", "crank": "Bronze", "prank": "Bronze 3", "role": "Killjoy","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "HARSH#6501", "crank": "Unranked", "prank": "Unranked", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Plebsicle#2677", "crank": "Unranked", "prank": "Unranked", "role": "Neon","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "streaky54 #3328", "crank": "Bronze", "prank": "Bronze 2", "role": "Fade ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Mr7Chief #COLD", "crank": "Iron", "prank": "Iron 3", "role": "Viper ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Inferno #mani", "crank": "Iron", "prank": "iron 3", "role": "sova","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Madzy#6576", "crank": "Iron", "prank": "Bronze 1", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Elemeno Pee #625", "crank": "Bronze", "prank": "Bronze 3", "role": "Neon","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Momo#8138", "crank": "Bronze ", "prank": "Bronze 3", "role": "Omen ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "JoginderJogi#3155", "crank": "Iron", "prank": "Bronze 1", "role": "Gekko","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "noex#711", "crank": "Iron", "prank": "Iron", "role": "Jett","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Direwolfie#guzu", "crank": "Unranked", "prank": "Bronze 1", "role": "Reyna","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Freal07#9874", "crank": "Bronze", "prank": "Bronze 2", "role": "Cypher","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "saturnrulz#6132", "crank": "Bronze", "prank": "Bronze 2", "role": "Sage","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "Saavaj #2512", "crank": "Iron", "prank": "Bronze 2", "role": "Phoenix ","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "ObatMen #4610", "crank": "Iron", "prank": "Iron league 1", "role": "Omen","slink": getRandomVideo() },
    { "dir": getRandomImage(), "ign": "KING TEJAS #3451", "crank": "Unranked", "prank": "Unranked", "role": "Sage","slink": getRandomVideo()}
]


let counter = 0
let state = 0
let p = -1
let f = [["t", "Diaosama"], ["t", "Aspect"], ["t", "RAJ"], ["t", "SAL"], ["t", "WhatDaDawgDoin"], ["t", "L1GHT"], ["t", "VALIANT"], ["t", "ATHEX"], ["t", "PLAYERINSANE"], ["t", "CHIGGIDAKU"], ["t", "BHAGWAN"]]
let tn = ["ECO FRAGGERS", "KHILONA SNIPERS", "AAPASHAYAM KIRKIRII", "PEW PEW POTATOES", "BKL", "COMLESS V DOBARA", "CYPHER'S CREED", "BODMASH LADKE", "5 STAR MEOW", "OTAT MEIN", "SINGLE FOR LIFE"]

const counterValue = document.getElementById('counter-value')
const incrBtn1 = document.getElementById('incr-20-btn')
const incrBtn2 = document.getElementById('incr-35-btn')
const incrBtn3 = document.getElementById('incr-50-btn')
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const nextBtn = document.querySelector('#next')
const resetBtn = document.querySelector('#reset')
const soldBtn = document.querySelector('#sold')



incrBtn1.addEventListener('click', () => {
    counter += 20;
    counterValue.innerHTML = counter;
});

incrBtn2.addEventListener('click', () => {
    counter += 35;
    counterValue.innerHTML = counter;
});

incrBtn3.addEventListener('click', () => {
    counter += 50;
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', reset);

function reset() {
    counter = 0
    counterValue.innerHTML = counter;
    state = 0
}

function setState(num) {
    state = num
    alert("📢 | " + tn[state - 1]);

}

const downloadFile = () => {
    const link = document.createElement("a");
    const content = f;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};

nextBtn.addEventListener('click', next);

function next() {
    // alert("Moving to next Player 🤝");
    console.log(players)
    p += 1
    if (players.length < p)
        p = 0
    if (players.length != 0) {
        document.getElementById("player").innerHTML =
            `
        <img src=${players[p].dir} alt="" srcset="">
            <h3 id="p-name" style="background-color:white;color:black;border-radius:0.3rem;margin-left:10px;margin-right:10px">Name : ${players[p].ign}</h3>
            <h3 id="p-rank" style="background-color:white;color:black;border-radius:0.3rem;margin-left:10px;margin-right:10px">Current Rank : ${players[p].crank}</h3>
            <h3 id="p-rank" style="background-color:white;color:black;border-radius:0.3rem;margin-left:10px;margin-right:10px">Peak Rank : ${players[p].prank}</h3>
            <h3 id="p-rank" style="background-color:white;color:black;border-radius:0.3rem;margin-left:10px;margin-right:10px">Agent : ${players[p].role}</h3>
            `
    }
    else {
        alert("Auction Finished | 😎");
        downloadFile()
        document.getElementById("name1").innerHTML = ``
        document.getElementById("name2").innerHTML = ``
        document.getElementById("rank").innerHTML = ``
        document.getElementById("temp").innerHTML = `
    <video id="background-video1" autoplay loop>
    "<source src="FINALF.mp4" type='video/mp4'>"
    </video>
    `
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


soldBtn.addEventListener('click', sold);

function sold() {
    if (counter == 0) {
        alert("Aise nahi Bikega apun ☠️");
    }
    else if (state == 0) {
        alert("No team assigned 😭");
    }
    else if (counter != 0 && state != 0) {
        // alert("Bik Gya  !! 🥹");
        modal.style.display = "block";
        if (state == 1) {
            console.log(state)
            tm1.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 2) {
            console.log(state)
            tm2.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 3) {
            console.log(state)
            tm3.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 4) {
            console.log(state)
            tm4.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 5) {
            console.log(state)
            tm5.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 6) {
            console.log(state)
            tm6.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 7) {
            console.log(state)
            tm7.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 8) {
            console.log(state)
            tm8.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 9) {
            console.log(state)
            tm9.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 10) {
            console.log(state)
            tm10.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        else if (state == 11) {
            console.log(state)
            tm11.innerHTML -= counter
            counter = 0
            counterValue.innerHTML = counter;
        }
        f[state - 1].push(players[p].ign)
        players[p].team = state
        console.log(p)
        console.log(players[p].slink)
        document.getElementById("temp").innerHTML = `
    <video id="background-video1" autoplay loop muted>
    "<source src="${players[p].slink}" type='video/mp4'>"
    </video>
    `
        document.getElementById("name2").innerHTML = players[p].ign
        document.getElementById("rank").innerHTML = tn[state - 1]
        players.splice(p, 1)
        p -= 1
        state = 0
        console.log(f)
        console.log(players)
        next()
    }
}

