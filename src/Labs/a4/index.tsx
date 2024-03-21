import { DataRouterStateContext } from "react-router/dist/lib/context";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringSateVariables";
import DateStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";




function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
    return (
      <div className="container">
        <h1>Assignment 4</h1>
        <h2>2.4 - With Redux</h2>
        <hr/>
        <ReduxExamples/>
        <br />
        <h2>2.3 -  Before redux</h2>
        <hr/>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable />
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>

        <br/>
        <br/>
      </div>
    );
  }
  export default Assignment4;
  