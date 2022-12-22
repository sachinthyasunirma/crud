import QuestionAddtHOC from "./HOC/QuestionAdd/QuestionAdd.HOC";
import QuestionListHOC from "./HOC/QuestionList/QuestionList.HOC";
import QuestionAddPage from "./Pages/QuestionAdd/QuestionAdd.Page";
import QuestionListPage from "./Pages/QuestionList/QuestionList.Page";

function App() {
  return (
    <>
      <QuestionListHOC exact path="/"  component={<QuestionListPage/>}/>
      <QuestionAddtHOC exact path="/add/question/:id"  component={<QuestionAddPage/>}/>
    </>
  );
}

export default App;
