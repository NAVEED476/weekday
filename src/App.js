import logo from "./logo.svg";
import "./App.css";
import SearchJobs from "./pages/SearchJobs";
import JobCard from "./components/JobCard";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          width: "100%",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <SearchJobs />
       
      </div>
    
    </>
  );
}

export default App;
