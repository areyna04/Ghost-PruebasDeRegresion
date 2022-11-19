import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD } from './../properties.json';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001/ghost/');
    await page.getByPlaceholder('Email Address').fill(USERNAME);
    await page.getByPlaceholder('Password').fill(PASSWORD);
    await page.locator('#ember12').click();
});

test('No debes ser capaz de crear un miembro sin email', async ({ page }) => {
    await page.click('#ember39');
    await page.screenshot({path: 'screenshot-t/t2-1.png', fullPage: true});
    await page.click('#ember78');
    await page.screenshot({path: 'screenshot-t/t2-2.png', fullPage: true});
    await page.locator('id=member-name').fill(faker.name.fullName());
    await page.screenshot({path: 'screenshot-t/t2-3.png', fullPage: true});
    await page.click('text=Save');
    await page.screenshot({path: 'screenshot-t/t2-3.png', fullPage: true});
    await page.goto('http://localhost:3001/ghost/#/members');
    await page.screenshot({path: 'screenshot-t/t2-4.png', fullPage: true});
    await expect(page.getByText('Leave')).toBeFalsy;
    
});

test('Debes ser capaz de crear un miembro con nombre y email', async ({ page }) => {
    await page.click('#ember39');
    await page.click('#ember78');
    await page.screenshot({path: 'screenshot-t/t1-1.png', fullPage: true});
    await page.locator('id=member-name').fill(faker.name.findName());
    await page.screenshot({path: 'screenshot-t/t1-2.png', fullPage: true});
    await page.locator('id=member-email').fill(faker.internet.email());
    await page.screenshot({path: 'screenshot-t/t1-3.png', fullPage: true});
    await page.click('text=Save');
    await page.screenshot({path: 'screenshot-t/t1-4.png', fullPage: true});
    await page.goto('http://localhost:3001/ghost/#/members');
    await page.screenshot({path: 'screenshot-t/t1-5.png', fullPage: true});
    await expect(page.getByText('usuario@uniandes.edu.co')).toBeTruthy();
    await page.screenshot({path: 'screenshot-t/t1-6.png', fullPage: true});
  });

test('No debes ser capaz de dejar vacio el autor de un post', async ({ page }) => {
    await page.goto('http://localhost:3001/ghost/#/posts');
    await page.click('#ember124');
    await page.screenshot({path: 'screenshot-t/t3-1.png', fullPage: true});
    await page.click('[title=Settings]');
    await page.screenshot({path: 'screenshot-t/t3-2.png', fullPage: true});
    await page.click('[aria-label="remove element"]');
    await page.screenshot({path: 'screenshot-t/t3-3.png', fullPage: true});
    await expect(page.getByText('At least one author is required')).toBeTruthy();
    await page.screenshot({path: 'screenshot-t/t3-4.png', fullPage: true});
});