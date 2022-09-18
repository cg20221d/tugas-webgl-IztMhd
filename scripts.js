function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        // 7
        -0.68, 0.4,    // D: tengah
        -0.9, 0.4,   // C: 7 kiri bawah
        -0.9, 0.6,  // A: 7 kiri atas
        -0.6, 0.6,   // B: 7 kanan atas
        -0.6, 0.4,    // G: kanan bawah
        -0.72, -0.4,    // E: paling bawah kanan
        -0.8, -0.4,    // F: sebelah E

        // 5 
        -0.5, 0.6,  // A: 5 kiri atas
        -0.2, 0.6,   // B: 5 kanan atas
        -0.2, 0.4,    // C: kanan bawah
        -0.42, 0.4,    // D: tengah atas
        -0.42, 0.2,   // E: 5 tengah bawah
        -0.25, 0.2,   // F: 5 bulet atas
        -0.2, 0.1,   // G: 5 bulet bawah
        -0.2, -0.3,   // H: 5 bulet bawah atas
        -0.25, -0.4,   // I: 5 bulet bawah bawah
        -0.5, -0.4,   // J: 5 bulet bawah kiri bawah
        -0.5, -0.2,   // K: 5 bulet bawah kanan atas
        -0.29, -0.2,   // L: 5 bulet bawah bawah.v2
        -0.27, -0.15,   // M: 5 bulet bawah atas.v2
        -0.27, -0.05,   // N: 5 bulet bawah atas.v2
        -0.29, 0.0,   // O: 5 bulet bawah atas.v2
        -0.5, 0.0,   // P: 5 bulet bawah atas.v2

        // A kiri
        -0.1, -0.4, // A: kaki kiri kiri
        0.02, 0.6,  // B: atas kiri
        0.0, -0.4,  // C: kaki kiri kanan
        0.0, -0.4,  // D: kaki kiri kanan.v2
        0.02, 0.6,  // E: atas kiri.v2
        0.12, 0.6,  // F: tengah kanan
        // A kanan
        0.26, -0.4, // A: kaki kanan bawah
        0.14, 0.6,  // B: atas kanan
        0.16, -0.4, // C: kaki kiri bawah
        0.16, -0.4, // D: kaki kiri bawah.v2
        0.14, 0.6,  // E: atas kanan.v2
        0.04, 0.6,  // F: tengah kiri
        // A tengah
        0.0, 0.1,   // atas kiri
        0.15, 0.1,  // atas kanan
        0.0, -0.12,  // bawah kiri
        0.0, -0.12,  // bawah kiri
        0.15, 0.1,  // atas kanan
        0.15, -0.12  // bawah kanan
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

    //Angka
    gl.drawArrays(gl.LINE_LOOP, 0, 7);
    gl.drawArrays(gl.LINE_LOOP, 7, 16);
    //Huruf
    gl.drawArrays(gl.TRIANGLES, 23, 18);
}