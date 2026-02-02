const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
fetchPromise.then((response) => {
  jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

const LearningFetch = () => {
  return <div>fetch</div>;
};

export default LearningFetch;
