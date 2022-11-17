import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD } from './../properties.json';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:2368/ghost/');
    await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
    await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
    await page.locator('id=ember10').click();
    await page.goto('http://localhost:2368/ghost/#/posts');
});

test('No debes ser capaz de dejar vacio el autor de un post', async ({ page }) => {
    await page.click('[class="ember-view gh-post-list-cta edit "]');
    await page.click('[title=Settings]');
    await page.click('[aria-label="remove element"]');
    await expect(page.getByText('At least one author is required')).toBeTruthy();
});