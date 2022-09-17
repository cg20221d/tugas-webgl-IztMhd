function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        // 7 atas persegi panjang
        -0.85, 0.6,  // A: 7 kiri atas
        -0.35, 0.6,   // B: 7 kanan atas
        -0.85, 0.4,   // C: 7 kiri bawah
        -0.85, 0.4,   // C: 7 kiri bawah.v2
        -0.35, 0.6,   // B: 7 kanan atas.v2
        -0.35, 0.4,    // G: kanan bawah
        
        // 7 bawah
        -0.48, 0.4,    // D: tengah
        -0.35, 0.4,    // G: kanan bawah.v2
        -0.6, -0.4,    // E: paling bawah kanan
        -0.6, -0.4,    // E: paling bawah kanan.v2
        -0.74, -0.4,    // F: sebelah E
        -0.48, 0.4,    // D: tengah.v2

        // 5 atas
        -0.2, 0.6,  // A: 5 kiri atas
        0.3, 0.6,   // B: 5 kanan atas
        -0.2, 0.4,   // C: 5 kiri bawah
        -0.2, 0.4,   // C: 5 kiri bawah.v2
        0.3, 0.6,   // B: 5 kanan atas.v2
        0.3, 0.4,    // G: kanan bawah
        
        // 5 tengah
        -0.2, 0.4,   // C: 5 kiri atas
        -0.07, 0.4,    // G: kanan atas
        -0.2, 0.2,   // C: 5 kiri bawah
        -0.2, 0.2,   // C: 5 kiri bawah.v2
        -0.07, 0.4,    // G: kanan atas.v2
        -0.07, 0.2,   // C: 5 kanan bawah

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode =  `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    void main() {
        float r = 0.0;
        float g = 0.0;
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o

    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0,      0.65,    0.0,    1.0);  // Oranye
    //            Merah     Hijau   Biru    Transparansi
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 24);
}