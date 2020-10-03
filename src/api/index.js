import axios from "axios";

/**
 * API creator, used in actions
 */

export const api = axios.create({
  baseURL: `${window.__ENV__.REACT_APP_API}`,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json"
  }
});