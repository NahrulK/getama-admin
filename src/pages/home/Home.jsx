import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Aktifitas Pengguna"
        grid
        activeUser="Active User"
        userRun="User Run"
        muteUser="Mute User"
      />
    </div>
  );
}
