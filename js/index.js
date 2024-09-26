// 致命终局用js

// 监听网站加载
window.addEventListener("load", function () {

    // 要更换的图片存储数据
    const chara_data = [
        { url: './image/chara_1.png' }, { url: './image/chara_2.png' }, { url: './image/chara_3.png' }, { url: './image/chara_4.png' },
    ]

    // 角色界面应变更的标签定义、轮播圆点定义、轮播左按钮与右按钮定义
    const chara_img = document.querySelector('.chara_pic img');
    let silder_ul = document.querySelector('.pic_silder ul');

    // 要更换的CG图片存储数据
    const cg_data = [
        {url: './image/cg_1.png'}, {url:'./image/cg_2.png'},{url:'./image/cg_3.jpg'},{url:'./image/cg_4.jpg'}
    ]

    // CG鉴赏应变更的标签定义、轮播圆点定义、轮播左按钮与右按钮定义
    const gra = document.querySelector('#graphic');

    // 执行
    cre_silder(chara_img, silder_ul, chara_data);

    // 轮播图实现函数
    function cre_silder(img, silder, data) {

        // 图片初始化
        img.src = data[0].url;

        // 创建圆点标识
        for (var i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            silder.appendChild(li);
        }
        silder.children[0].className = 'active';

        // 引入左右按钮
        const prev = this.document.querySelector('.prev');
        const next = this.document.querySelector('.next');
        let a = 0; // 信号量
        let f = true; // 用于阻止按钮的信号量

        // 定义左按钮功能
        prev.addEventListener('click', function () {
            if (f) {
                img.style.opacity = 0;
                silder.children[a].classList.remove('active');
                a--;
                if (a < 0) {
                    a = data.length - 1;
                }
                f = false;
            }
            img.addEventListener('transitionend', function () {
                img.src = data[a].url;
                img.style.opacity = 1;
                silder.children[a].classList.add('active');
                img.addEventListener('transitionend', function () { f = true; });
            })
        });

        // 定义右按钮功能
        next.addEventListener('click', function () {
            if (f) {
                img.style.opacity = 0;
                silder.children[a].classList.remove('active');
                a++;
                if (a >= data.length) {
                    a = 0;
                }
                f = false;
            }
            img.addEventListener('transitionend', function () {
                img.src = data[a].url;
                img.style.opacity = 1;
                silder.children[a].classList.add('active');
                img.addEventListener('transitionend', function () { f = true; });
            })
        });
    }

});