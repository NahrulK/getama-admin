import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // console.log("error upoad");
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProducts(product, dispatch);
        });
      }
    );
  };

  // console.log(file);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Produk Baru</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Gambar</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Nama</label>
          <input
            type="text"
            placeholder="Kalitemu Super"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Deskripsi</label>
          <input
            type="text"
            placeholder="Tulis deskripsi.."
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Harga</label>
          <input
            type="number"
            placeholder="Harga.."
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Kategori</label>
          <input type="text" placeholder="Kategori.." onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stok</label>
          {/* <input type="text" placeholder="123" /> */}
          <select onChange={handleChange} name="inStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
