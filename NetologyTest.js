const { chromium } = require("playwright");
const user = require("../../user.js");
import { test, expect } from '@playwright/test';

test('validTest', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.locator('text=Войти').click();
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.login);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(user.password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL('https://netology.ru/profile');
  await browser.close();
});

test('noValidTest', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.locator('text=Войти').click();
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.noValidLogin);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(user.noValidPassword);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page.locator('._-packages-ui-kit-components-v2-Input--error--1QFF1  div'))
      .toHaveText('Вы ввели неправильно логин или пароль');
      await browser.close();
});