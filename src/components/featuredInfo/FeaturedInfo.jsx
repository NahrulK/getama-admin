import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / (res.data[0].total - 100));

        console.log(setIncome);
      } catch {}
    };
    getIncome();
  }, []);

  // const { _id, total } = income[1];

  // console.log(income);

  // if (income) {
  //   console.log(income[0]);
  // }

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Pendapatan</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp. {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
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
