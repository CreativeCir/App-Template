// Import React library
import React from 'react';

/**
 * @interface GreetingProps
 * @description Defines the shape of the props for the Greeting component.
 * @property {string} name - The name to be displayed in the greeting.
 */
interface GreetingProps {
  name: string;
}

/**
 * @function Greeting
 * @description A functional React component that displays a greeting message.
 *              It takes a 'name' as a prop and renders 'Hello, [name]!'.
 * @param {GreetingProps} { name } - Destructured props, expecting a 'name' string.
 * @returns {JSX.Element} A div element containing the greeting.
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Export the Greeting component as the default export
export default Greeting;

