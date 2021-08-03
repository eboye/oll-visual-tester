const { generateImages, compareImages } = require('../src/index')

const config = [
  {
    goto: 'http://duckduckgo.com',
    engine: 'firefox', // 'firefox', 'chromium', 'webkit'
    width: 800,
    height: 600,
    path: './temp/baseline/',
    name: 'screenshot1.jpg',
    fullPage: true,
    clicks: [
      // {
      //  selector: '.js-side-menu-open',
      //  waitAfter: 300, // optional
      //  button: 'left', // optional
      // },
    ],
    el: null, // Element selector we want to make screenshot of
    debug: true,
  },
  {
    goto: 'http://duckduckgo.com',
    engine: 'firefox', // 'firefox', 'chromium', 'webkit'
    width: 800,
    height: 600,
    path: './temp/baseline/',
    name: 'screenshot2.jpg',
    fullPage: true,
    clicks: [
      // {
      //  selector: '.js-side-menu-open',
      //  waitAfter: 300, // optional
      //  button: 'left', // optional
      // },
    ],
    el: null, // Element selector we want to make screenshot of
    debug: true,
  },
  {
    goto: 'http://duckduckgo.com',
    engine: 'firefox', // 'firefox', 'chromium', 'webkit'
    width: 800,
    height: 600,
    path: './temp/new/',
    name: 'screenshot1.jpg',
    fullPage: true,
    clicks: [
      // {
      //  selector: '.js-side-menu-open',
      //  waitAfter: 300, // optional
      //  button: 'left', // optional
      // },
    ],
    el: null, // Element selector we want to make screenshot of
    debug: true,
  },
  {
    goto: 'http://duckduckgo.com',
    engine: 'webkit', // 'firefox', 'chromium', 'webkit'
    width: 800,
    height: 600,
    path: './temp/new/',
    name: 'screenshot2.jpg',
    fullPage: true,
    clicks: [
      // {
      //  selector: '.js-side-menu-open',
      //  waitAfter: 300, // optional
      //  button: 'left', // optional
      // },
    ],
    el: null, // Element selector we want to make screenshot of
    debug: true,
  },
]

// First step is to generate images from a config
console.log('starting to generate images')

generateImages({
  imagesConfig: config,
})
  .then((results) => {
    console.log(results)

    // Second step is to compare images from two directories
    console.log('Starting to compare images')

    compareImages({
      dirBaseline: './temp/baseline/',
      dirNew: './temp/new/',
      dirDiff: './temp/diff/',
      debug: true
    })
      .then((result) => { console.log(result) })
      .catch((error) => { console.error(error) })
  })
  .catch((error) => { console.error(error) })
