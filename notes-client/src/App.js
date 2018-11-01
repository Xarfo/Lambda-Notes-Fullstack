import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import List from "./components/list/list";
import NewForm from "./components/new/newform";
import NoteCard from "./components/edit/notecard";
import EditNote from "./components/edit/editnote";
import { fetchNotes } from "./actions";

class App extends Component {
  componentDidMount() {
    fetchNotes();
  }

  render() {
    return (
      <div className="App-container">
        <Route exact path="/" component={List} />
        <Route path="/create" component={NewForm} />
        <Route path="/note/:id" component={NoteCard} />
        <Route path="/edit/:id" component={EditNote} />
      </div>
    );
  }
}

export default App;