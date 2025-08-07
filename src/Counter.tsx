// Import React and Component from React library
import React, { Component } from 'react';

/**
 * @interface CounterProps
 * @description Defines the shape of the props for the Counter component.
 *              In this case, the component does not receive any props, so it's an empty interface.
 */
interface CounterProps {}

/**
 * @interface CounterState
 * @description Defines the shape of the state for the Counter component.
 * @property {number} count - The current count value.
 */
interface CounterState {
  count: number;
}

/**
 * @class Counter
 * @extends React.Component<CounterProps, CounterState>
 * @description A class-based React component that displays a counter and allows incrementing it.
 *              It manages its own internal state for the count.
 */
class Counter extends Component<CounterProps, CounterState> {
  /**
   * @property {CounterState} state
   * @description Initializes the component's state with a count of 0.
   */
  state: CounterState = {
    count: 0
  };

  /**
   * @method increment
   * @description Increments the count in the component's state by 1.
   *              This method is an arrow function to ensure 'this' context is correctly bound.
   */
  increment = (): void => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  /**
   * @method render
   * @description Renders the component's UI.
   * @returns {JSX.Element} A div element containing the current count and an increment button.
   */
  render(): React.ReactElement {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export the Counter component as the default export
export default Counter;

