$(function () {
    $('.mimg').append($('.slide_image').first().clone());
    $('.mimg').prepend($('.slide_image').eq(-2).clone());
    let index=1;
    moveSlider (index);
    $('.bx-pager-item').click (function () {
        index=$(this).index();
        moveSlider(index+1);
    });
    $('.slider_image_Left').click(function () {
        if (index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('.mimg').css('left',-5000);
            index=5;
            moveSlider(index);
        }
    });
    $('.slider_image_Right').click(function () {
        if(index < 5) {
            index++;
            moveSlider(index);
        }else {
            $('.mimg').css('left',0);
            index=0;
            moveSlider(index);
        }
    });
    //이미지 슬라이더 구현 함수
    function moveSlider (index) {
        $('.mimg').animate ({
            left: -(index*1000)
        },'siow');
        $('.bx-pager-item').removeClass('active');
        $('.bx-pager-item').eq(index-1).addClass('active');
    };
    //체크박스 전체동의
        $('#sAgreeAllChecked').click(function() {
            let checked = $(this).is(':checked');
            if(checked) {
                $(this).closest('.agreeAll').find('.input-check').prop('checked','true');
            }else {
                $(this).closest('.agreeAll').find('.input-check').prop('checked','false');
            }
        });
    });
// 전체 동의 체크박스 아이디sAgreeAllChecked
//체크 박스 클래스 check.prop("checked");