import {
  GoBell,
  GoCloudUpload,
  GoBriefcase,
  GoDashboard,
} from "react-icons/go";
import Button from "../Component/Button";
function ButtonPage() {
  const handleClick = (onClick) => {
    console.log("Clicked!");
  };
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Submit Here
        </Button>
      </div>
      <div>
        <Button warning className="mb-4">
          <GoBriefcase />
          Add me
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDashboard />
          Buy Now
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudUpload />
          Click Me
        </Button>
      </div>
      <div>
        <Button success>Delete</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
