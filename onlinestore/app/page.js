import Image from "next/image";
import Category from "./Category";
const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  let cat = await res.json();
  console.log(cat);
  let mainData = [];
  for (let i = 0; i < cat.length; i++) {
    let data = await fetch(
      "https://fakestoreapi.com/products/category/" + cat[i] + "?limit=5"
    );
    console.log("https://fakestoreapi.com/products/category/" + cat[i]);
    let temp = await data.json();
    console.log(temp);
    mainData.push({
      cat: cat[i],
      data: temp,
    });
  }
  return mainData;
};
export default async function Home() {
  const data = await getData();
  return (
    <div className="sm:p-8 p-2 bg-stone-100">
      {data.map((s) => {
        return <Category key={s.cat} cat={s.cat} data={s.data} />;
      })}
    </div>
  );
}
