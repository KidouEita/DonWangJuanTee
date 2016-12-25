// Form:題目,選項一,選項二,選項三,選項四,難度等級,題目類型,答案,解析(null:略)
/* 難度:1~3 3最難 題目類型:1,形音義 2,唐詩 3,標點符號 */
var chi = ["「戴」的部首為?,戈部,田部,土部,弋部,2,1,A,null",
           "以下何者部首不是水部?,淇,河,馮,溪,1,1,C,null",
           "「床前明月光，疑是地上霜。舉頭望明月，低頭思故鄉。」為著名的唐詩《靜夜思》，請問作者是?,劉禹錫,杜甫,孟浩然,李白,1,2,D,null",
           "哪種標點符號是表示聲音的延續或是部分內容的忽略?,破折號,刪節號,驚嘆號,句號,1,4,B,null",
           "下列哪一個不是李白的所擁有的稱號?,謫仙人,青蓮居士,醉吟先生,酒仙,3,2,C,null"];

/* Check Repeated or not */
//var chiRe = [0,0,0,0,0];

/* 難度:1~3 3最難 題目類型:1,基礎四則運算 2,實際應用題 */
var math = ["試計算 4×2-6÷3+5-3+4+1 之解答,12,11,13,10,2,1,C,null",
            "試計算 3×(4-2)÷6-(8-7) 之解答,0,3,2,5,2,1,A,null",
            "蘋果園內有30顆蘋果，小明一次可以拿4顆，在蘋果不增加的狀況下，小明至少需要拿幾次才能全部拿完?,30次,4次,7次,8次,1,2,D,null",
            "陳老師認為他的課的三次考試平均必須要66分才能及格，舟天子前兩次分別考了54分和87分，請問第三次必須要考多少分才不會無法及格,57分,49分,3分,50分,1,2,A,null",
            "蘋果園內有40顆蘋果，小均每周的星期三會去拿3顆，從某周的星期一開始且蘋果不增加的狀況下，從一開始到拿完之間共經過了幾次星期四?,14次,13次,12次,10次,3,2,B,null"];

/* Check Repeated or not */
//var mathRe = [0,0,0,0,0];

/* 難度:1~3 3最難 題目類型:1,物理 2,化學 3,生物 */
var sci = ["一公斤的鐵、一公斤的棉花和一公斤的空氣三者中何者質量最重?,鐵,棉花,空氣,三者相同,1,1,D,null",
           "何種試劑是拿來偵測是否醣類?,本氏液,碘液,硫酸銅,氯化亞鈷,2,1,A,null",
           "何者不是光合作用過程會生成的物質?,水,氧氣,二氧化碳,葡萄糖,2,3,C,null",
           "動滑輪是屬於以下何種類型的工具?,費力費時,省力費時,費力省時,省力省時,1,2,B,null",
           "以下何種動物不屬於昆蟲?,螞蟻,蟑螂,蚱蜢,蜘蛛,1,3,D,null"];

/* Check Repeated or not */
//var sciRe = [0,0,0,0,0];

var enemyType; // 0 = Chi,1 = Math,2 = Sci
var answer; // A,B,C,or D
var currentQue;

$(document).ready(function () {

    enemyType = Math.floor(Math.random() * 3);

    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    var Health1 = localStorage.getItem("Health");
    var Health2 = 100;
    $('#status1')[0].style.left = "100px";
    $('#status1')[0].style.top = "50px";
    $('#status2')[0].style.left = "400px";
    $('#status2')[0].style.top = "360px";
    $('.progress-bar')[0].style.width = Health2 + "%";
    $('.progress')[0].style.width = "360px";
    $('.progress-bar')[1].style.width = Health1 + "%";
    $('.progress')[1].style.width = "360px";

    function nextQue() {
        var queNum;
        /* Decide Enemy */
        switch (enemyType) {
        case 0:
            queNum = Math.floor(Math.random() * chi.length);
            currentQue = chi[queNum].split(',');
            $('.monster')[0].style.background = "url('Source/Pic/Chi.png')";
            $('#monsterName').text("國文課本");
            break;
        case 1:
            queNum = Math.floor(Math.random() * math.length);
            currentQue = math[queNum].split(',');
            $('.monster')[0].style.background = "url('Source/Pic/Math.png')";
            $('#monsterName').text("數學課本");
            break;
        case 2:
            queNum = Math.floor(Math.random() * sci.length);
            currentQue = sci[queNum].split(',');
            $('.monster')[0].style.background = "url('Source/Pic/Sci.png')";
            $('#monsterName').text("自然課本");
            break;
        }

        /* Change the text on talk board */
        $('#Que').text(currentQue[0]);
        $('#A').val(currentQue[1]);
        $('#B').val(currentQue[2]);
        $('#C').val(currentQue[3]);
        $('#D').val(currentQue[4]);
        answer = currentQue[7];
    }

    $('.btn').click(function () {
        console.debug(event.toElement.id + " is Clicked");
        if (event.toElement.id == answer) ansCorrect();
        else ansWrong();

        if (Health2 <= 0) {
            localStorage.setItem("Health", Health1);
            location.replace("route101.html");
            console.log("Battle Win!");
        } else if (Health1 <= 0) {
            console.log("Battle Lose!");
        } else nextQue();

        function ansCorrect() {
            /* Do when Answer is Correct */
            console.debug("You're Right!");
            if (Health1 < 100) {
                Health1 += 5;
                if(Health1>100) Health1 = 100;
                if(Health1>50) $('.progress-bar')[1].style.backgroundColor = "chartreuse";
                else if(Health1>30) $('.progress-bar')[1].style.backgroundColor = "yellow"; 
            }
            switch (currentQue[5]) {
            case "1":
                Health2 -= 10;                    
                break;
            case "2":
                Health2 -= 20;
                break;
            case "3":
                Health2 -= 30;
                break;
            }
            $('.progress-bar')[1].style.width = Health1 + "%";
            $('.progress-bar')[0].style.width = Health2 + "%";
            if(Health2<=30) $('.progress-bar')[0].style.backgroundColor = "red";
            else if(Health2<=50) $('.progress-bar')[0].style.backgroundColor = "yellow";
        }

        function ansWrong() {
            /* Do when Answer isn't Correct */
            console.debug("You're Wrong!");
            switch (currentQue[5]) {
            case "1":
                Health1 -= 10;
                break;
            case "2":
                Health1 -= 20;
                break;
            case "3":
                Health1 -= 30;
                break;
            }
            $('.progress-bar')[1].style.width = Health1 + "%";
            if(Health1<=30) $('.progress-bar')[1].style.backgroundColor = "red";
            else if(Health1<=50) $('.progress-bar')[1].style.backgroundColor = "yellow";
        }
    });

    function keyListener(e) {
        switch (e.keyCode) {
        case 27:
            location.replace("route101.html");
            localStorage.setItem("Health", Health1);
            break;
        }
    }

    function keyupListener(e) {}


    nextQue(); // First Question

});