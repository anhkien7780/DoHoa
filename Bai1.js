function main() {
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext('2d')
    ctx.fillStyle ='cyan'
    ctx.fillRect(0, 0, canvas.height, canvas.width)
    ctx.fillStyle = 'yellow'
    ctx.fillRect(10, 10, 150, 150)
}
