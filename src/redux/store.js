import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login";
import datosGlobalesReducer from "./features/datosGlobales";
import inicioReducer from "./features/inicio";

export const store = configureStore({
    reducer:{
        login:loginReducer,
        datosGlobales:datosGlobalesReducer,
        inicio:inicioReducer
    },
});
