# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library, and with React we can build big, fast Web single-page apps. With React we can build components and composable user interfaces, and one component can be composed of many components.

1. Describe component state.

State, in React, is how the component will dynamically behave within the scope of the component. We use state when a component needs to keep track of information between renderings. The component itself can create, update, and use state. State can be any type: an object, array, string, boolean. For this we use useState. It returns a pair of values: the current state and a function that updates it.

1. Describe props.

Props in React are just like parameters in JS functions. They allow us to make reusable components, to pass in data that will render the component to its initial state.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. Examples of side effects are fetching data from an API, timers, logging.
Side effects in React: Similarly, a side effect is something that can cause a component to return a different output for the same state and props. This would be calling out to a data point, for example.
We use useEffect hook for running after the render is committed to the screen. Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.
