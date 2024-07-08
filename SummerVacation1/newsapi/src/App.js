import { RecoilRoot } from "recoil";
import NewsList from "./components/news/NewsList";
import Api from "../src/components/api/api";

function App() {
  return (
    <RecoilRoot>
      <Api>
        <NewsList />
      </Api>
    </RecoilRoot>
  );
}

export default App;
