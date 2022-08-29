import { Fragment } from "react";

function TodoItem(props: any) {
  const { id, heading, description, done } = props;
  return (
    <Fragment>
      <td className="py-5 font-bold text-blue-600">{heading}</td>
      <td className="py-5">{description}</td>
      <td className="py-5">{done === "true" ? <img width="25" src="../../check.png" /> : <img width="25" src="../../uncheck.jpeg" />}</td>
      <td className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
        <button className="id">Delete</button>
      </td>
    </Fragment>
  );
}

export default TodoItem;
