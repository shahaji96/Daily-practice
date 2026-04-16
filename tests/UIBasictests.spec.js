const{test, expect }=require('@playwright/test');

test('First Playwright test',async({page})=>
{
await page.goto('https://www.overleaf.com/project');

const pageTitle=page.title();
console.log('page title is:' , pageTitle);

await expect(page).toHaveTitle('Log in to Overleaf - Overleaf, Online LaTeX Editor');
})