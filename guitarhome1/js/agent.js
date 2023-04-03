let smartPhons=['iphone','ipod','ipad','android','opera mini','opera mobi','nokia'
, 'webos','window ce','blackberry','iemobile','sonyericssion'];
//스마트 폰 구분
for(let i in smartPhons) {
    if(navigator.userAgent.toLocaleLowerCase().match(new RegExp(smartPhons[i]))) {
        document.location='http://zxcv32141.dothome.html';
    }
}