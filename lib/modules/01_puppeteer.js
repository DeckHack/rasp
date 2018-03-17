module.exports = function () {
  return new Promise (async function(resolve, reject) {
    const browser = await require('puppeteer').launch();

    const page = await browser.newPage();
    await page.goto('https://tweetdeck.twitter.com');

    let data = {};
    data['data'] = await page.evaluate(() => {
      return {
        version: window.TD.version,
        buildID: window.TD.buildID,
        assets: window.TD.assetsOverlay,
        config: window.TD.config,
        decider: window.TD.decider.getAllWithOverlay(),
        templates: window.TD.mustaches
      }
    });

    await browser.close();

    resolve(data);
  })
}