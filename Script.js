window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById("left").querySelector('.hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.getElementById("left").querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById("left").querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
        if (date.getHours() == 10 && date.getMinutes() == 30) {
        alert("Budzik 10:30!!!")
    }

}, 1000);

window.setInterval(function () {
    const date = new Date();
    var i = date.getHours();
    var hr = (i - 2);
    const hours = document.getElementById("middle").querySelector('.hours')
    hours.style.transform = `rotate(${hr / 12 * 360}deg)`;
    const minutes = document.getElementById("middle").querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById("middle").querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    var i = date.getHours();
    var hr = (i - 6);
    const hours = document.getElementById("right").querySelector('.hours')
    hours.style.transform = `rotate(${hr / 12 * 360}deg)`;
    const minutes = document.getElementById("right").querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById("right").querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    var i = date.getHours();
    var hr = (i + 1);
    const hours = document.getElementById("right4").querySelector('.hours')
    hours.style.transform = `rotate(${hr / 12 * 360}deg)`;
    const minutes = document.getElementById("right4").querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById("right4").querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    var i = date.getHours();
    var hr = (i + 7);
    const hours = document.getElementById("right5").querySelector('.hours')
    hours.style.transform = `rotate(${hr / 12 * 360}deg)`;
    const minutes = document.getElementById("right5").querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById("right5").querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);