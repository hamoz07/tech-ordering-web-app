import Card from "../UI/Card";
import classes from "./AvailableItems.module.css";
import TechItem from "./item/techItem";

export const DUMMY_ITEMS = [
  {
    image:"https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/h/p/hp311-1.jpg",
    id: "i1",
    name: "JBL JR300BT",
    description: "Kids Wireless on-ear headphones",
    price: 49.95,
  },
  {
    image:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc94333d4/JBL_GO_3_HERO_CAMO_0183_1605x1605px.png?sw=535&sh=535',
    id: "i2",
    name: "JBL Go 3",
    description: "Portable Waterproof Speaker",
    price: 39.95,
  },
  {
    image:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5eafdbc1/JBL_XTREME_3_HERO_BLUE_0031_x1.png?sw=535&sh=535',
    id: "i3",
    name: "JBL Xtreme 3",
    description: "Portable waterproof speaker",
    price: 12.99,
  },
  {
    image:"https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw3039bfb3/1.JBL_LIVE_PRO_2_Product%20Image_Hero_Black.png?sw=300&sh=300",
    id: "i4",
    name: "JBL Live Pro 2 TWS",
    description: "True wireless Noise Cancelling earbuds",
    price: 18.99,
  },
];

const AvailableItems = () => {
  const techItemsList = DUMMY_ITEMS.map((techitem) => (
    <TechItem
      key={techitem.id}
      id={techitem.id}
      name={techitem.name}
      desc={techitem.description}
      price={techitem.price}
      image={techitem.image}
    ></TechItem>
  ));

  return (
    <section className={classes.items}>
      <Card>
        <ul>{techItemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
