// camera.js
function getUserMedia() {
  return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
}