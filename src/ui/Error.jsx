import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="errorContainer">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* <Button type={"primary"} onClick={() => navigate(-1)}>
        &larr; Go back
      </Button> */}
    </div>
  );
}

export default Error;
