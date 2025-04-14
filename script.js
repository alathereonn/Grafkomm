const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerY = canvas.height / 2;
const mirrorX = 700;

const focusSlider = document.getElementById('focusSlider');
const objectXSlider = document.getElementById('objectXSlider');
const objectHeightSlider = document.getElementById('objectHeightSlider');

const focusInput = document.getElementById('focusInput');
const objectXInput = document.getElementById('objectXInput');
const objectHeightInput = document.getElementById('objectHeightInput');

const infoDistance = document.getElementById("imageDistance");
const infoHeight = document.getElementById("imageHeight");

function drawScene(focus, objectX, objectHeight) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

<<<<<<< HEAD
  const swordWidth = 10;
  const tipHeight = 10;
  const hiltHeight = 25;
  const bladeHeight = objectHeight - tipHeight - hiltHeight;

=======
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
  // Sumbu utama
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.strokeStyle = "black";
  ctx.stroke();

  // Cermin cekung
  ctx.beginPath();
  ctx.arc(mirrorX + focus, centerY, focus, Math.PI * 1.5, Math.PI * 0.5, true);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Garis vertikal cermin
  ctx.beginPath();
  ctx.moveTo(mirrorX, centerY - 150);
  ctx.lineTo(mirrorX, centerY + 150);
  ctx.strokeStyle = "gray";
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Fokus
  ctx.fillStyle = "black";
  ctx.fillText("F", mirrorX - focus - 10, centerY + 15);
  ctx.beginPath();
  ctx.arc(mirrorX - focus, centerY, 3, 0, 2 * Math.PI);
  ctx.fill();

<<<<<<< HEAD
  // Objek: Pedang
  const baseY = centerY;
  const hiltY = baseY - hiltHeight;
  const bladeY = hiltY - bladeHeight;
  const tipY = bladeY - tipHeight;

  // Gagang (hilt)
  ctx.fillStyle = "black";
  ctx.fillRect(objectX - swordWidth / 2, hiltY, swordWidth, hiltHeight);

  // Crossguard (garis horizontal di atas hilt)
  ctx.beginPath();
  ctx.moveTo(objectX - swordWidth * 1.5, hiltY); // lebih lebar dari hilt
  ctx.lineTo(objectX + swordWidth * 1.5, hiltY);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();

   // Bilah + ujung (outline dan fill)
   ctx.beginPath();
ctx.moveTo(objectX - swordWidth / 2, bladeY);
ctx.lineTo(objectX - swordWidth / 2, hiltY);
ctx.lineTo(objectX + swordWidth / 2, hiltY);
ctx.lineTo(objectX + swordWidth / 2, bladeY);
ctx.lineTo(objectX, tipY); // ke ujung
ctx.closePath();
ctx.fillStyle = "#C0C0C0";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
 
   ctx.fillStyle = "black";
   ctx.fillText("Objek", objectX - 20, tipY - 10);


  // Sinar sejajar → pantul ke fokus
  ctx.beginPath();
  ctx.moveTo(objectX, tipY);
  ctx.lineTo(mirrorX, tipY);
=======
  // Objek (panah hijau)
  ctx.beginPath();
  ctx.moveTo(objectX, centerY);
  ctx.lineTo(objectX, centerY - objectHeight);
  ctx.lineTo(objectX - 5, centerY - objectHeight + 10);
  ctx.moveTo(objectX, centerY - objectHeight);
  ctx.lineTo(objectX + 5, centerY - objectHeight + 10);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillText("Objek", objectX - 20, centerY - objectHeight - 10);

  // Sinar sejajar → pantul ke fokus
  ctx.beginPath();
  ctx.moveTo(objectX, centerY - objectHeight);
  ctx.lineTo(mirrorX, centerY - objectHeight);
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
  ctx.strokeStyle = "orange";
  ctx.stroke();

  ctx.beginPath();
<<<<<<< HEAD
  ctx.moveTo(mirrorX, tipY);
=======
  ctx.moveTo(mirrorX, centerY - objectHeight);
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
  ctx.lineTo(mirrorX - focus, centerY);
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Sinar ke fokus → pantul sejajar
  ctx.beginPath();
<<<<<<< HEAD
  ctx.moveTo(objectX, tipY);
=======
  ctx.moveTo(objectX, centerY - objectHeight);
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
  ctx.lineTo(mirrorX - focus, centerY);
  ctx.strokeStyle = "orange";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(mirrorX, centerY);
  ctx.lineTo(mirrorX - 150, centerY);
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

<<<<<<< HEAD
  // Hitung bayangan
  const distance = mirrorX - objectX;
  const imageX = 1 / (1 / focus - 1 / distance);
  const realImageX = mirrorX - imageX;
  const magnification = imageX / distance;
  const imageHeight = tipHeight + hiltHeight + bladeHeight;

  infoDistance.textContent = distance.toFixed(2);
  infoHeight.textContent = imageHeight.toFixed(2);

  const imageTipHeight = tipHeight * -magnification;
  const imageHiltHeight = hiltHeight * -magnification;
  const imageBladeHeight = bladeHeight * -magnification;  
  
  const imageBaseY = centerY;
  const imageHiltY = imageBaseY - imageHiltHeight;
  const imageBladeY = imageHiltY - imageBladeHeight;
  const imageTipY = imageBladeY - imageTipHeight;

  // Gagang bayangan
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(realImageX - swordWidth / 2, imageHiltY, swordWidth, imageHiltHeight);

  // Crossguard bayangan
ctx.beginPath();
ctx.moveTo(realImageX - swordWidth * 1.5, imageHiltY);
ctx.lineTo(realImageX + swordWidth * 1.5, imageHiltY);
ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
ctx.lineWidth = 3;
ctx.stroke();

  // Bilah + ujung bayangan (outline dan fill)
  ctx.beginPath();
  ctx.moveTo(realImageX - swordWidth / 2, imageBladeY);
  ctx.lineTo(realImageX - swordWidth / 2, imageHiltY);
  ctx.lineTo(realImageX + swordWidth / 2, imageHiltY);
  ctx.lineTo(realImageX + swordWidth / 2, imageBladeY);
  ctx.lineTo(realImageX, imageTipY); // ujung
  ctx.closePath();
  ctx.fillStyle = "rgba(192, 192, 192, 0.5)";
  ctx.fill();
  ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "black";
  ctx.fillText("Bayangan", realImageX - 25, imageTipY - 10);
}

// Sinkronisasi slider dan input
=======
  // Bayangan
  const distance = mirrorX - objectX;
  const imageX = 1 / (1 / focus - 1 / distance);  // rumus cermin: 1/f = 1/s + 1/s'
  const realImageX = mirrorX - imageX;
  const magnification = imageX / distance;
  const imageHeight = -objectHeight * magnification;

  // Update tampilan informasi
  infoDistance.textContent = distance.toFixed(2);
  infoHeight.textContent = imageHeight.toFixed(2);

  ctx.beginPath();
  ctx.moveTo(realImageX, centerY);
  ctx.lineTo(realImageX, centerY - imageHeight);

  // Ujung panah bayangan
  if (imageHeight < 0) {
    // Terbalik
    ctx.lineTo(realImageX - 5, centerY - imageHeight - 10);
    ctx.moveTo(realImageX, centerY - imageHeight);
    ctx.lineTo(realImageX + 5, centerY - imageHeight - 10);
  } else {
    // Tegak
    ctx.lineTo(realImageX - 5, centerY - imageHeight + 10);
    ctx.moveTo(realImageX, centerY - imageHeight);
    ctx.lineTo(realImageX + 5, centerY - imageHeight + 10);
  }

  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillText("Bayangan", realImageX - 25, centerY - imageHeight - 10);
}

// Event sinkronisasi slider dan input
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
function syncSliderAndInput(slider, input, callback) {
  slider.addEventListener('input', () => {
    input.value = slider.value;
    callback();
  });
  input.addEventListener('input', () => {
    slider.value = input.value;
    callback();
  });
}

// Update semua
function update() {
  const focus = parseInt(focusSlider.value);
  const objectX = parseInt(objectXSlider.value);
  const objectHeight = parseInt(objectHeightSlider.value);
  drawScene(focus, objectX, objectHeight);
}

<<<<<<< HEAD
// Sinkronkan kontrol
=======
// Sinkronkan semua kontrol
>>>>>>> 66381a7099355cee71163ee7df94d2282e68c2cd
syncSliderAndInput(focusSlider, focusInput, update);
syncSliderAndInput(objectXSlider, objectXInput, update);
syncSliderAndInput(objectHeightSlider, objectHeightInput, update);

// Inisialisasi
update();
