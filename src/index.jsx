import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Resume } from "./pages/Resume/index.jsx";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Resume} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
