import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-task" component={AddTask} />
            <Route path="/edit/:id" component={EditTask} />
          </Switch>
        </main>
      </TaskProvider>
    </Router>
  );
};

export default App;
