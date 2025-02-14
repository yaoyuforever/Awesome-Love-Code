$(function() {
    $('#yes').click(function(event) {
        modal('我就知道宝宝一定会愿意~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我爱你！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('请宝宝不要拒绝我嘛~', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('我要一直呆在宝宝身边', F);
}

function F() {
    modal('跟我走吧宝宝~', G);
}

function G() {
    modal('我们还要一起做好多好多的事', H);
}

function H() {
    modal('一起看日落', I);
}
 function I() {
    modal('一起旅游', J)
}
function I() {
    modal('一起做手工', J)
}
function I() {
    modal('一起面对未来的风雨', J)
}
function I() {
    modal('一起努力共同进步', J)
}
function I() {
    modal('爱你，么么哒！', J)
}

function J() {
    modal('我爱你，宝宝', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
