// App.tsx
// The root component of the application. It imports and renders
// MyComponent, along with its own top-level styling.

import MyComponent from './MyComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render our custom component here */}
      <MyComponent />
    </div>
  );
}

export default App;
