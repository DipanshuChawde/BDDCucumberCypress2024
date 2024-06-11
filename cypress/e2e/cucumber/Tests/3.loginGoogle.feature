Feature: Google page validation
    @smoke
    Scenario: google page
        Given i visit google page
        When i see "Google" in title
        Then i see "google" in url
    @smoke @regression
    Scenario Outline: lambda test web page
        Given i visit lambda test web login page
        When i enter <userEmail> and <password>
        # And i click on login button
        Then url contain "route=account/account"


        Examples:
            | userEmail          | password |
            | dipanshu@gmail.com | dipanshu |

