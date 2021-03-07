//import "./styles.css";
import Header from "./app/Containers/Header/Header";
import Body from "./app/Containers/Body/Body";
import Footer from "./app/Containers/Footer/Footer";
import React from "react";
import AddMovieDialog from "./app/Components/AddMovieDialog/AddMovieDialog";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isAddMovieDialogVisible: false };
    this.showAddMovieDialog = this.showAddMovieDialog.bind(this);
    this.closeAddMovieDialog = this.closeAddMovieDialog.bind(this);
  }

  showAddMovieDialog() {
    this.setState({ isAddMovieDialogVisible: true });
  }

  closeAddMovieDialog() {
    this.setState({ isAddMovieDialogVisible: false });
  }

  render() {
    return (
      <>
        <Header onAddMovie={this.showAddMovieDialog} />
        <Body />
        <Footer />
        <AddMovieDialog
          show={this.state.isAddMovieDialogVisible}
          onClose={this.closeAddMovieDialog}
        />
      </>
    );
  }
}
