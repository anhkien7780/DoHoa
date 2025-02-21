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
    var canvas = document.getElementById("webgl")
    var gl = getWebGLContext(canvas);
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    var u_color = gl.getUniformLocation(gl.program, 'u_color')
    gl.uniform4f(u_color, 1.0, 1.0, 0.0, 1.0)
    var a_position = gl.getAttribLocation(gl.program, 'a_position');
    gl.vertexAttrib4f(a_position, -1, -1, 1.0, 1.0);
    var a_pointSize = gl.getAttribLocation(gl.program, 'a_pointSize')
    gl.vertexAttrib1f(a_pointSize, 20.0)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}