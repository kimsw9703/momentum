const mainFocusForm = document.querySelector("#focus-form");
const mainFocusInput = mainFocusForm.querySelector("input");
const focusQuestion = document.querySelector("#focus-question");
const todaysFocus = document.querySelector("#todays-focus");
const todaysFocusDisplay = todaysFocus.querySelector("span:last-child");

function paintTodaysFocus(mainFocus) {
  todaysFocusDisplay.innerText = mainFocus;
  todaysFocus.classList.remove(HIDDEN_CLASSNAME);
}

function onToDoSubmit(event) {
  event.preventDefault();
  const mainFocus = mainFocusInput.value;
  localStorage.setItem("mainFocus", mainFocus);
  focusQuestion.classList.add(HIDDEN_CLASSNAME);
  mainFocusForm.classList.add(HIDDEN_CLASSNAME);
  paintTodaysFocus(mainFocus);
}

mainFocusForm.addEventListener("submit", onToDoSubmit);

const savedMainFocus = localStorage.getItem("mainFocus");

if (savedMainFocus === null) {
  focusQuestion.classList.remove(HIDDEN_CLASSNAME);
  mainFocusForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintTodaysFocus(savedMainFocus);
}
