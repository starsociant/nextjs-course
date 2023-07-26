export default function Button({ isSquared = false, label }) {
  let classes =
    "bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ";

  if (isSquared) {
    classes += "py-4";
  } else {
    classes += "px-4 py-2";
  }

  return <button className={classes}>{label}</button>;
}
