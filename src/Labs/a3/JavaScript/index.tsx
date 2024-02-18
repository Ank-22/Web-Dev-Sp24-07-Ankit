import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariable from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./conditionals/ES5Functions";
import ArrowFunctions from "./conditionals/ArrowFunctions";
import ImpliedReturn from "./conditionals/ImpliedReturn";
import FunctionParenthesisAndParameters from "./conditionals/FunctionParenthesisAndParameters";
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
    </div>
  );
}
export default JavaScript;
