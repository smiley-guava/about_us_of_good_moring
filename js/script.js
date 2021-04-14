var jquery = require('jquery')
window.$ = window.jQuery = jquery

const PersonalIntro = [
    {
        "name": "林  蕎婷",
        "age": "22",
        "job": "工程師",
        "interest": "看劇、彈吉他、跳舞",
        "friendship": "1.高 2.富 3.帥",
        "intro": "我就是成大最靚的崽",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num1.png",
        "position": "-50px -200px"
    },
    {
        "name": "黃  元萱",
        "age": "22",
        "job": "工程師",
        "interest": "唱歌、追劇、看youtube、吸貓",
        "friendship": "1.養貓加分 2.會洗碗 3.搞笑幽默",
        "intro": "天竺鼠車車生小孩叫什麼？Ans: Pui囡",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num2.png",
        "position": "-80px -200px"
    },
    {
        "name": "王  伊婷",
        "age": "20",
        "job": "工程師",
        "interest": "睡覺、看動漫、追劇、看YouTube",
        "friendship": "1.? 2.?? 3.???",
        "intro": "我需要模板，讓其他人先說",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num3.png",
        "position": "-70px -350px"
    },
    {
        "name": "廖  徳為",
        "age": "22",
        "job": "設計師",
        "interest": "我對你沒有興趣",
        "friendship": "1.能看就好:) 2.喜歡唱歌 3.沖馬桶要蓋蓋子",
        "intro": "請找我去唱歌",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num4.png",
        "position": "-200px -320px"
    },
    {
        "name": "翁  嘉鴻",
        "age": "22",
        "job": "設計師",
        "interest": "打球、看劇、做設計",
        "friendship": "1.可以看 2.好相處 3.感覺對",
        "intro": "我不喜歡自我介紹",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num5.png",
        "position": "-50px -180px"
    },
    {
        "name": "蕭  子瑜",
        "age": "18",
        "job": "設計師",
        "interest": "看YouTube",
        "friendship": "xxxxxxxxxx",
        "intro": "ooooooooooooo",
        "photo": "https://luffy.ee.ncku.edu.tw/~kyojeong/hw4/picture/color/num6.png",
        "position": "-70px -240px"
    }
]
//var jquery = require('jquery')
window.$ = window.jQuery = jquery

const selectedPerson = document.getElementsByClassName('person');
var i;
// console.log(selectedPerson);

for (i = 0; i < selectedPerson.length; i++) {
    selectedPerson[i].addEventListener('click', onceHandler);
    const t2 = document.getElementById('t2');
    selectedPerson[i].addEventListener("mouseover", function (event) {
        // highlight the mouseenter target
        console.log(event.target.id)
        t2.className = "t2"
        var A = event.target.id
        switch (A) {
            case 'p1':
                t2.className = "0"
                break;
            case 'p2':
                t2.className = "1"
                break;
            case 'p3':
                t2.className = "2"
                break;
            case 'p4':
                t2.className = "3"
                break;
            case 'p5':
                t2.className = "4"
                break;
            case 'p6':
                t2.className = "5"
                break;
        }
    }, false);
}

document.getElementById('intro').style.display = "none";

// var introText = document.getElementById('intro_text');
var introName = document.getElementById('intro_name');
var introAge = document.getElementById('intro_age');
var introJob = document.getElementById('intro_job');
var introInterest = document.getElementById('intro_interest');
var introFriendShip = document.getElementById('intro_friendship');
var introOne = document.getElementById('intro_one');
// var Img = document.getElementById('intro_img');
var Img = document.getElementById('personal_img');
var flag = 1;

function onceHandler(event) {
    flag = 0;
    const t2 = document.getElementById('t2');
    var current_array_ = t2.className;
    Img.style.backgroundImage = 'url(' + PersonalIntro[current_array_].photo + ')';
    Img.style.backgroundPosition = PersonalIntro[current_array_].position;
    // alert("Wath ", event);
    // console.log(current_array_)

    document.getElementById('intro').style.display = "";

    document.getElementById('personal_img').style.animation = "try2 0.8s ease-out";
    document.getElementById('personal_intro').style.animation = "try 0.8s ease-out";
    introName.innerText = PersonalIntro[current_array_].name;
    introAge.innerText = PersonalIntro[current_array_].age;
    introJob.innerText = PersonalIntro[current_array_].job;
    introInterest.innerText = PersonalIntro[current_array_].interest;
    introFriendShip.innerText = PersonalIntro[current_array_].friendship;
    introOne.innerText = PersonalIntro[current_array_].intro;

}

$('html').click(function () {
    if (flag != "0") {
        // Hide the menus if visible
        document.getElementById('intro').style.display = "none";
    }
    else {
        flag = "1";
    }
});

