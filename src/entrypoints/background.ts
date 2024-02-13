export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.action.onClicked.addListener((tab) => {
    // open in a new tab
    console.log('🔥 run');

    browser.tabs.create({ url: browser.runtime.getURL('/index.html') });

    // process.env.NODE_ENV === 'development'
    //   ? browser.tabs.create({ url: browser.runtime.getURL('/') })
    //   : browser.tabs.create({ url: browser.runtime.getURL('/index.html') });

    // browser.windows.create(
    //   {
    //     url: browser.runtime.getURL('dist/index.html')
    //     // type: 'popup',
    //     // height: 800,
    //     // width: 516
    //   },
    //   (win) => {
    //     console.log(win)
    //   }
    // )
  });
});
