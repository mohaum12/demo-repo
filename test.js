const { openBrowser, goto, write, goBack, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("people are awesome");
        await goBack();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
