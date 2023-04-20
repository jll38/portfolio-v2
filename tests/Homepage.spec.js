// @ts-check
const { test, expect } = require('@playwright/test');

test('Hero Text', async ({page}) => {
  await page.goto('http://localhost:3000/');
  const hero = await page.innerText('#hero-name');
  expect(hero).toBe('Julian Lechner');
});