function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        // // 7 depan
        // -0.68, 0.4, 0.1,     1.0, 1.0, 1.0,  // D: tengah
        // -0.9, 0.4, 0.1,      1.0, 1.0, 1.0,  // C: 7 kiri bawah
        // -0.9, 0.6, 0.1,      1.0, 1.0, 1.0,  // A: 7 kiri atas
        // -0.6, 0.6, 0.1,      1.0, 1.0, 1.0,  // B: 7 kanan atas
        // -0.6, 0.4, 0.1,      1.0, 1.0, 1.0,  // G: kanan bawah
        // -0.72, -0.4, 0.1,    1.0, 1.0, 1.0,  // E: paling bawah kanan
        // -0.8, -0.4, 0.1,     1.0, 1.0, 1.0,  // F: sebelah E
        // // 7 belakang
        // -0.68, 0.4, -0.1,     1.0, 1.0, 1.0,  // D: tengah
        // -0.9, 0.4, -0.1,      1.0, 1.0, 1.0,  // C: 7 kiri bawah
        // -0.9, 0.6, -0.1,      1.0, 1.0, 1.0,  // A: 7 kiri atas
        // -0.6, 0.6, -0.1,      1.0, 1.0, 1.0,  // B: 7 kanan atas
        // -0.6, 0.4, -0.1,      1.0, 1.0, 1.0,  // G: kanan bawah
        // -0.72, -0.4, -0.1,    1.0, 1.0, 1.0,  // E: paling bawah kanan
        // -0.8, -0.4, -0.1,     1.0, 1.0, 1.0,  // F: sebelah E

        // // 5 
        // -0.5, 0.6,  // A: 5 kiri atas
        // -0.2, 0.6,   // B: 5 kanan atas
        // -0.2, 0.4,    // C: kanan bawah
        // -0.42, 0.4,    // D: tengah atas
        // -0.42, 0.2,   // E: 5 tengah bawah
        // -0.25, 0.2,   // F: 5 bulet atas
        // -0.2, 0.1,   // G: 5 bulet bawah
        // -0.2, -0.3,   // H: 5 bulet bawah atas
        // -0.25, -0.4,   // I: 5 bulet bawah bawah
        // -0.5, -0.4,   // J: 5 bulet bawah kiri bawah
        // -0.5, -0.2,   // K: 5 bulet bawah kanan atas
        // -0.29, -0.2,   // L: 5 bulet bawah bawah.v2
        // -0.27, -0.15,   // M: 5 bulet bawah atas.v2
        // -0.27, -0.05,   // N: 5 bulet bawah atas.v2
        // -0.29, 0.0,   // O: 5 bulet bawah atas.v2
        // -0.5, 0.0,   // P: 5 bulet bawah atas.v2

        // A kiri
        -0.1, -0.4, 0.1,    1.0,1.0,1.0,    // A: kaki kiri kiri
        0.02, 0.6, 0.1,     1.0,1.0,1.0,    // B: atas kiri
        0.11, 0.6, 0.1,     1.0,1.0,1.0,    // F: tengah kanan
        0.0, -0.4, 0.1,     1.0,1.0,1.0,    // C: kaki kiri kanan
        // A kanan
        0.26, -0.4, 0.1,    1.0,1.0,1.0,    // A: kaki kanan bawah
        0.14, 0.6, 0.1,     1.0,1.0,1.0,    // B: atas kanan
        0.05, 0.6, 0.1,     1.0,1.0,1.0,    // F: tengah kiri
        0.16, -0.4, 0.1,    1.0,1.0,1.0,    // C: kaki kiri bawah
        // A tengah
        0.0, 0.1, 0.1,      1.0,1.0,1.0,    // atas kiri
        0.15, 0.1, 0.1,     1.0,1.0,1.0,    // atas kanan
        0.15, -0.12, 0.1,   1.0,1.0,1.0,    // bawah kanan
        0.0, -0.12, 0.1,    1.0,1.0,1.0,    // bawah kiri
        // A kiri belakang
        -0.1, -0.4, -0.01,    1.0,1.0,1.0,    // A: kaki kiri kiri
        0.02, 0.6, -0.01,     1.0,1.0,1.0,    // B: atas kiri
        0.11, 0.6, -0.01,     1.0,1.0,1.0,    // F: tengah kanan
        0.0, -0.4, -0.01,     1.0,1.0,1.0,    // C: kaki kiri kanan
        // A kanan belakang
        0.26, -0.4, -0.01,    1.0,1.0,1.0,    // A: kaki kanan bawah
        0.14, 0.6, -0.01,     1.0,1.0,1.0,    // B: atas kanan
        0.05, 0.6, -0.01,     1.0,1.0,1.0,    // F: tengah kiri
        0.16, -0.4, -0.01,    1.0,1.0,1.0,    // C: kaki kiri bawah
        // A tengah belakang
        0.0, 0.1, -0.01,      1.0,1.0,1.0,    // atas kiri
        0.15, 0.1, -0.01,     1.0,1.0,1.0,    // atas kanan
        0.15, -0.12, -0.01,   1.0,1.0,1.0,    // bawah kanan
        0.0, -0.12, -0.01,    1.0,1.0,1.0,    // bawah kiri
        // A kiri luar 3d
        0.02, 0.6, 0.1,     0.631,0.631,0.631,    // B: atas kiri
        0.02, 0.6, -0.01,     0.631,0.631,0.631,    // B: atas kiri
        -0.1, -0.4, -0.01,    0.631,0.631,0.631,    // A: kaki kiri kiri
        -0.1, -0.4, 0.1,    0.631,0.631,0.631,    // A: kaki kiri kiri
        // A kanan luar 3d
        0.14, 0.6, 0.1,     0.631,0.631,0.631,    // B: atas kanan
        0.14, 0.6, -0.01,    0.631,0.631,0.631,    // A: kaki kanan bawah
        0.26, -0.4, -0.01,    0.631,0.631,0.631,    // A: kaki kanan bawah
        0.26, -0.4, 0.1,    0.631,0.631,0.631,    // A: kaki kanan bawah
        // A kiri dalem 3d
        0.0, -0.4, 0.1,     0.631,0.631,0.631,    // C: kaki kiri kanan
        0.0, -0.4, -0.01,     0.631,0.631,0.631,    // C: kaki kiri kanan
        0.032, -0.12, -0.01,    0.631,0.631,0.631,    // bawah kiri
        0.032, -0.12, 0.1,    0.631,0.631,0.631,    // bawah kiri
        // A kanan dalem 3d
        0.16, -0.4, 0.1,    0.631,0.631,0.631,    // C: kaki kiri bawah
        0.16, -0.4, -0.01,    0.631,0.631,0.631,    // C: kaki kiri bawah
        0.128, -0.12, -0.01,   0.631,0.631,0.631,    // bawah kanan
        0.128, -0.12, 0.1,   0.631,0.631,0.631,    // bawah kanan
        // A tengah dalem kanan 3d
        0.105, 0.1, 0.1,     0.631,0.631,0.631,    // atas kanan
        0.105, 0.1, -0.01,     0.631,0.631,0.631,    // atas kanan
        0.0812, 0.32, -0.01,     0.631,0.631,0.631,    // atas kanan
        0.0812, 0.32, 0.1,     0.631,0.631,0.631,    // atas kanan
        // A tengah dalem kiri 3d
        0.055, 0.1, 0.1,     0.631,0.631,0.631,    // atas kanan
        0.055, 0.1, -0.01,     0.631,0.631,0.631,    // atas kanan
        0.0812, 0.32, -0.01,     0.631,0.631,0.631,    // atas kanan
        0.0812, 0.32, 0.1,     0.631,0.631,0.631,    // atas kanan

        // D atas depan
        0.36, 0.6, 0.1,     1.0,1.0,1.0,    // A: kiri atas
        0.66, 0.6, 0.1,     1.0,1.0,1.0,    // C: kanan atas
        0.6, 0.35, 0.1,     1.0,1.0,1.0,    // F: kanan bawah
        0.36, 0.35, 0.1,    1.0,1.0,1.0,    // B: kiri bawah
        // D siku atas depan
        0.66, 0.6, 0.1,     1.0,1.0,1.0,    // A: kanan atas
        0.6, 0.35, 0.1,     1.0,1.0,1.0,    // C: kanan bawah
        0.62, 0.3, 0.1,     1.0,1.0,1.0,    // F: kiri atas batang 
        0.71, 0.5, 0.1,     1.0,1.0,1.0,    // B: kanan atas batang
        // D batang kanan depan
        0.71, 0.5, 0.1,     1.0,1.0,1.0,    // B: kanan atas batang
        0.62, 0.3, 0.1,     1.0,1.0,1.0,    // A: kiri atas batang            
        0.62, -0.15, 0.1,   1.0,1.0,1.0,    // C: kiri bawah batang            
        0.71, -0.3, 0.1,    1.0,1.0,1.0,    // F: kanan bawah batang
        // D siku bawah depan
        0.71, -0.3, 0.1,    1.0,1.0,1.0,    // B:kanan bawah batang
        0.62, -0.1, 0.1,    1.0,1.0,1.0,    // A: kiri bawah batang         
        0.6, -0.15, 0.1,    1.0,1.0,1.0,    // C: kanan atas
        0.66, -0.4, 0.1,    1.0,1.0,1.0,    // F: kanan bawah
        // D bawah depan
        0.36, -0.15, 0.1,   1.0,1.0,1.0,    // A: kiri atas
        0.6, -0.15, 0.1,    1.0,1.0,1.0,    // B: kanan atas
        0.66, -0.4, 0.1,    1.0,1.0,1.0,    // F: kanan bawah
        0.36, -0.4, 0.1,    1.0,1.0,1.0,    // C: kiri bawah
        // D batang kiri depan
        0.36, 0.35, 0.1,    1.0,1.0,1.0,    // A: kiri atas
        0.45, 0.35, 0.1,    1.0,1.0,1.0,    // B: kanan atas
        0.45, -0.15, 0.1,   1.0,1.0,1.0,    // F: kanan bawah
        0.36, -0.15, 0.1,   1.0,1.0,1.0,    // C: kiri bawah
        // D atas belakang
        0.36, 0.6, -0.01,     1.0,1.0,1.0,    // A: kiri atas
        0.66, 0.6, -0.01,     1.0,1.0,1.0,    // C: kanan atas
        0.6, 0.35, -0.01,     1.0,1.0,1.0,    // F: kanan bawah
        0.36, 0.35, -0.01,    1.0,1.0,1.0,    // B: kiri bawah
        // D siku atas belakang
        0.66, 0.6, -0.01,     1.0,1.0,1.0,    // A: kanan atas
        0.6, 0.35, -0.01,     1.0,1.0,1.0,    // C: kanan bawah
        0.62, 0.3, -0.01,     1.0,1.0,1.0,    // F: kiri atas batang 
        0.71, 0.5, -0.01,     1.0,1.0,1.0,    // B: kanan atas batang
        // D batang kanan belakang
        0.71, 0.5, -0.01,     1.0,1.0,1.0,    // B: kanan atas batang
        0.62, 0.3, -0.01,     1.0,1.0,1.0,    // A: kiri atas batang            
        0.62, -0.15, -0.01,   1.0,1.0,1.0,    // C: kiri bawah batang            
        0.71, -0.3, -0.01,    1.0,1.0,1.0,    // F: kanan bawah batang
        // D siku bawah belakang
        0.71, -0.3, -0.01,    1.0,1.0,1.0,    // B:kanan bawah batang
        0.62, -0.1, -0.01,    1.0,1.0,1.0,    // A: kiri bawah batang         
        0.6, -0.15, -0.01,    1.0,1.0,1.0,    // C: kanan atas
        0.66, -0.4, -0.01,    1.0,1.0,1.0,    // F: kanan bawah
        // D bawah belakang
        0.36, -0.15, -0.01,   1.0,1.0,1.0,    // A: kiri atas
        0.6, -0.15, -0.01,    1.0,1.0,1.0,    // B: kanan atas
        0.66, -0.4, -0.01,    1.0,1.0,1.0,    // F: kanan bawah
        0.36, -0.4, -0.01,    1.0,1.0,1.0,    // C: kiri bawah
        // D batang kiri belakang
        0.36, 0.35, -0.01,    1.0,1.0,1.0,    // A: kiri atas
        0.45, 0.35, -0.01,    1.0,1.0,1.0,    // B: kanan atas
        0.45, -0.15, -0.01,   1.0,1.0,1.0,    // F: kanan bawah
        0.36, -0.15, -0.01,   1.0,1.0,1.0,    // C: kiri bawah
        // D batang kiri 3d kiri
        0.36, 0.6, 0.1,    0.631,0.631,0.631,    // A: kiri atas
        0.36, -0.4, 0.1,   0.631,0.631,0.631,    // D: kiri bawah
        0.36, -0.4, -0.01,  0.631,0.631,0.631,    // D: kiri bawah belakang
        0.36, 0.6, -0.01,   0.631,0.631,0.631,    // A: kiri atas belakang
        // D batang kiri 3d kanan
        0.45, 0.35, 0.1,    0.631,0.631,0.631,    // B: kiri bawah
        0.45, 0.35, -0.01,    0.631,0.631,0.631,    // B: kiri bawah
        0.45, -0.15, -0.01,   0.631,0.631,0.631,    // A: kiri atas
        0.45, -0.15, 0.1,  0.631,0.631,0.631,   // A: kiri atas belakang
        // D batang kanan 3d kiri
        0.62, 0.3, 0.1,     0.631,0.631,0.631,    // A: kiri atas batang 
        0.62, 0.3, -0.01,     0.631,0.631,0.631,    // A: kiri atas batang 
        0.62, -0.15, -0.01,   0.631,0.631,0.631,    // C: kiri bawah batang 
        0.62, -0.15, 0.1,   0.631,0.631,0.631,    // C: kiri bawah batang 
        // D batang kanan 3d kanan
        0.71, 0.5, 0.1,     0.631,0.631,0.631,     // B: kanan atas batang
        0.71, 0.5, -0.01,     0.631,0.631,0.631,     // B: kanan atas batang
        0.71, -0.3, -0.01,    0.631,0.631,0.631,     // F: kanan bawah batang
        0.71, -0.3, 0.1,    0.631,0.631,0.631,     // F: kanan bawah batang
        // D siku bawah 3d
        0.71, -0.3, 0.1,    0.631,0.631,0.631,     // F: kanan bawah batang
        0.71, -0.3, -0.01,    0.631,0.631,0.631,     // F: kanan bawah batang
        0.66, -0.4, -0.01,    0.631,0.631,0.631,   // F: kanan bawah
        0.66, -0.4, 0.1,    0.631,0.631,0.631,   // F: kanan bawah
        // D siku atas 3d
        0.71, 0.5, 0.1,     0.631,0.631,0.631,     // B: kanan atas batang
        0.71, 0.5, -0.01,     0.631,0.631,0.631,     // B: kanan atas batang
        0.66, 0.6, -0.01,     0.631,0.631,0.631,    // C: kanan atas
        0.66, 0.6, 0.1,     0.631,0.631,0.631,    // C: kanan atas
        // D siku atas belakang 3d
        0.62, 0.3, 0.1,     0.631,0.631,0.631,    // A: kiri atas batang 
        0.62, 0.3, -0.01,     0.631,0.631,0.631,    // A: kiri atas batang 
        0.6, 0.35, -0.01,     0.631,0.631,0.631,    // F: kanan bawah
        0.6, 0.35, 0.1,     0.631,0.631,0.631,    // F: kanan bawah
        // D siku bawah belakang 3d
        0.62, -0.1, 0.1,   0.631,0.631,0.631,     // C: kiri bawah batang 
        0.62, -0.1, -0.01,   0.631,0.631,0.631,     // C: kiri bawah batang 
        0.6, -0.15, -0.01,    0.631,0.631,0.631,     // B: kanan atas
        0.6, -0.15, 0.1,    0.631,0.631,0.631,     // B: kanan atas
    ];
    var indices = [
        0, 1, 2,     0, 2, 3,     // Face A
        4, 5, 6,     4, 6, 7,     // Face B
        8, 9, 10,    8, 10, 11,   // Face C
        12, 13, 14,  12, 14, 15,  // Face D
        16, 17, 18,  16, 18, 19,  // Face E
        20, 21, 22,  20, 22, 23,   // Face F 
        24,25,26,   24,26,27,
        28,29,30,   28,30,31,
        32,33,34,   32,34,35,
        36,37,38,   36,38,39,
        40,41,42,   40,42,43,
        44,45,46,   44,46,47,
        48,49,50,   48,50,51,
        52,53,54,   52,54,55,
        56,57,58,   56,58,59,
        60,61,62,   60,62,63,
        64,65,66,   64,66,67,
        68,69,70,   68,70,71,
        72,73,74,   72,74,75,
        76,77,78,   76,78,79,
        80,81,82,   80,82,83,
        84,85,86,   84,86,87,
        88,89,90,   88,90,91,
        92,93,94,   92,94,95,
        96,97,98,   96,98,99,
        100,101,102,   100,102,103,
        104,105,106,   104,106,107,
        108,109,110,   108,110,111,
        112,113,114,   112,114,115,
        116,117,118,   116,118,119,
        120,121,122,   120,122,123,
        124,125,126,   124,126,127,
        128,129,130,   128,130,131,
        132,133,134,   132,133,134,
    ];
    
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");
    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    // Vertex shader
    var vertexShaderCode = `
      attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
      attribute vec3 aColor;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying vec3 vColor;
      void main() {
          gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
          vColor = aColor;
      }
      `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); // sampai sini sudah jadi .o
    
    // Fragment shader
    var fragmentShaderCode = `
      precision mediump float;
      varying vec3 vColor;
      void main() {
          gl_FragColor = vec4(vColor, 1.0);
      }
      `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); // sampai sini sudah jadi .o
    
    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
    
    // Variabel lokal
    var theta = 0.0;
    var freeze = false;
    var horizontalSpeed = 0.0;
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;
    
    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
      view,
      [cameraX, 0.0, cameraZ], // the location of the eye or the camera
      [cameraX, 0.0, 0.0], // the point where the camera look at
      [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, (5*Math.PI)/50, 1.0, 0.5, 50.0);
    
    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    
    // Grafika interaktif
    // Tetikus
    function onMouseClick(event) {
      freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Papan ketuk
    function onKeydown(event) {
      if (event.keyCode == 32) freeze = !freeze; // spasi
      // Gerakan horizontal: a ke kiri, d ke kanan
      if (event.keyCode == 37) {
        // arrow-kiri
        theta += -0.05;
      } else if (event.keyCode == 39) {
        // arrow-kanan
        theta += 0.05;
      }
      // Gerakan vertikal: w ke atas, s ke bawah
      if (event.keyCode == 38) {
        // w
        verticalSpeed = -0.01;
      } else if (event.keyCode == 40) {
        // s
        verticalSpeed = 0.01;
      }
    }
    function onKeyup(event) {
      if (event.keyCode == 32) freeze = !freeze;
      if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
      if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);
    
    function render() {
      gl.enable(gl.DEPTH_TEST);
      gl.clearColor(0.17,      0.8,    0.44,    1.0);  // Oranye
      //            Merah     Hijau   Biru    Transparansi
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      if (!freeze) {
        // theta += 0.01;
      }
      horizontalDelta += horizontalSpeed;
      verticalDelta -= verticalSpeed;
      var model = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
        model, model, [horizontalDelta, verticalDelta, 0.0]
      );
      glMatrix.mat4.rotateY(model, model, theta);
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}