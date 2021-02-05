import React from "react";

import { ThemeProvider } from "@material-ui/styles";

import theme from '../src/utils/theme'

const StylesDecorator = storyFn => {
    <ThemeProvider theme={theme}>
        {storyFn()}
    </ThemeProvider>
};

export default StylesDecorator;