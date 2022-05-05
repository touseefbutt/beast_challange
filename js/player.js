//sound of this page
let player = document.querySelector("#player");
player.play();


//Set Player Names
const btnName = document.querySelector("#btnNames");
const txtfp = document.querySelector("#txtfp");
const txtsp = document.querySelector("#txtsp");
const fpname = document.querySelector("#fpname");
let fpscore = document.querySelector("#fpscore");
const spname = document.querySelector("#spname");
let spscore = document.querySelector("#spscore");
let result = document.querySelector("#result");


function nameScore() {
    fpname.innerHTML = txtfp.value;
    fpscore.innerHTML = "0";
    spname.innerHTML = txtsp.value;
    spscore.innerHTML = "0";
}

btnName.addEventListener('click', nameScore);




// let flag;
let turn = document.querySelector("#turn");
// Battle Ground Functions
function battleGround() {
    let c0, c1, c2, c3, c4, c5, c6, c7, c8;
    c0 = document.querySelector("#c0").value;
    c1 = document.querySelector("#c1").value;
    c2 = document.querySelector("#c2").value;
    c3 = document.querySelector("#c3").value;
    c4 = document.querySelector("#c4").value;
    c5 = document.querySelector("#c5").value;
    c6 = document.querySelector("#c6").value;
    c7 = document.querySelector("#c7").value;
    c8 = document.querySelector("#c8").value;



    if (c0 === "🧑🏻‍🦱" && c1 === "🧑🏻‍🦱" && c2 === "🧑🏻‍🦱") {
        result.innerHTML = `🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c0 === "🧑🏻‍🦱" && c3 === "🧑🏻‍🦱" && c6 === "🧑🏻‍🦱") {
        result.innerHTML = `🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c0 === "🧑🏻‍🦱" && c4 === "🧑🏻‍🦱" && c8 === "🧑🏻‍🦱") {
        result.innerHTML = `🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c1 === "🧑🏻‍🦱" && c4 === "🧑🏻‍🦱" && c7 === "🧑🏻‍🦱") {
        result.innerHTML = `🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c2 === "🧑🏻‍🦱" && c5 === "🧑🏻‍🦱" && c8 === "🧑🏻‍🦱") {
        result.innerHTML = ` 🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(` 🧑🏻‍🦱 has won`);
    }
    else if (c2 === "🧑🏻‍🦱" && c4 === "🧑🏻‍🦱" && c6 === "🧑🏻‍🦱") {
        result.innerHTML = `  🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c3 === "🧑🏻‍🦱" && c4 === "🧑🏻‍🦱" && c5 === "🧑🏻‍🦱") {
        result.innerHTML = `🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }
    else if (c6 === "🧑🏻‍🦱" && c7 === "🧑🏻‍🦱" && c8 === "🧑🏻‍🦱") {
        result.innerHTML = `   🧑🏻‍🦱 has won`;
        fpscore.innerHTML = "10";
        alert(`🧑🏻‍🦱 has won`);
    }

    //Player 2 Logic
    else if (c0 === "🧑🏻" && c1 === "🧑🏻" && c2 === "🧑🏻") {
        result.innerHTML = `🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`🧑🏻 has won`);
    }
    else if (c0 === "🧑🏻" && c3 === "🧑🏻" && c6 === "🧑🏻🧑🏻") {
        result.innerHTML = `🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`🧑🏻 has won`);
    }
    else if (c0 === "🧑🏻" && c4 === "🧑🏻" && c8 === "🧑🏻") {
        result.innerHTML = `🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`🧑🏻 has won`);
    }
    else if (c1 === "🧑🏻" && c4 === "🧑🏻" && c7 === "🧑🏻") {
        result.innerHTML = `🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`🧑🏻 has won`);
    }
    else if (c2 === "🧑🏻" && c5 === "🧑🏻" && c8 === "🧑🏻") {
        result.innerHTML = `  🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`  🧑🏻 has won`);
    }
    else if (c2 === "🧑🏻" && c4 === "🧑🏻" && c6 === "🧑🏻") {
        result.innerHTML = `  🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`  🧑🏻 has won`);
    }
    else if (c3 === "🧑🏻" && c4 === "🧑🏻" && c5 === "🧑🏻") {
        result.innerHTML = `  🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`  🧑🏻 has won`);
    }
    else if (c6 === "🧑🏻" && c7 === "🧑🏻" && c8 === "🧑🏻") {
        result.innerHTML = `  🧑🏻 has won`;
        spscore.innerHTML = "10";
        alert(`  🧑🏻 has won`);
    }
    else if ((c0 === "🧑🏻‍🦱" || c0 === "🧑🏻") && (c1 === "🧑🏻‍🦱" || c1 === "🧑🏻") && (c2 === "🧑🏻‍🦱" || c2 === "🧑🏻") && (c3 === "🧑🏻‍🦱" || c3 === "🧑🏻") && (c4 === "🧑🏻‍🦱" || c4 === "🧑🏻") && (c5 === "🧑🏻‍🦱" || c5 === "🧑🏻") && (c6 === "🧑🏻‍🦱" || c6 === "🧑🏻") && (c7 === "🧑🏻‍🦱" || c7 === "🧑🏻") && (c8 === "🧑🏻‍🦱" || c8 === "🧑🏻")) {
        result.innerHTML = "Hey Tic Tackers! It's a Tie";
        fpscore.innerHTML = "0";
        spscore.innerHTML = "0"
        alert("Hey Tic Tackers! It's a Tie");
    }
    else {
        if (flag == 1) {
            turn.innerHTML = `🧑🏻‍🦱 turn`;
        } else {
            turn.innerHTML = `🧑🏻 turn`;
        }
    }
}


// function to reset Battle Ground

function reset() {

    const a = document.querySelector("#c0").innerHTML ='';
    const b = document.querySelector("#c1").innerHTML = '';
    const c = document.querySelector("#c2").innerHTML = '';
    const d = document.querySelector("#c3").innerHTML = '';
    const e = document.querySelector("#c4").innerHTML = '';
    const f = document.querySelector("#c5").innerHTML = '';
    const g = document.querySelector("#c6").innerHTML = '';
    const h = document.querySelector("#c7").innerHTML = '';
    const i = document.querySelector("#c8").innerHTML = '';
    document.querySelector("#c0").value = a;
    document.querySelector("#c1").value = b;
    document.querySelector("#c2").value = c;
    document.querySelector("#c3").value = d;
    document.querySelector("#c4").value = e;
    document.querySelector("#c5").value = f; 
    document.querySelector("#c6").value = g;
    document.querySelector("#c7").value = h;
    document.querySelector("#c8").value = i;
    nameScore();
}


//assign values to tic tac toe boxes
flag = 1;
function turn1() {
    if (flag == 1) {
        document.querySelector("#c0").value = document.querySelector("#c0").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c0").value = document.querySelector("#c0").innerHTML = "🧑🏻";
        flag = 1;
    }
}

function turn2() {
    if (flag == 1) {
        document.querySelector("#c1").value = document.querySelector("#c1").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c1").value = document.querySelector("#c1").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn3() {
    if (flag == 1) {
        document.querySelector("#c2").value = document.querySelector("#c2").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c2").value = document.querySelector("#c2").innerHTML ="🧑🏻";
        flag = 1;
    }
}
function turn4() {
    if (flag == 1) {
        document.querySelector("#c3").value = document.querySelector("#c3").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c3").value = document.querySelector("#c3").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn5() {
    if (flag == 1) {
        document.querySelector("#c4").value = document.querySelector("#c4").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c4").value = document.querySelector("#c4").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn6() {
    if (flag == 1) {
        document.querySelector("#c5").value = document.querySelector("#c5").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c5").value = document.querySelector("#c5").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn7() {
    if (flag == 1) {
        document.querySelector("#c6").value =  document.querySelector("#c6").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c6").value = document.querySelector("#c6").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn8() {
    if (flag == 1) {
        document.querySelector("#c7").value = document.querySelector("#c7").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c7").value = document.querySelector("#c7").innerHTML = "🧑🏻";
        flag = 1;
    }
}
function turn9() {
    if (flag == 1) {
        document.querySelector("#c8").value = document.querySelector("#c8").innerHTML = "🧑🏻‍🦱";
        flag = 0;
    } else {
        document.querySelector("#c8").value = document.querySelector("#c8").innerHTML = "🧑🏻";
        flag = 1;
    }
}







