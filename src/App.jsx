// import Counter from "./components/Counter";
// import Calculator from "./components/Calculator";
// import MessageCard from "./components/MessageCard";
// import UserProfile from "./components/UserProfile";

// function App() {
//   return (
//     <div>
//       <h1>Masai React Assignment</h1>

//       <Counter />
//       <Calculator />

//       <MessageCard title="Hello" message="Welcome to React" />
//       <MessageCard title="Props" message="Props make components reusable" />
//       <MessageCard title="State" message="State manages data" />

//       <UserProfile />
//     </div>
//   );
// }


// export default App;
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
