
var links = {
    setColor : function(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++) {
    alist[i].style.color = color; }
}
}

var Body = {
    setColor : function (color){
    document.querySelector('body').style.color = color;
},                  // 객체의 사이에는 ','를 찍어야 한다
    setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
}
}
function nightDayHandler(self){


if (self.value === 'night') {
self.value = 'day';
Body.setBackgroundColor('black');
Body.setColor('white');
links.setColor('powderblue');

} else {
self.value = 'night';
Body.setBackgroundColor('white');
Body.setColor('black');
links.setColor('blue');
}
}
