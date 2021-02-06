import { loader } from "../reducers/loader";
import { home } from "../reducers/home";
import { resume } from "../reducers/resume";
import { skill } from "../reducers/skill";
import { portofolio } from "../reducers/portofolio";
import { blog } from "../reducers/blog";
import { contact } from "../reducers/contact";
import { combineReducers, createStore, } from 'redux';

export const store = createStore(combineReducers({
    loader,
    home,
    resume,
    skill,
    portofolio,
    blog,
    contact,
}))