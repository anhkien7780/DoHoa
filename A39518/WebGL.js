var VSHADER_SOURCE =
    'precision mediump float;' + 
    'attribute vec4 a_position;' +
    'attribute float a_pointSize;'+
    'void main(){' +
    'gl_Position = a_position;' +
    'gl_PointSize = a_pointSize;' +
    '}';
var FSHADER_SOURCE =
    'precision mediump float;' + 
    'uniform vec4 u_color;'+
    'void main(){' +
    'gl_FragColor = u_color;' +
    '}';


function main() {
    var x = parseFloat(document.getElementById("x_position").value)
    var y = parseFloat(document.getElementById("y_position").value)
    var z = parseFloat(document.getElementById("z_position").value)
    var pointSize = parseFloat(document.getElementById("point_size").value)
    var red = parseFloat(document.getElementById('red').value)
    var green = parseFloat(document.getElementById('green').value)
    var blue = parseFloat(document.getElementById('blue').value)
    var canvas = document.getElementById("webgl")
    var gl = getWebGLContext(canvas);
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    var u_color = gl.getUniformLocation(gl.program, 'u_color')
    gl.uniform4f(u_color, red, green, blue, 1.0)
    var a_position = gl.getAttribLocation(gl.program, 'a_position');
    gl.vertexAttrib4f(a_position, x, y, z, 1.0);
    var a_pointSize = gl.getAttribLocation(gl.program, 'a_pointSize')
    gl.vertexAttrib1f(a_pointSize, pointSize)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}

function update(){
    var x = parseFloat(document.getElementById("x_position").value)
    var y = parseFloat(document.getElementById("y_position").value)
    var z = parseFloat(document.getElementById("z_position").value)
    var pointSize = parseFloat(document.getElementById("point_size").value)
    var red = parseFloat(document.getElementById('red').value)
    var green = parseFloat(document.getElementById('green').value)
    var blue = parseFloat(document.getElementById('blue').value)
    var canvas = document.getElementById("webgl");
    var gl = getWebGLContext(canvas);
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    var u_color = gl.getUniformLocation(gl.program, 'u_color')
    gl.uniform4f(u_color, red, green, blue, 1.0)
    var a_position = gl.getAttribLocation(gl.program, 'a_position');
    gl.vertexAttrib4f(a_position, x, y, z, 1.0);
    var a_pointSize = gl.getAttribLocation(gl.program, 'a_pointSize')
    gl.vertexAttrib1f(a_pointSize, pointSize)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}