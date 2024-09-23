import Image from "next/image";

type Spot = {
  id: string;
  name: string;
  image: string;
  spotType: string;
};

type Props = {
  spots: Spot[];
};

export function Spot({ spots }: Props) {
  if (spots.length === 0) {
    return <p>SPOTがありません。</p>;
  }

  return (
    <section id="sec2">
      <ul className="tab">
        <li>
          <a href="#tab1" className="current2">
            city
          </a>
        </li>
        <li>
          <a href="#tab2">outside</a>
        </li>
      </ul>

      <div id="sec2contents">
        <div className="sec2aside">
          <div className="sec2_sticky">
            <h3>RECOMMENDATION GACHAGACHA SPOT</h3>
          </div>
        </div>

        <div className="sec2article">
          <article id="tab1">
            <div className="tab0">
              {spots.map((spot) =>
                spot.spotType === "city" ? (
                  <div className="spot" key={spot.id}>
                    <h4>{spot.name}</h4>
                    <ul>
                      <li>
                        <Image
                          src={spot.image}
                          alt=""
                          width={300}
                          height={300}
                        />
                      </li>
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          </article>
          <article id="tab2">
            <div className="tab0">
              {spots.map((spot) =>
                spot.spotType === "outside" ? (
                  <div className="spot" key={spot.id}>
                    <h4>{spot.name}</h4>
                    <ul>
                      <li>
                        <Image
                          src={spot.image}
                          alt=""
                          width={300}
                          height={300}
                        />
                      </li>
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
