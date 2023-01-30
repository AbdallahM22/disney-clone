import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const initialState = {
  movies: [],
  recommend: [],
  newDisney: [],
  original: [],
  trending: [],
  watchlist: []
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWatchList: (state, action)=> {
        const newMovie = action.payload;
        const founded = state.watchlist.find(element=> element.id === newMovie.id);
        if (founded) {
            return;
        } else {
            state.watchlist.push(action.payload);
        }
    },
    removeFromWatchList: (state, action) => {
      const watchlist = state.watchlist.filter(ele=> ele.id !== action.payload);
      state.watchlist = watchlist;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      let recommend = [],newDisney = [],original = [], trending = []
      action.payload.map((movie) => {
        switch (movie.type) {
          case "recommend":
            recommend.push(movie)
            break;
          case "new":
            newDisney.push(movie)
            break;
          case "original":
            original.push(movie)
            break;
          case "trending":
            trending.push(movie)
            break;
          default:
            return state;
        }
      });
      state.movies = action.payload;
      state.recommend = recommend;
      state.newDisney = newDisney;
      state.original = original;
      state.trending = trending;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
    });
  },
});

const fetchData = async () => {
    let data;
    await getDocs(collection(db, "movies")).then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
    return data;
  };

export const fetchMovies = createAsyncThunk("movies/fetchMovies", fetchData);


export const {addToWatchList, removeFromWatchList } = moviesSlice.actions;
export default moviesSlice.reducer;
