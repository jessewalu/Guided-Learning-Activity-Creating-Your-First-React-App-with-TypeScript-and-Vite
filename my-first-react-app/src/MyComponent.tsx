// MyComponent.tsx
// A simple, reusable functional component built with React and TypeScript.
// It renders a heading and a paragraph of text, styled via MyComponent.css.

import type { FC } from 'react'; // Import the FC (Function Component) type from React
import './MyComponent.css'; // Import the CSS file so its styles are bundled with this component

// Defining the component as a typed functional component (FC).
// This component does not currently accept any props, but using FC
// makes it easy to extend with typed props later (e.g., FC<MyComponentProps>).
const MyComponent: FC = () => {
  return (
    // The outer <div> uses the "my-component" className so our custom
    // styles from MyComponent.css are applied to this section only.
    <div className="my-component">
      <h1>Hello from MyComponent!</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

// Exporting the component so it can be imported and used inside App.tsx
export default MyComponent;
