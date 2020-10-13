import { ADD, DELETENAME } from "../constants/action-types";

export function addName(payload) {
  return { type: ADD, payload };
}
export function deleteName(payload) {
  return { type: DELETENAME, payload };
}
