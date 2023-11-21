const { openBrowser, goto, write, goBack, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("Keychron K6");
        await press("Enter")
        await click("Keychron K6 Wireless Mechanical Keyboard")
        // Select brown switch 
        await click($("#swatch-option3 > div > fieldset > ul > li:nth-child(3) > div"))
        await click("Add to cart")
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
