import Gallery from "@/components/react.js-components/section1/amazing-scientists01";
import TodoList from "@/components/react.js-components/section1/hedy-lamarr's-todo02";
import NotableScientist from "@/components/react.js-components/section1/notable-scientists03";
import PackingList from "@/components/react.js-components/section1/conditionally-returning04";
const DescribingUI = () => {
  return (
    <div className="h-full space-y-4 overflow-y-scroll">
      <h1>Describing UI</h1>
      {/* components with subject title. */}
      <div className="space-y-4">
        <div>
          <h2>Componenting</h2>
          <Gallery />
        </div>
        <div>
          <h2>Writing markup in JSX</h2>
          <TodoList />
        </div>
        <div>
          <h2>Passing props</h2>
          <NotableScientist />
        </div>
        <div>
          <h2>Conditional rendering</h2>
          <PackingList />
        </div>
      </div>
      {/* -------------------------------- */}
    </div>
  );
};

export default DescribingUI;
