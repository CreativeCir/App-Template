// STEP 1: Import React and Component with TypeScript types
import React, { Component } from 'react';

// STEP 2: Define interface for component state
// This replaces the plain JavaScript object with typed structure
interface CounterState {
  count: number; // 'count' must be a number
}

// STEP 3: Extend Component with type parameters
// First generic {} is for props (empty in this case)
// Second generic is for state type (CounterState)
class Counter extends Component<{}, CounterState> {
  // STEP 4: Initialize state with explicit type annotation
  // This ensures state matches our interface
  state: CounterState = {
    count: 0
  };

  // STEP 5: Type the method parameters and return value
  // Arrow function maintains proper 'this' binding
  // ': void' specifies no return value
  increment = (): void => {
    // Functional setState ensures type-safe state updates
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // STEP 6: Type the render method return value
  // React.ReactNode allows any valid JSX return type
  render(): React.ReactNode {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// STEP 7: Export the typed component
export default Counter;
