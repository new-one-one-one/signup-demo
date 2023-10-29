# React Project - User Signup and Profile

This React project is designed to provide a user signup experience with various features and reusable components. It also includes validation functions, responsive design, and user data storage with an expiration key. Below are the key aspects of this project:

## Project Setup

1. Clone the project from the Git repository:
   ```bash
   git clone https://github.com/new-one-one-one/signup-demo.git
   ```

2. Install project dependencies using npm:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Reusable Components

### LabelWithValue

- A reusable component for rendering labels with associated values.
- Supports horizontal and vertical alignments.
- Allows for error messages, validation, and optional helper text.
- Dynamic label colors based on validation status.
- Provides clear separation of label, value, and additional information.

### CardContainer

- A versatile card component for organizing content.
- Features customizable header, body, and footer sections.
- Adjustable width and shadow effects.
- Designed for responsive layouts.

## Validation Functions

1. **Email Validation**

   - Implements a robust email validation function.
   - Checks if the provided email follows a valid email format using regular expressions.

2. **Password Validation**

   - Validates passwords based on specific criteria, including:
     - Minimum length of 10 characters.
     - At least 8 alphabetic characters.
     - At least one lowercase and one uppercase letter.
     - At least one special character.
     - At least one numeric character.

## React Router Redirection

- Utilizes React Router for handling route navigation.
- Implements dynamic redirection logic to ensure a smooth user experience.
- Redirects users to the signup page or profile page based on certain conditions.

## Responsive Design

- The project incorporates responsive design principles.
- Components are designed to adapt to different screen sizes and orientations.
- Provides a consistent user experience on various devices.

## User Data Storage

- Stores user data in the browser's local storage.
- Uses an expiration key to ensure that user data is automatically deleted after a specified time (e.g., 1 minute).
- Data retrieval and expiration are handled effectively.

## Contributors

- [Piyush Ohri](https://github.com/new-one-one-one)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
