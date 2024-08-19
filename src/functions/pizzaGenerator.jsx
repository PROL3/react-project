import PizzaCard from "../Components/PizzaCard";

export const pizzaGenerator = (arr) => {
  const newarr = arr.map((item) => {
    return <PizzaCard item={item} key={item.id} />;
  });

  return newarr;
};
