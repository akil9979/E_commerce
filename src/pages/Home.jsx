import React from "react";
import { useEffect,useState } from "react";
import Searchproducts from "../component/Searchproducts";
function Home() {
    const [search, setsearch] = useState("");
    const [products, setproducts] = useState([]);
    // const [trigger, setTrigger] = useState(false);

  
            
           
            const api = async () => {
                if (search.trim() === "") {
                    alert("please enter item");
                    return;
                }
                try {
                    const res = await fetch("https://fakestoreapi.com/products");
                    // const res = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${search}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`,{
                    //     method: 'GET',
                    //     headers:{
                    //         "X-RapidAPI-Key": "2a10af8e60msh10bd462288f7fa4p12e5a9jsn68e998ac14f3",
                    //         "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
                    //     },
                    // })
                    const data = await res.json();
                    const filtered = data.filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                    );
                    setproducts(filtered || []);
                } catch (error) {
                    console.log(error);
                }
            };
          
           




    return (
        <div className=" min-h-screen">
            <div className="p-5 ">  <input type="text" className="border px-2 rounded-xl" placeholder="search product" value={search} onChange={(e) => (setsearch(e.target.value))} />
                <button className="cursor-pointer" onClick={() => api()}>search</button></div>
            <div className="flex flex-wrap  ">
                {products.map((products) => (<Searchproducts key={products.id} products={products} />))}
            </div>
        </div>);
}
export default Home;