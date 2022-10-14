import "./App.css";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#0070f3",
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={theme}>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </NextUIProvider>
  );
}

export default App;
