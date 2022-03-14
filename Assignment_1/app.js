
const ele = document.getElementsByTagName('body');
function changeBgColor(event) {
    const bgColor = event.target.value;
    ele[0].style.backgroundColor = bgColor;
}
