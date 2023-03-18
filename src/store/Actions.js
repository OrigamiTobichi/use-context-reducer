import { ADD_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT, EDIT_TODO_INPUT, DELETE_ALL_TODO_INPUT } from "./Contants";

export const setToDoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};

export const addToDoInput = (payload) => {
  return {
    type: ADD_TODO_INPUT,
    payload,
  };
};

export const deleteToDoInput = (payload) => {
  return {
    type: DELETE_TODO_INPUT,
    payload,
  };
};

export const editToDoInput = (key, payload) => {
  return {
    type: EDIT_TODO_INPUT,
    payload,
    key,
  };
};

export const deleteAllToDoInput = (payload) => {
  return {
    type: DELETE_ALL_TODO_INPUT,
    payload,
  };
};
