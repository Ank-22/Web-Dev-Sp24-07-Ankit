import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariable from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./conditionals/ES5Functions";
import ArrowFunctions from "./conditionals/ArrowFunctions";
import ImpliedReturn from "./conditionals/ImpliedReturn";
import FunctionParenthesisAndParameters from "./conditionals/FunctionParenthesisAndParameters";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./arrays/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./arrays/TemplateLiterals";
function JavaScript() {
  console.log("Hello World");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariable />
      <IfElse />
      <TernaryOperator />
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JsonStringify />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <TemplateLiterals />
    </div>
  );
}
export default JavaScript;
