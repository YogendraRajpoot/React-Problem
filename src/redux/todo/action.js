import { loadData, saveData } from "../../utils/localStorage";
export const Count_Personal = "Count_Personal";
export const Count_Official = "Count_Official";
export const Count_Other = "Count_Other";
export const Count_Total = "Count_Total"


export const countPer = (payload) => ({
  type: Count_Personal,
  payload,
});
export const countOff = (payload) => ({
  type: Count_Official,
  payload,
});
export const countOth = (payload) => ({
  type: Count_Other,
  payload,
});
export const totalcount = (payload) => ({
  type: Count_Total,
  payload,
});

export const todoList = (payload) => (dispatch) => {
  fetch(`https://fake-json-todo.herokuapp.com/todo`)
    .then((res) => res.json())
    .then((res) => {
      console.log("15", res);
      // setData(res);
      saveData("todoList", res)
      console.log("17", res);
      setTimeout(() => {
        dispatch(countTodoList())
      }, 1000);
    })
    .catch((err) => console.log(err));
};
export const newTodoTask = (payload) => (dispatch) => {
  const form = payload
  fetch(`https://fake-json-todo.herokuapp.com/todo`, {
    method: "post",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("30", res)
      dispatch(todoList())
    })
    .catch((err) => console.log(err));
  // setForm({
  //   title: "",
  //   description: "",
  //   date: "",
  //   progress: "",
  //   task: "",
  // });
};

export const countTodoList = (payload) => (dispatch) => {
  const Data = loadData("todoList")
  let countP = 0
  let countOF = 0
  let countOT = 0
  let total = 0
  let done = 0
  let inprogress = 0
  let todo = 0

  Data.forEach(element => {
    if (element.isOfficial === true) {
      countOF++
    }
    if (element.isOther === true) {
      countOT++
    }
    if (element.isPersonal === true) {
      countP++
    }
    if (element.progress === "done") {
      done++
    }
    if (element.progress === "inprogress") {
      inprogress++
    }
    if (element.progress === "todo") {
      todo++
    }
    total++
  });
  saveData("countP", countP)
  saveData("countOF", countOF)
  saveData("countOT", countOT)
  saveData("total", total)
  saveData("done", done)
  saveData("inprogress", inprogress)
  saveData("todo", todo)
  dispatch(countPer(countP))
  dispatch(countOff(countOF))
  dispatch(countOth(countOT))
  dispatch(totalcount(total))

  console.log("55", countOF, countOT, countP, total);

};


