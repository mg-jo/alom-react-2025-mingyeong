import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * 과제1-2: 이곳에 assignments 폴더 내 작성한 코드를 불러오는 코드를 작성해주세요.
 * 예시:
 * import Woojin from "./assignments/woojin";
 */

import Example from "./assignments/example";

function App() {
  return (
    <Router>
      <Routes>
        {/* 과제1-2: 이곳에 과제1-1에서 작성한 코드를 불러오는 코드를 작성해주세요.
            ex) <Route path="/woojin" element={<Woojin />} />
        */}
        <Route
          path="/"
          element={<div>App.js와 example.js를 확인해주세요.</div>}
        />
        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
