Feature: verify contact us page
    Scenario Outline: verify contact us page for valid data
        Given i navigate to contact us page <index>
        When i enter user details
        And i click on submit button
        Then i verify user message
        Examples:
            | index |
            | 0     |
            | 1     |



