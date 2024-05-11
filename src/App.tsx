import Router from "./Router";
import { Theme } from "@radix-ui/themes";
function App() {
  return (
    <div className="h-full w-full">
      <Theme>
        <Router />
      </Theme>
    </div>
  );
}

export default App;
