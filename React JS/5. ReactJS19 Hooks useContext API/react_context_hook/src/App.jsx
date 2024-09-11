import ThemedComponent from "./ThemedComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
