# Alberto Russo - Time Out exercise

The exercise was accomplished using ES6 and React.js


## Getting Started

As per request there are no other prerequisites to run the example!
So, clone the repository and click on index.html.

## Data structure

I created 2 files:

*js/user-list.js* contains the list of user with food and drink preferences.
*js/venues-list.js* contains the list of venues.

User and venues lists are defined *const* to be sure they are not affected by overwriting and/or changes.

### socialize.js

socialize is an object ready for unit test built to manage the list of available venues.

The most important methods returned by socialize are:

*getVenuesListComputed* returns an object that contains the list of available / avoid venues.

*getAvailableVenues* returns an object that contains the list of available venues.

*getAvoidVenues* returns ad object that contains the list of avoid venues.


### React

I built a script in React.js that contains the logic to manipulate the DOM and present the final solution.

In particular I created a React Element called VenuesListRender.

*VenuesListRender* contains an attribute called 'list' used to pass the list of available and avoid venues.

*NOTE:* available and avoid venues are generated using the relative socialize methods.

## Other notes to keep the exercise simple.

- I am considering venuesList and userList defined in proper way.
- The code written in React.js is wrapped in to a inline script.
- There are no style rules defined but just the HTML markup logic.

## Authors

Alberto Russo - alberto.russo.london@gmail.com

## License

This project is licensed under the MIT License
