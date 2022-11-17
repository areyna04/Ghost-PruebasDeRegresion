Feature: Editar Post

@user6 @web
Scenario: No debes ser capaz de dejar vacio el autor de un post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    Then I enter email
    And I wait for 3 seconds
    Then I enter password
    And I wait for 3 seconds
    Then I click next
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