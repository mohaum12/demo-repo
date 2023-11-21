const { openBrowser, goto, write, goBack, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("Keychron K6");
        await click("Keychron K6 Wireless Mechanical Keyboard")
        // Select Hotswap option 
        await click($("#swatch-option2 > div > fieldset > ul > li:nth-child(3) > div > div.swatch-button-title-text"))
        // Select brown switch 
        await click($("#swatch-option3 > div > fieldset > ul > li:nth-child(3) > div"))
        await click("Add to cart")
        await goBack();
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
