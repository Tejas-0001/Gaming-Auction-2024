const fs = require('fs')
fs.readFile('sample.txt', (err, data) => {
    if (err) throw err;
    d = (data.toString());
    arr = d.split(",")
    f = []
    t = []
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == "t") {
            f.push(t)
            t = []
        }
        else {
            t.push(arr[i])
        }
    }
    let tn = ["Uncle ji kill dila dee J", "Khilona Snipers", "DAB DAB DAB", "Moje More", "batata hu sochke", "MAAF KARDO BHAI", "Trigger Happy Terrorists", "Commless V"]
    f.push(t)
    console.log(f)
    document.getElementById("k1").innerHTML = `
    <h1 class="tnf">${tn[0]}</h1>
                <h2 class="tnmf">${f[0][0]}</h2>
                <h2 class="tnmf">${f[0][1]}</h2>
                <h2 class="tnmf">${f[0][2]}</h2>
                <h2 class="tnmf">${f[0][3]}</h2>
                <h2 class="tnmf">${f[0][4]}</h2>
            </div>
    `
    document.getElementById("k2").innerHTML = `
    <h1 class="tnf">${tn[1]}</h1>
                <h2 class="tnmf">${f[1][0]}</h2>
                <h2 class="tnmf">${f[1][1]}</h2>
                <h2 class="tnmf">${f[1][2]}</h2>
                <h2 class="tnmf">${f[1][3]}</h2>
                <h2 class="tnmf">${f[1][4]}</h2>
            </div>
    `
    document.getElementById("k3").innerHTML = `
    <h1 class="tnf">${tn[2]}</h1>
                <h2 class="tnmf">${f[2][0]}</h2>
                <h2 class="tnmf">${f[2][1]}</h2>
                <h2 class="tnmf">${f[2][2]}</h2>
                <h2 class="tnmf">${f[2][3]}</h2>
                <h2 class="tnmf">${f[2][4]}</h2>
            </div>
    `
    document.getElementById("k4").innerHTML = `
    <h1 class="tnf">${tn[3]}</h1>
                <h2 class="tnmf">${f[3][0]}</h2>
                <h2 class="tnmf">${f[3][1]}</h2>
                <h2 class="tnmf">${f[3][2]}</h2>
                <h2 class="tnmf">${f[3][3]}</h2>
                <h2 class="tnmf">${f[3][4]}</h2>
            </div>
    `
    document.getElementById("k5").innerHTML = `
    <h1 class="tnf">${tn[4]}</h1>
                <h2 class="tnmf">${f[4][0]}</h2>
                <h2 class="tnmf">${f[4][1]}</h2>
                <h2 class="tnmf">${f[4][2]}</h2>
                <h2 class="tnmf">${f[4][3]}</h2>
                <h2 class="tnmf">${f[4][4]}</h2>
            </div>
    `
    document.getElementById("k6").innerHTML = `
    <h1 class="tnf">${tn[5]}</h1>
                <h2 class="tnmf">${f[5][0]}</h2>
                <h2 class="tnmf">${f[5][1]}</h2>
                <h2 class="tnmf">${f[5][2]}</h2>
                <h2 class="tnmf">${f[5][3]}</h2>
                <h2 class="tnmf">${f[5][4]}</h2>
            </div>
    `
    document.getElementById("k7").innerHTML = `
    <h1 class="tnf">${tn[6]}</h1>
                <h2 class="tnmf">${f[6][0]}</h2>
                <h2 class="tnmf">${f[6][1]}</h2>
                <h2 class="tnmf">${f[6][2]}</h2>
                <h2 class="tnmf">${f[6][3]}</h2>
                <h2 class="tnmf">${f[6][4]}</h2>
            </div>
    `
    document.getElementById("k8").innerHTML = `
    <h1 class="tnf">${tn[7]}</h1>
                <h2 class="tnmf">${f[7][0]}</h2>
                <h2 class="tnmf">${f[7][1]}</h2>
                <h2 class="tnmf">${f[7][2]}</h2>
                <h2 class="tnmf">${f[7][3]}</h2>
                <h2 class="tnmf">${f[7][4]}</h2>
            </div>
    `
    document.getElementById("k9").innerHTML = `
    <h1 class="tnf">${tn[8]}</h1>
                <h2 class="tnmf">${f[8][0]}</h2>
                <h2 class="tnmf">${f[8][1]}</h2>
                <h2 class="tnmf">${f[8][2]}</h2>
                <h2 class="tnmf">${f[8][3]}</h2>
                <h2 class="tnmf">${f[8][4]}</h2>
            </div>
    `
})
