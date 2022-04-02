import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transaksi Terakhir</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Hari/Tgl</th>
          <th className="widgetLgTh">Jumlah Transaksi</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://drive.google.com/uc?id=1pf_x1YkvjEEjW1vnsvfXVTg0eKpplEiM"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ermawati Setia Ningsih</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rp.1000000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://drive.google.com/uc?id=1cpB8dykw6dA1dd7klkPt7yxlbGCO843-"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">M Rizal Umamy Fajri.S.Kom</span>
          </td>
          <td className="widgetLgDate">6 Jun 2022</td>
          <td className="widgetLgAmount">Rp.5000000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://drive.google.com/uc?id=1cpB8dykw6dA1dd7klkPt7yxlbGCO843-"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">M Rizal Umamy Fajri.S.Kom</span>
          </td>
          <td className="widgetLgDate">10 Jun 2022</td>
          <td className="widgetLgAmount">Rp.2000000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://drive.google.com/uc?id=1-QKAnXgL4WlM095s1U9zVhQ-X1PRCn8F"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Raudatul Aini</span>
          </td>
          <td className="widgetLgDate">1 Jun 2022</td>
          <td className="widgetLgAmount">Rp.500000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
