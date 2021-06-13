function Reloader(props) {
  return (
    <div id="load" className="preloader">
      <div className="preloader-loading-icon"></div>
    </div>
  );
}
export default Reloader;
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state === "interactive") {
    document.getElementById("contents").style.visibility = "hidden";
  } else if (state === "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 1000);
  }
};
