import { fetchDataFromStrapi, processFlyBlockData, processHomeData } from "@/utils/strapi.utils";
import FlyBlocks from "./_components/FlyBlocks";
import Image from "next/image";

export default async function Home() {
  const data = await fetchDataFromStrapi('option?populate=deep');
  const flyBlocksData = await fetchDataFromStrapi('travels?populate=deep');
  const countriesData = await fetchDataFromStrapi('countries');
  const homeData = processHomeData(data);
  const flyBlockData = processFlyBlockData(flyBlocksData);

  return (
    <main className="main home">
      <div className="home__app">

        <Image src={homeData.src || '/img/kenny-fly.png'} alt={homeData.alt || 'Kenny Fly'} className="home__logo" />

        <p className="home__counter">Countries: <strong>{countriesData.length}</strong> / 195</p>

        <FlyBlocks items={flyBlockData} />
      
      </div>
    </main>
  );
}
