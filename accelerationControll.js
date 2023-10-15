
let permissionGranted = false;
let accelerationMag = 0;
let YZmag;

function accelerationSetup() {
    acceleration = createVector(0, 0, 0);
    YZmag = createVector(acceleration.y,acceleration.z);
    if (typeof (DeviceMotionEvent) !== 'undefined' && typeof (DeviceMotionEvent.requestPermission) === 'function') {
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

function accelerationDraw() {
    if (!permissionGranted) return;
    textSize(32);
    text("AccelerationX : " + acceleration.x, 10, 30);
    text("AccelerationY : " + acceleration.y, 10, 70);
    text("AccelerationZ : " + acceleration.z, 10, 110);
    text("AccelerationYZmag : " + YZmag.mag(), 10, 150);
    text("AccelerationMag : " + accelerationMag, 10, 190);
    text("osc.frequency.value : " + osc.frequency.value, 10, 230);

    YZmag.x = acceleration.y;
    YZmag.x = acceleration.z;

    accelerationMag = acceleration.mag();
}
