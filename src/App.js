import Header from "./components/Header"
import FeedBackitem from "./components/FeedBackitem"
function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <FeedBackitem/>
      <FeedBackitem/>
      <FeedBackitem/>
      <FeedBackitem/>
    </div>
    </>
  );
}

export default App;
