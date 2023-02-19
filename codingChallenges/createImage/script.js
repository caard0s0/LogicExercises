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

/*
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
*/



// Coding Challenge #26

/*
YOUR TASKS:

PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before).

2. Compare the two versions, think about the big differences, and see which one
you like more.

3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'.

2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs').

3. Check out the 'imgs' array in the console! Is it like you expected?.

4. Use a promise combinator function to actually get the images from the array.

5. Add the 'parallel' class to all the images (it has some CSS styles).


TEST DATA: 
Data: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
*/

console.log('---------------------------------------------');
console.log('--------------- CHALLENGE #26 ---------------');
console.log('---------------------------------------------');

const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imageContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found.'));
        });
    });
};


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// 1. 2. 3.
const loadNPause = async function () {
    try {
        let img = await createImage('./img/img-1.jpg');
        await wait(2);
        img.style.display = 'none';

        img = await createImage('./img/img-2.jpg');
        await wait(2);
        img.style.display = 'none';

        img = await createImage('./img/img-3.jpg');
        await wait(2);
        img.style.display = 'none';

    } catch (error) {
        console.error(error);
    };
};

// loadNPause();

// 1.
const loadAll = async function (imgArr) {
    try {
        // 2. 3.
        const imgs = imgArr.map(async img => await createImage(img));
        // 4.
        const imgsEl = await Promise.all(imgs);

        // 5.
        imgsEl.forEach(imgEl => imgEl.classList.add('parallel'));
    } catch (error) {
        console.error(error);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);