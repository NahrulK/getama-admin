import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Pendapatan</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp. 5.000,00</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Dibandingkan dengan bulan lalu</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Penjualan</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp.7.000.000,00</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Dibandingkan dengan bulan lalu</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pembelian</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp.8.000.000,00</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Dibandingkan dengan bulan lalu</span>
      </div>
    </div>
  );
}
