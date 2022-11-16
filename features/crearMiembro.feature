Feature: Crear Miembro

@user1 @web
Scenario: No debes ser capaz de crear un miembro sin email
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email "<USERNAME>"
    Then I enter password  "<PASSWORD>"
    Then I click sign in
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/members/new"
    And I wait for 5 seconds
    Then I enter user 'usuario'
    And I wait for 1 seconds
    Then I click save
    And I wait for 5 seconds
    Then I wait for retry button to be enabled
    Then I wait

@user2 @web
Scenario: Debes ser capaz de crear un miembro sin nombre
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email "<USERNAME>"
    Then I enter password  "<PASSWORD>"
    Then I click sign in
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/members/new"
    And I wait for 5 seconds
    Then I enter user email 'usuario@user.com'
    And I wait for 1 seconds
    Then I click save
    And I wait for 5 seconds
    Then I wait for saved notification
    Then I wait

@user3 @web
Scenario: No debes ser capaz de crear un miembro con email repetido
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email "<USERNAME>"
    Then I enter password  "<PASSWORD>"
    Then I click sign in
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/members/new"
    And I wait for 5 seconds
    Then I enter user email 'usuario@user.com'
    And I wait for 1 seconds
    Then I click save
    And I wait for 5 seconds
    Then I wait for retry button to be enabled
    Then I wait

@user4 @web
Scenario: Debes ser capaz de crear un miembro con nombre y email
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email "<USERNAME>"
    Then I enter password  "<PASSWORD>"
    Then I click sign in
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/members/new"
    And I wait for 5 seconds
    Then I enter user 'usuario'
    Then I enter user email 'usuario@user.com'
    And I wait for 1 seconds
    Then I click save
    And I wait for 5 seconds
    Then I wait for saved notification
    Then I wait

@user6 @web
Scenario: No debes ser capaz de dejar vacio el autor de un post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email "<USERNAME>"
    Then I enter password  "<PASSWORD>"
    Then I click sign in
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    And I wait for 5 seconds
    Then I click on edit
    And I wait for 1 seconds
    Then I open editor menu
    And I wait for 1 seconds
    Then I eliminate the author
    Then I wait for no author warning to appear
    Then I wait