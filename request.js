const API = "https://dummyjson.com/products/?limit=194";
const overlay = document.getElementById("overlay");
function loader(state) {
  if (state) {
    overlay.classList.remove("hidden");
  } else {
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 1000);
  }
}
const getData = async (url) => {
  loader(true);
  const request = await fetch(url);
  const data = await request.json();
    loader(false);
  return data;
};
getData(API).then((data) => {
  updateUI(data.products);
});
// getData(API).then((data) => {
//   updateCart(data.products);
// });
