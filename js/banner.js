window.onload = function () {
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let banner = document.getElementById("banner");
    let list = document.getElementById("list");
    let buttons = document.getElementById("buttons").getElementsByTagName("span");
    let index = 1;
    let timer;
    let animated = false;

    let bannerWidth = banner.clientWidth
    let imgsLength = list.children.length
    let maxListLeft = bannerWidth * (imgsLength - 2)
    list.style.width = bannerWidth * imgsLength + 'px'

    function shownButton() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = "on";
    }
    function animate(offset) {
        let time = 300;
        let inteval = 10;
        let speed = offset / (time / inteval);
        animated = true;//更改全局变量，防止跳图
        let newLeft = parseInt(list.style.left) + offset;
        function go() {
            if ((speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                animated = false;//全局变量
                list.style.left = newLeft + "px";
                if (newLeft > -bannerWidth) {
                    list.style.left = -maxListLeft + "px";
                };
                if (newLeft < -maxListLeft) {
                    list.style.left = -bannerWidth + "px";
                };
            }
        }
        go();
    };

    prev.onclick = function () {
        if (!animated) {
            if (index == 1) {
                index = 5;
            } else {
                index -= 1;
            }

            shownButton();
            animate(bannerWidth);
        }
    };
    next.onclick = function () {
        if (!animated) {
            if (index == 5) {
                index = 1;
            } else {
                index += 1;
            }
            shownButton();
            animate(-bannerWidth);
        }
    };

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className == "on") {
                return;
            }
            let myIndex = parseInt(this.getAttribute("index"));
            let offset = -bannerWidth * (myIndex - index);
            if (!animated) {
                animate(offset);
            }
            index = myIndex;
            shownButton();

        }
    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(timer);
    }
    play();
    banner.onmouseover = stop;
    banner.onmouseout = play;
}