/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */

import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['images/*.{jpg,png}'], {
    destination: 'compressed',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });
  console.log(files);
})();
// const files = await imagemin(['images/*.{jpg,png}'], {
//   destination: 'compressed',
//   plugins: [
//     imageminJpegtran(),
//     imageminPngquant({
//       quality: [0.6, 0.8],
//     }),
//   ],

//= > [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
