import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ShoeInfo from "./components/ShoeInfo";
import Cart from "./components/Cart";
import useShoes from "./contexts/CartContext";

function App() {

  const {arr,total,setArr,setTotal}=useShoes();
  
  function addNewShoe(shoe) {
    let present=false;
    for(let a of arr){
      if(a.name===shoe.name){
        setTotal(shoe.price+total);
        a.q+=1;
        present=true;
      }
    }
    if(!present) setArr([...arr, shoe]);
  }
  

  function removeFromArray(id){
    const newArray=arr.filter(obj => obj !== id);
    setArr([...newArray]);
  }
  useEffect(()=>{
    if(arr.length===0) setTotal(0);
  },[arr]); 

  // useEffect(() => {
  //   const arr = JSON.parse(localStorage.getItem("arr"))

  //   if (arr && arr.length > 0) {
  //     setArr(arr)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("arr", JSON.stringify(arr))
  // }, [arr])
  
  return (
    <>
      <Navbar /> 
      <div className="main-content">
        <div id="shoes">
          <ShoeInfo
            imgSrc="https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0"
            name="Orange Sneaker"
            price="$70"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
          />
          <ShoeInfo
            imgSrc="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
            name="Nike Red Sneakers"
            price="$120"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
           
          />
          <ShoeInfo
            imgSrc="https://cdn.fortsu.com/images/products/nike-air-zoom-vomero-13_men.jpg"
            name="Nike Air Zoom Blue"
            price="$95"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://thumblr.uniid.it/product/166473/cdd94af8e5fd.jpg"
            name="Nike Air zoom black"
            price="$100"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://www.freeiconspng.com/uploads/sneakers-shoes-png-image-3.png"
            name="Merrell"
            price="$90"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://th.bing.com/th/id/R.86716a6e7134ece419350c4f9400952a?rik=TUH0FnCRDRfmcA&riu=http%3a%2f%2fsneakernews.com%2fwp-content%2fuploads%2f2016%2f12%2fjordan-1-top-three-christmas-restock.jpg&ehk=DW9F5UT5t2dilvd5FWq7GlLbv36EydtSc85nmlG6sEI%3d&risl=&pid=ImgRaw&r=0"
            name="Air Jordan"
            price="$110"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://i.pinimg.com/736x/2e/b2/e4/2eb2e463c54f4c04426c9d12bbc3db60--latest-nike-shoes-nike-air-mag.jpg"
            name="Ultimate Nike"
            price="$150"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://i0.wp.com/addicfashion.com/wp-content/uploads/2019/06/cool-shoes-summer-ideas-for-men-that-looks-cool29.jpg?w=756&h=756&crop=1&ssl=1"
            name="British Red Sneakers"
            price="$100"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://i.pinimg.com/736x/21/92/12/21921270f239deb5c4a261243dc7a6cc.jpg"
            name="British Blue Sneakers"
            price="$70"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://th.bing.com/th/id/OIP.9GO7kAXOaUBOPbXV7rjxGAHaHa?rs=1&pid=ImgDetMain"
            name="Angel Wings"
            price="$90"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://sneakernews.com/wp-content/uploads/2017/12/10-best-nike-2017-7.jpg"
            name="Yellow Nike Sneaker"
            price="$80"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
          <ShoeInfo
            imgSrc="https://cdn.sanity.io/images/c1chvb1i/production/e15a2526d43c24e8c8a50ff76ec186538d6b6de1-700x468.jpg/HYPERDUNK-2016-5.jpg"
            name="Hyper Dunk"
            price="$100"
            addNewShoe={addNewShoe}
            total={total}
            setTotal={setTotal}
            
          />
        </div>
        <Cart remove={removeFromArray}/>
      </div>
    </>
  );
}

export default App;
