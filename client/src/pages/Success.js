import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <h1 className="mt-3">Thanks for your purchase!</h1>
      <Link to="/" className="btn btn-success mt-2">
        Back to home
      </Link>
    </div>
  );
}

export default Success;
