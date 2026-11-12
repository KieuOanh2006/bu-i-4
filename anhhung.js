var name = "Nguyễn Kiều Oanh";
var MSSV="31241025891";
document.write("Tôi tên là: " + name + "<br>");
document.write("MSSV: " + MSSV + "<br>");
document.write("Tôi sẽ quyết tâm trở thành siêu nhân!");
var level = 1;
var exp = 0;
var skillpoint = 5;
level ++;
xp=150 +(level-1)+200;
skillpoint =skillpoint + xp/10;
document.write("</br>" + name+ " - Anh Hùng JavaScript " + level + "<br>");
var strength=0.6*skillpoint+0.1*xp;
var ability=0.2*skillpoint+0.2*xp;
var intelligence=0.6*skillpoint+10*level;
document.write("</br>LEVEL UP!chúc mừng bạn đã lên cấp 3!xp+200");
xp=xp+300;
var nhapten=prompt("hãy nhập tên bạn");
if(nhapten==name){console.log("xin chào " + name + " bạn đã đăng nhập thành công!");
    intelligence=intelligence+5;
}
 else{console.log("Tên của mình mà không nhớ sao?");
    intelligence=intelligence-2;
}
var chonVAI = prompt("hãy chọn vai trò của bạn: a. Chiến binh b. Sát thủ c. Thợ săn");
switch(chonVAI){
    case "a":
    phancap="chienbinh";
    strength=strength+15;
    ability=ability-10;
    inetelligence=intelligence-5;
    break;
    case "b":
    phancap="Sát thủ";
    strength=strength-15;
    ability=ability+10;
    intelligence=intelligence+5;
    break;
    case "c":
    phancap="Thợ săn";
    strength=strength-15;
    ability=ability+15;
    BREAK;
}
document.write("</br>Chúc mừng bạn đã chọn vai trò: " + phancap + "<br>");
level = 4;
xp = xp + 700;
/* level + 100;// Khi lượng máu <= 0 thì bạn sẽ chết
console.log(strength); // Quyết định mức sát thương
console.log(agility); // Quyết định xác suất né đòn
console.log(intel); // Quyết định xác suất chí mạng
/*========================================================
Rồng Già
——–
Chậm chạp và yếu ớt hơn so với đồng loại, nhưng vẫn rất
nguy hiểm với khả năng phun lửa có thể gây sát thương chí
mạng rất cao
========================================================*/
var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;

var gameContinue = true;
while (gameContinue) {
// Anh hùng tấn công!
var heroHit = Math.random() * 100 > dragonAgi;
if (heroHit) {
dragonHealth = dragonHealth - strength;
alert('TRẢM LONG! Bạn gây sát thương ' + strength + ' điểm cho Rồng!');
var heroCritical = Math.random() * 100 < intel;
if (heroCritical) {
dragonHealth = dragonHealth - strength * 2; // Double damage
alert('CHÍ MẠNG! Bạn gây sát thương chí mạng thêm ' + strength * 2 + ' điểm cho Rồng!');
}
} else alert('XÍ HỤT! Rồng đã lượn tránh được đòn tấn công của Bạn!');
// Rồng tấn công!
var dragonHit = Math.random() * 100 > agility;
if (dragonHealth <= 0) {
// Rồng lên bàn thờ
gameContinue = false;
alert('CHIẾN THẮNG!!! Chúc mừng bạn đã chiến thắng!!!');
} else {
if (dragonHit) {
health = health - dragonStr;
alert('HỎA CẦU! Rồng gây sát thương ' + dragonStr + ' điểm cho Bạn!');
var dragonCritical = Math.random() * 100 < dragonInt;
if (dragonCritical) {
health = health - dragonStr * 2; // Double damage
alert('CHÍ MẠNG! Rồng gây sát thương chí mạng thêm ' + dragonStr * 2 + ' điểm cho Bạn!');
}
} else alert('XÍ HỤT! Bạn đã tránh được đòn tấn công từ Rồng!');
}
// Kiểm tra xem Anh Hùng có bị nướng?!
if (health <= 0) {
gameContinue = false;
alert('THẤT BẠI!!! Chúc mừng bạn đã có tên trên menu món tối của Rồng: Hiệp sĩ nướng lá lốt!');
}
};

