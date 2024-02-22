import ModuleList from "../Modules/List";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from "./Status";;

function Home() {
  return (
    <div className="wd-flex-body">
      <div className="flex-fill">
      <h2>Home</h2>
      <ModuleList />
      </div>
      <div className="d-none d-lg-block ms-3 me-3">
      <Status />
      </div>
    </div>
  );
}
export default Home;