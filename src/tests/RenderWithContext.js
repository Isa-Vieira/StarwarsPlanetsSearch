import React from "react";
import { render } from "@testing-library/react"
import StarWarsProvider from "../componentes.js/StarWarsProvider";

export const renderWithContext = (component) => ({
...render(<StarWarsProvider>{component}</StarWarsProvider>),
}); 
