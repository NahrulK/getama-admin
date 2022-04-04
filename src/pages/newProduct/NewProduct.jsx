import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Produk Baru</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Gambar</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nama</label>
          <input type="text" placeholder="Kalitemu Super" />
        </div>
        <div className="addProductItem">
          <label>Stok</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
