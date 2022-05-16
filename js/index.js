// 实时时间显示
function time() {
    var vWeek, vWeek_s, vDay;
    vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month
    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "-" + month + "-" + day + "\t" + hours + ":" + minutes + ":" + seconds;

};
time()
setInterval("time()", 1000);

// 测量结果
let measure_back=document.getElementById("measure_back");
let measure_main=document.getElementById("measure_main");
function dialog_btn(){
    measure_back.style.display="block";
    measure_main.style.display="block";
}
function measure_cancel() {
    measure_main.style.display="none";
    measure_back.style.display="none";
}
function measure_confirm() {
    measure_main.style.display="none";
    measure_back.style.display="none";
}

// 功能区
var trdetect1 = document.getElementById("trdetect1")
var trdetect2 = document.getElementById("trdetect2")
var trdetect3 = document.getElementById("trdetect3")
var trdetect4 = document.getElementById("trdetect4")
var trpick1 = document.getElementById("trpick1")
var trpick2 = document.getElementById("trpick2")

var trmeasure1 = document.getElementById("trmeasure1")
var trmeasure2 = document.getElementById("trmeasure2")
var trdema1 = document.getElementById("trdema1")
var trdema2 = document.getElementById("trdema2")

function openCamera() {
    var ip = prompt("请输入相机IP地址")
    document.getElementById("pic1").setAttribute("src", "./asset/detect.png")
    document.getElementById("nav-radius1").style.backgroundColor = "#00FF00"
}
function openCamera2() {
    var ip = prompt("请输入相机IP地址")
    document.getElementById("pic1").setAttribute("src", "./asset/measure.png")
    document.getElementById("nav-radius2").style.backgroundColor = "#00FF00"
}

function production() {
    document.getElementById("pic1").setAttribute("src", "./asset/detect_result.png")
    trdetect1.innerHTML = '<td class="btbg2 font-center">1</td><td class="font-center">screw</td><td class="font-center">495</td><td class="font-center">383</td><td class="font-center">663</td><td class="font-center">150</td><td class="font-center">25</td><td class="font-center">0.93</td>'
    trdetect2.innerHTML = '<td class="btbg2 font-center">2</td><td class="font-center">bolt</td><td class="font-center">769</td><td class="font-center">340</td><td class="font-center">394</td><td class="font-center">95</td><td class="font-center">29</td><td class="font-center">0.90</td>'
}
function production2() {
    document.getElementById("pic1").setAttribute("src", "./asset/measure_result.png")
    setTimeout(() => {
        trmeasure1.innerHTML = '<td class="btbg2 font-center">1</td><td class="font-center">BO00000001</td><td class="font-center"></td><td class="font-center">4.88</td><td class="font-center"></td><td class="font-center"><button class="result_btn" onclick="dialog_btn()">合格</button></td>'
    },2000)
}
function stopDetect() {
    document.getElementById("pic1").setAttribute("src", "./asset/detect.png")
}
function stopMeasure() {
    document.getElementById("pic1").setAttribute("src", "./asset/measure.png")
}
function closeCamera() {
    document.getElementById("pic1").setAttribute("src", "./asset/source.png")
}
function derivedRecord() {
    alert("导出分拣记录")
}
// 标定测量
function demarcate(){
    trdema1.innerHTML = '<td class="btbg2 font-center">测量值/pixel</td><td class="font-center">screw</td><td class="font-center">208.3</td><td class="font-center">168.2</td><td class="font-center"></td><td class="font-center"><button class="form-btn" onclick="demarcate()">测量</button></td>'
    trdema2.innerHTML = '<td class="btbg2 font-center">标定系数/(pixel/mm)</td><td class="font-center">screw</td><td colspan="3"class="font-center">26.1</td><td class="font-center"><button class="form-btn">应用</button></td>'
}
// 登录功能
let login_back = document.getElementById("login_back");
let login_main = document.getElementById("login_main");
function loginSystem() {
    login_back.style.display = "block";
    login_main.style.display = "block";
}

let uname = document.getElementById("uname")
let pword = document.getElementById("pword")
function loginConfirm() {
    if (uname.value === "admin" && pword.value === "admin") {
        login_back.style.display = "none";
        login_main.style.display = "none";
        document.getElementById('userState').innerHTML = "管理员"
        document.getElementById('nav-exit-btn').style.backgroundColor = ""
        document.getElementById('nav-exit-btn').style.color = ""
        document.getElementById('nav-login-btn').style.backgroundColor = "#EEE9E9"
        document.getElementById('nav-login-btn').style.color = "#4682B4"
    } else {
        alert("用户或密码信息有误！请重新输入")
    }
}

// 退出功能
let exit_back = document.getElementById("exit_back");
let exit_main = document.getElementById("exit_main");
let euname = document.getElementById("euname")
let epword = document.getElementById("epword")
function exitSystem() {
    exit_back.style.display = "block";
    exit_main.style.display = "block";
}
function cancel() {
    exit_back.style.display = "none";
    exit_main.style.display = "none";
}
function confirm() {
    if (euname.value === "admin" && epword.value === "admin") {
        exit_back.style.display = "none";
        exit_main.style.display = "none";
        document.getElementById('userState').innerHTML = "未登录"
        login_back.style.display = "block";
        login_main.style.display = "block";
        uname.value = ''
        pword.value = ''
        document.getElementById('nav-login-btn').style.backgroundColor = ""
        document.getElementById('nav-login-btn').style.color = ""
        document.getElementById('nav-exit-btn').style.backgroundColor = "#EEE9E9"
        document.getElementById('nav-exit-btn').style.color = "#4682B4"
    } else {
        alert("用户或密码信息有误！请重新输入")
    }

}

function measureState(){
    document.getElementById('detect-btn').style.backgroundColor = "#4682B4"
    document.getElementById('detect-btn').style.color = "#FFFFFF"
    document.getElementById('measure-btn').style.backgroundColor = "#FFFFFF"
    document.getElementById('measure-btn').style.color = "#4682B4"
    document.getElementById('detect-form').style.display = 'none'
    document.getElementById('measure-form').style.display = 'block'
}
function detectState(){
    document.getElementById('detect-btn').style.backgroundColor = "#FFFFFF"
    document.getElementById('detect-btn').style.color = "#4682B4"
    document.getElementById('measure-btn').style.backgroundColor = "#4682B4"
    document.getElementById('measure-btn').style.color = "#FFFFFF"
    document.getElementById('detect-form').style.display = 'block'
    document.getElementById('measure-form').style.display = 'none'
}