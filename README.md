# Babbel Coding Challenge: Calculator

## Instructions

This coding challenge requires you to create a calculator using React and Redux and test its code using Jest. You should not spend more than 1-2 hours on this challenge; if there are any parts that you do not finish, please provide a high-level description of your intentions for the unimplemented portions of the application.

Intended features:

- Create a from-scratch calculator app in a new GitHub repository
- Use React for the front-end
  You can make it look however you want.
  Minimum functionality will include addition, subtraction, multiplication, division, equals, and memory storage (MS) & retrieval (MR)
- Manage the application state and its transitions with Redux
- Write unit tests to assert intended behavior using Jest
- Upon completion, give us access to the GitHub repository so we can clone it; doing so is probably easiest if you make the repo public. Ultimatelywe should be able to clone your repo locally then run npm start to use the app or npm test to run the unit tests.
- Nice-to-have: browser compatibility with latest Chrome, Firefox, and IE11

Feel free to add any additional features as long as you make it clear that you're doing so. We're looking forward to seeing what you come up with. Good luck!

## Notes

- I built the app with create-react-app
- I used browserslist (included in CRA) to support IE11. (IE11 supports CSS grid with the -ms- prefix which is added by Autoprefixer)
- I added a "C" button to clear the screen (keeps the value stored in Memory)
- Because of the time constraint I did not separate the components between presentational and container components (the "presentational" components are connected to the store)
- Naming could be improved

## Known bugs

- There is nothing at the moment preventing the user to create an expression with several consecutive operators (e.g. "12+-\*54"). The execution will cause an error.
- Numbers can overflow out of the screen
- MS doesn't clear the screen, and MR adds to the current screen value (I wasn't sure of the expected behavior there)
