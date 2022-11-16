const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

/****************************begin Authentication***********************/

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});


When('I click next', async function() {
    let element = await this.driver.$('#ember10');
    return await element.click();
});




/****************************end Authentication***********************/





/*************************begin Crear Members********************************************************************/

Then('I enter user {string}', async function (user) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(user);
});

Then('I enter user email {string}', async function (userEmail) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(userEmail);
});

Then('I click save', async function() {
    let element = await this.driver.$('#ember27');
    return await element.click();
});

Then('I wait for retry button to be enabled', async function() {
    let element = await this.driver.$("span[text='Retry']");
    expect(element).to.exist;
});

Then('I wait for saved notification', async function() {
    let element = await this.driver.$("span[text='Saved']");
    expect(element).to.exist;
});

Then('I click on edit', async function() {
    let element = await this.driver.$("[class='ember-view gh-post-list-cta edit ']");
    return await element.click();
});

Then('I open editor menu', async function() {
    let element = await this.driver.$("[title=Settings]");
    return await element.click();
});

Then('I eliminate the author', async function() {
    let element = await this.driver.$('[aria-label="remove element"]');
    return await element.click();
})

Then('I wait for no author warning to appear', async function() {
    let element = await this.driver.$("span[text='At least one author is required']");
    expect(element).to.exist;
});


/*************************end Crear Members********************************************************************/




/**********************begin Crear Posts********************************************************************** */

/**********************end Crear Posts********************************************************************** */








/**********************begin Editar Posts********************************************************************** */

/**********************end Editar Posts********************************************************************** */








/**********************begin Tags********************************************************************** */
Then('I click on the in the menu option Tags', async function () {
    const menu = await this.driver.$("[class='gh-nav-list gh-nav-manage']");
    let li = await menu.$$('li')[2];
    return await li.click();
 });


 
Then('I click on button New Tag', async function () {
    let element = await this.driver.$("[class='ember-view gh-btn gh-btn-primary']");
    return await element.click();
  });

Then('I enter Tag Name {string}', async function (tagName) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagName);
});


Then('I click on button Save in Tags', async function () {
    let element = await this.driver.$("[class='gh-btn gh-btn-primary gh-btn-icon ember-view']");
    return await element.click();
  });

Then('I click on Tags', async function () {
    let element = await this.driver.$("[class='ember-view']");
    return await element.click();
  });


  Then('I validating that new tag is in Tags list', async function () {
    let element = await this.driver.$("[class='gh-tag-list-name']");
    return await element.click();
  });

  Then('I Delete Tag', async function () {
    let element = await this.driver.$("[class='gh-btn gh-btn-red gh-btn-icon']");
    return await element.click();
  });

  Then('I Confirm Delete Tag', async function () {
    let element = await this.driver.$("[class='gh-btn gh-btn-red gh-btn-icon ember-view']");
    return await element.click();
  });


  Then('I Confirm Validation Error on Tag Name field', async function () {
    let element = await this.driver.$("[class='response']");
    const value = await element.getText();

    return expect(value).to.equal('You must specify a name for the tag.'); 
   
  });

  Then('I enter Tag Slug {string}', async function (tagSlug) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(tagSlug);
});

Then('I Confirm Validation Error on Tag Slug field', async function () {
    let element = await this.driver.$("[class='retry_svg__retry-animated']");
    return expect(element).to.exist;
   
  });
  


Then('I enter Tag Description {string}', async function (tagDescription) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(tagDescription);
});


Then('I click on the button Expand option Tags', async function () {
    const expan = await this.driver.$("[class='gh-expandable']");
    let div = await expan.$$('div')[0];
    let button = await expan.$$('button')[0];
    return await button.click();
 });


 Then('I enter Tag meta-title {string}', async function (metaTittle) {
    let element = await this.driver.$('#meta-title');
    return await element.setValue(metaTittle);
})

 



/**********************end Tags********************************************************************** */



