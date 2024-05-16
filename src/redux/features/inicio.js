import { createSlice } from "@reduxjs/toolkit";

const inicioSlice = createSlice({
  name: "inicio",
  initialState: {
    inputSearch: "",
    inputCodigoBarras: "",
    results: [],
    currentPage: 1,
    itemsPerPage: 8,
    totalPages: 1,
    acceptedCookies:Boolean(localStorage.getItem('cookiesAccepted'))
  },
  reducers: {
    setInputSearch: (state, action) => {
        state.inputSearch = action.payload;
    },
    setInputCodigoBarras: (state, action) => {
        state.inputCodigoBarras = action.payload;
    },
    setResults: (state, action) => {
        state.results = action.payload;
        state.currentPage = 1;
        state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setAcceptedCookies: (state, action) => {
      state.acceptedCookies = action.payload;
    },
    inicializarInicio: (state) => {
      state.inputSearch = "";
      state.inputCodigoBarras = "";
      state.results = [];
      state.currentPage = 1;
      state.itemsPerPage = 8;
      state.totalPages = 1;
      state.acceptedCookies=Boolean(localStorage.getItem('cookiesAccepted'))
    },
  },
});

export const { setInputSearch, setInputCodigoBarras, setResults, inicializarInicio, setCurrentPage, setAcceptedCookies } = inicioSlice.actions;

export default inicioSlice.reducer;
