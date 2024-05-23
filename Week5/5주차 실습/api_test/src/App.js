import axios from "axios";

function App() {
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div className="App">
      <h3>5주차 실습 페이지입니다!</h3>
    </div>
  );
}

export default App;
