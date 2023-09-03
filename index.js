setInterval(function() {
  const date = new Date();
  hr=date.getHours()
  min=date.getMinutes()
  sec=date.getSeconds()
  hrDeg=(360/12)*(hr/2)
  roHrDeg="rotate("+hrDeg+"deg)"
  minDeg=(360/60)*min
  roMinDeg="rotate("+minDeg+"deg)"
  secDeg=(360/60)*sec
  roSecDeg="rotate("+secDeg+"deg)"
  document.querySelector(".hr").style.transform=roHrDeg
  document.querySelector(".min").style.transform=roMinDeg
  document.querySelector(".sec").style.transform=roSecDeg
}, 1000);
