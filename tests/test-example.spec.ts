import { expect, test } from "@playwright/test";
import { QUOTES } from "../fixtures/quotes";

test('Test quotes as a user flow', async({ page }) => {
    // Start 💡
    await page.goto('/')
    await expect(page).toHaveTitle(/QA Engineer/);

    // Main Page 💡
    await page.getByText('Enter').click()
    await expect(page).toHaveURL(/.*code/);

    // Code Page 💡
    const secretCode = await page.getAttribute('[name=secret]', 'value')
    await page.locator('#code').fill(secretCode)

    await page.getByLabel('Are you a robot? ').click()
    await expect(page.getByLabel('Are you a robot?')).toBeChecked()

    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page).toHaveURL(/lists/);

    // Lists Page 💡
    const categories = await page.locator('h2').allTextContents()
    expect(categories.sort()).toEqual(['Awesome quotes', 'Famous quotesS'])

    const awesomeQuotesFound = await page.locator('[qa-id=Awesome] span:not(.score)').allTextContents()
    expect(awesomeQuotesFound.sort()).toEqual(QUOTES.awesome.sort())

    const famousQuotesFound = await page.locator('[qa-id=Famous] span:not(.score)').allTextContents()
    expect(famousQuotesFound.sort()).toEqual(QUOTES.famous.sort())

    const individualScores = await page.locator('.score').allTextContents()
    let sumOfScores = 0;
    individualScores.map( score => sumOfScores += Number(score))

    const pageSummary = await page.locator('#summary').textContent()
    const pageTotalScore = Number(pageSummary.split('Total score: ')[1]);

    expect(pageTotalScore).toEqual(sumOfScores)
})
