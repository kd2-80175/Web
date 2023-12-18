import axios from "axios";
import { useEffect, useState } from "react";
import './back.css';
import './validation';
import ValidateForEmpty from "./validation";
function Dashboard() {
  const url = "http://127.0.0.1:5000/products";
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    productid: "",
    producttitle: "",
    price: "",
    stock: "",
  });

  const FetchRecords = () => {
    axios.get(url).then((result) => {
      setProducts(result.data);
    });
  };
  const OnTextChanged = (args) => {
    var copyofProduct = { ...product };
    copyofProduct[args.target.name] = args.target.value;
    setProduct(copyofProduct);
  };
  const RemoveRecord = (productid) => {
    console.log(productid);

    var deleteUrl = url + "/" + productid;
    axios.delete(deleteUrl).then((result) => {
      if (
        result.data.affectedRows !== undefined &&
        result.data.affectedRows > 0
      ) {
        FetchRecords();
      }
    });
  };
  const AddRecord=()=>{
     axios.post(url,product).then((result)=>{
      ValidateForEmpty("txtNo","divForNoError","Id is required");
      ValidateForEmpty("txtTitle","divForTitleError","Title is required");
      ValidateForEmpty("txtprice","divForPriceError","Price is required");
      ValidateForEmpty("txtstock","divForStockError","Stock is required");
   
        if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
            FetchRecords();
            Reset();
        }
    })
  }
  const UpdateRecord=()=>{
   var updateUrl= url + "/" + product.productid;
    axios.put(updateUrl,product).then((result)=>{
        if(result.data.affectedRows !== undefined && result.data.affectedRows > 0){
            FetchRecords();
            Reset();
        }
    })
  }
  const Reset=()=>{
    setProduct({productid:"",producttitle:"",price:"",stock:""});
  }
  const EditRecord = (productid) => {
    for (var i = 0; i < products.length; i++) {
      if (products[i].productid === productid) {
        var productToEdit = { ...products[i] };
        setProduct(productToEdit);
        break;
      }
    }
  };

  useEffect(() => {
    FetchRecords();
  }, []);
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>productid</td>
              <td>
                <input
                  type="number"
                  name="productid"
                  value={product.productid}
                  onChange={OnTextChanged}
                  id="txtNo"
                />
              </td>
              <td>
              <div className="valid" id="divForNoError"></div>
              </td>
            </tr>
            <tr>
              <td>producttitle</td>
              <td>
                <input
                  type="text"
                  name="producttitle"
                  value={product.producttitle}
                  onChange={OnTextChanged}
                  id="txtTitle"
                />
              </td>
              <td>
              <div className="valid" id="divForTitleError"></div>
              </td>
            </tr>
            <tr>
              <td>price</td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={OnTextChanged}
                  id="txtprice"
                />
              </td>
              <td>
              <div className="valid" id="divForPriceError"></div>
              </td>
            </tr>
            <tr>
              <td>stock</td>
              <td>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={OnTextChanged}
                  
                  id="txtstock"
                />
              </td>
              <td>
              <div className="valid" id="divForStockError"></div>
              </td>
            </tr>
            <tr>
                <td></td>
                <td><button className="btn btn-primary" onClick={AddRecord}>Add Record</button>
                <button className="btn btn-success" onClick={UpdateRecord}>Update Record</button>
                <button className="btn btn-info" onClick={Reset}>Reset Record</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <div className="back">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>productid</th>
              <th>producttitle </th>
              <th>price</th>
              <th>stock</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.productid}>
                  <td>{product.productid}</td>
                  <td>{product.producttitle}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        EditRecord(product.productid);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        RemoveRecord(product.productid);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
