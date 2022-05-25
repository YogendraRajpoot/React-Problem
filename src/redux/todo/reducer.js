import { Count_Official, Count_Other, Count_Personal, Count_Total } from "../todo/action";

const initState = {
  countp: "",
  countof: "",
  countot: "",
  total: "",
}
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case Count_Personal:
      return {
        ...state,
        countp: action.payload,
      };
    case Count_Official:
      return {
        ...state,
        countof: action.payload,
      };
    case Count_Other:
      return {
        ...state,
        countot: action.payload,
      };
    case Count_Total:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};