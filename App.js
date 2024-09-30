/**
 *
 *    <div id="parent">
 *      <div id="child">
 *        <h1 >nested html </h1>
 *        <h2> i am h2 tag</h2>
 *      </div>
 *     </div>
 *
 */
const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

console.log(parent); // object

// it create h1 elemnt in react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hellow world from react"
// );
// console.log(heading); // object

// it create root node of the element
const root = ReactDOM.createRoot(document.getElementById("root"));

//append element inside root
// root.render(heading)
root.render(parent);
