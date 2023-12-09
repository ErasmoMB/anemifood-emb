import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div>
      <h1 className="mt-3">Purchase cancelled!</h1>
      <Link to="/" className="btn btn-danger mt-2">
        Back to home
      </Link>
    </div>
  );
}

export default Cancel;
