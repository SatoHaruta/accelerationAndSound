
let permissionGranted = false;

function setup() {
  acceleration = createVector(0,0,0);
  createCanvas(windowWidth, windowHeight);
  soundSetup();
  if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
    // iOS 13 device
    DeviceMotionEvent.requestPermission()
      .catch(() => {
        // Show permission dialog only the first time
        let button = createButton("Click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw new Error('User interaction is required.');
      })
      .then(permissionState => {
        if (permissionState === 'granted') {
          permissionGranted = true;
          window.addEventListener('devicemotion', (event) => {
            acceleration.x = event.acceleration.x;
            acceleration.y = event.acceleration.y;
            acceleration.z = event.acceleration.z;
          });
        }
      });
  } else {
    // Non iOS 13 device
    permissionGranted = true;
    window.addEventListener('devicemotion', (event) => {
      acceleration.x = event.acceleration.x;
      acceleration.y = event.acceleration.y;
      acceleration.z = event.acceleration.z;
    });
  }
}

function requestAccess() {
  DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        permissionGranted = true;
        window.addEventListener('devicemotion', (event) => {
          acceleration.x = event.acceleration.x;
          acceleration.y = event.acceleration.y;
          acceleration.z = event.acceleration.z;
        });
      }
    })
    .catch(console.error);
  
  this.remove();
}

function draw() {
  if (!permissionGranted) return;
  
  background(255);
  
  textSize(32);
  text("Acceleration : " + acceleration.mag(), 10, 30);
}
