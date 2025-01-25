## React Native: Uninitialized State Variable Access

This repository demonstrates a common error in React Native: attempting to access a state variable before it has been initialized.  This often occurs when fetching data asynchronously. The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version. 

The error arises because the component renders before the asynchronous `fetch` call completes, causing `data` to be `null` initially. Attempting to access `data.name` before `setData` has been called results in a runtime error.

The solution involves using conditional rendering or optional chaining to safely handle the `null` value before the data is available.