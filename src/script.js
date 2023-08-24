const ball = document.querySelector("#ball");
document.addEventListener("keydown", keyPress);
let horizontal = 0;
let vertical = 0;
let clicked = 0;
distance = 10;

function keyPress(e) {
  if (e.code === "KeyW" || e.code === "ArrowUp") {
    vertical -= distance;
  }
  if (e.code === "KeyS" || e.code === "ArrowDown") {
    vertical += distance;
  }
  if (horizontal < 0 || vertical < 0) {
    horizontal = 0;
    vertical = 0;
  }

  document.addEventListener("keydown", () => {
    clicked++;
    if (clicked > 100) {
      // updates all distance varibles to 20 after 100 clicks
      distance = 20;
    }
  });

  keyRefresh(); // updates the code everytime the ball moves
}

// the "px" is so that it can take the value of horizontal and just add px so it can run in css
function keyRefresh() {
  ball.style.left = horizontal + "px";
  ball.style.top = vertical + "px";
}
