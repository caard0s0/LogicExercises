'use strict';

// Coding Challenge #25

/*
YOUR TASKS:
Tasks are not super-descriptive this time, so that you can figure out some stuff by
yourself. Pretend you're working on your own.

PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path.

2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise.

PART 2
3. Consume the promise using .then and also add an error handler.

4. After the image has loaded, pause execution for 2 seconds using the 'wait'
function.

5. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image (Hint: Use the image element
returned by the 'createImage' promise to hide the current image. You will
need a global variable for that).

6. After the second image has loaded, pause execution for 2 seconds again

7. After the 2 seconds have passed, hide the current image.


TEST DATA: 
Data: Images in the img folder. Test the error handler by passing a wrong
image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
otherwise images load too fast.
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #25 ---------------');
console.log('---------------------------------------------');

const imageContainer = document.querySelector('.images');

// 1.
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        // 2.
        img.addEventListener('load', function () {
            imageContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found.'));
        });
    });
};

// 4.
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

let currentImg;

// 3.
createImage('./img/img-1.jpg')
    .then(img => {
        currentImg = img;
        // 4.
        return wait(2);
    })
    .then(() => {
        // 5.
        currentImg.style.display = 'none';
        return createImage('./img/img-2.jpg');
    }).then(img => {
        currentImg = img;
        // 6.
        return wait(2)
    })
    .then(() => {
        // 7.
        currentImg.style.display = 'none';
        return createImage('./img/img-3.jpg');
    }).then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    // 3.
    .catch(error => console.error(error));