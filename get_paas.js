const puppeteer = require('puppeteer');
const argv = require('minimist')(process.argv.slice(2));

// ========================== Declare Variables ==========================

let time = new Date().toLocaleString("de-DE",{year: 'numeric', month: '2-digit', day: '2-digit'});
let timestamp = new Date().getTime();



// const keyword = argv.kw;
const clicks = argv.clicks;



// ========================== Declare Functions ==========================

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 150);
        });
    });
};


async function get_paas(browser,keyword,clicks){

    let url = 'https://www.google.de/search?pws=0&no_sw_cr=1&q='+keyword;
    let paa;

    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36');

    await page.setViewport({
        width: 1920,
        height: 1080
    });

    await page.goto(url, {waitUntil: 'networkidle0'});
    // await autoScroll(page);

    let paas_length;
    let paas_length_2;
    let paas_length_3;
    let paas_questions;
    let paas;
    let error_tmp;

    if (clicks == 1){
        await page.evaluate(() => {
            error_tmp = document.getElementsByClassName("g kno-kp mnr-c g-blk")[0].scrollIntoView();
            paas = document.getElementsByClassName('mWyH1d kno-atc');
            paas_length = paas.length;
            async (paas) => {
                for (i = 0; i < paas.length; i++) {
                    try {
                        paas[i].click();
                        await page.waitFor(1000);
                        paas[i].click();
                    } catch (e) {
                        logMyErrors(e);
                    }
                }
            }
            paas_questions = document.getElementsByClassName('mWyH1d kno-atc').innerText;
        });
    }




    let question;
    let paas_result = new Array();

    await asyncForEach(paas_questions, async (question) => {
        paas_result.push(question);
    });




    return paas_result;
};






// ========================== Main Functions ==========================

(async function(){

    await puppeteer.launch({headless: false, args: ['--incognito']}).then(async browser => {

        let lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('keywords.txt')
        });

        for await (const keyword of lineReader) {
            console.log(keyword);

            const result = await get_paas(browser,keyword,clicks);
            console.log(result);
            

        };

    });

})();
