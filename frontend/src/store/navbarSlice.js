import { createSlice } from "@reduxjs/toolkit";


const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        mobileMenuIsShown: false,
        navbarColorIsDark: true,
        light: {bg: 'linear-gradient(180deg,#000,transparent)'},
        dark:  {bg: '#333 linear-gradient(180deg,#000,transparent)'}
            

    },
    reducers: {
        toggleMenu(state) {
            state.mobileMenuIsShown = !state.mobileMenuIsShown
        },
        changeNavbarColor(state) {
            state.navbarColorIsDark = !state.navbarColorIsDark 
        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice;