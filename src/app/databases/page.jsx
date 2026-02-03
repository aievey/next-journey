import Link from "next/link";
import TodosPage from "./todos";
export const metadata = {
  title: "Working in Databases",
  description: "Learning about working with databases in web development.",
};
const DataExperiments = () => {
  return (
    <div>
      <Link href="/databases/mdn-async">Asynchronous</Link>
      <TodosPage />
    </div>
  );
};

export default DataExperiments;
