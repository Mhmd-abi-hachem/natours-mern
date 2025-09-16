import { useMoveBack } from "../shared/hooks/useMoveBack";
import Button from "../shared/ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="max-w-[100rem] min-h-screen mx-auto flex items-center justify-center px-4 sm:px-8 md:px-12">
      <div className="flex flex-col gap-1 items-center justify-center p-6 sm:p-10 md:p-12 text-center">
        <h1 className="heading-secondary !text-[2.7rem] md:!text-5xl !leading-relaxed !tracking-wide sm:!tracking-wider">
          The page you are looking for could not be found
          <span className="text-[#f7f7f7]"> 😢</span>
        </h1>

        <Button onClick={moveBack} size="large">
          <span className="text-4xl mr-2 sm:mr-4 mb-4 md:mb-0">&larr;</span>
          Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
