type SubMenu = {
  id: string;
  menu: string;
};

type SubMenus = {
  subMenus: SubMenu[];
};

const subMenus = [
  {
    id: 1,
    menu: "item",
  },
  {
    id: 2,
    menu: "spot",
  },
  {
    id: 3,
    menu: "collection",
  },
];

export default function Aside() {
  return (
    <aside>
      <div className="side sticky">
        <h3 className="sub-title">GACHAGACHA</h3>
        <ul className="sub-menu">
          <li>
            <a href="#sec1">item</a>
          </li>
          <li>
            <a href="#sec2">spot</a>
          </li>
          <li>
            <a href="#sec3">collection</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
