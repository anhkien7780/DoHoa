function main() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0, 0, canvas.height, canvas.width);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(120, 10, 150, 150);
}