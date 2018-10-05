import { FETCH_WALLPAPERS, SEARCHBAR_FOCUS, SEARCHBAR_SUBMIT } from "./types";
import axios from "axios";
import pixabay from "../config/pixabay";

export function fetchWallpapers(params) {
  const request = axios.get(pixabay(params));
  return {
    type: FETCH_WALLPAPERS,
    payload: request
  };
}

export function searchBarFocus(focus) {
  return {
    type: SEARCHBAR_FOCUS,
    payload: focus
  };
}
