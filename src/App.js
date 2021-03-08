//import "./styles.css";
import Header from "./app/Containers/Header/Header";
import Body from "./app/Containers/Body/Body";
import Footer from "./app/Containers/Footer/Footer";
import React from "react";
import AddMovieDialog from "./app/Components/AddMovieDialog/AddMovieDialog";

let movies = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: "2004",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg"
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama,Biography,Music",
    releaseDate: "2003",
    imageUrl:
      "https://s1.livelib.ru/boocover/1005491581/o/2267/Owen_Williams__Bohemian_Rhapsody_The_Official_Book_of_the_Movie.jpeg"
  },
  {
    title: "Bill: vol2",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000204256/o/edfb/D._K._Holm__Kill_Bill_An_Unofficial_Casebook.jpeg"
  },
  {
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: "2004",
    imageUrl:
      "https://s1.livelib.ru/boocover/1003806448/o/c980/Brandon_T._Snider__Marvelamp039s_Avengers_Infinity_War_The_Cosmic_Quest_Vol._2_A.jpeg"
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: "2003",
    imageUrl:
      "https://s1.livelib.ru/boocover/1003011535/o/32b8/Bianca_Scardoni__Inception.jpeg"
  },
  {
    title: "Reservoir Dogs",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000108581/o/f2c0/Kventin_Tarantino__Beshenye_psy.jpeg"
  }
].sort((a, b) => {
  // sort by "release date" by default
  return a.releaseDate.localeCompare(b.releaseDate);
});

let mockedMovie = {
  title: "Mocked title",
  genre: "Mocked genre",
  releaseDate: "2004",
  imageUrl:
    "https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg"
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAddMovieDialogVisible: false,
      movies: movies,
      sortBy: "releaseDate"
    };
    this.showAddMovieDialog = this.showAddMovieDialog.bind(this);
    this.closeAddMovieDialog = this.closeAddMovieDialog.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
  }

  showAddMovieDialog(e) {
    this.setState({ isAddMovieDialogVisible: true });
  }

  closeAddMovieDialog(e) {
    this.setState({ isAddMovieDialogVisible: false });
  }

  showEditMovieDialog(e) {
    console.log("edit movie");
  }

  showDeleteMovieDialog(e) {
    console.log("delete movie");
  }

  // add mocked element to array
  addMovie(e) {
    let newMovies = this.state.movies.slice();
    newMovies.push(mockedMovie);
    newMovies.sort((a, b) => {
      return a[this.state.sortBy].localeCompare(b[this.state.sortBy]);
    });

    this.setState({ movies: newMovies, isAddMovieDialogVisible: false });
  }

  setSortBy(e, newValue) {
    let newMovies = this.state.movies.slice();
    newMovies.sort((a, b) => {
      return a[newValue].localeCompare(b[newValue]);
    });

    this.setState({ sortBy: newValue, movies: newMovies });
  }

  render() {
    return (
      <>
        <Header onAddMovie={this.showAddMovieDialog} />
        <Body
          movies={this.state.movies}
          sortBy={this.state.sortBy}
          onChangeSortBy={this.setSortBy}
          onEditMovie={this.showEditMovieDialog}
          onDeleteMovie={this.showDeleteMovieDialog}
        />
        <Footer />
        <AddMovieDialog
          show={this.state.isAddMovieDialogVisible}
          onClose={this.closeAddMovieDialog}
          onSubmit={this.addMovie}
        />
      </>
    );
  }
}
