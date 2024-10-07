import React, { useEffect, useState } from "react";
import axios from "axios";
import Car from "../components/Car";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://freetestapi.com/api/v1/cars");
        setCars(response.data)
        setCategories(["All Catgories", ...new Set(response.data.map((car) => car.make))]);
        setFilteredCars(response.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filterCars = () => {
    if (selectedCategory !== "All Categories") {
      setFilteredCars(cars.filter((car) => car.make === selectedCategory));
    }
    if(selectedCategory==="All Categories"){
      setFilteredCars(cars);
    }

    if (searchTerm) {
      setFilteredCars(
        filteredCars.filter((car) =>
          car.model.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    filterCars();
  }, [searchTerm, selectedCategory, cars]);

  return (
    <div className="md:p-6 max-w-screen px-5">
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Search by model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 p-2 border rounded-lg"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-1/4 p-2 border rounded-lg"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {console.log(category)}
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className=" flex-wrap w-full flex justify-center items-center ">
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => <Car key={index} car={car} />)
            ) : (
              <p className="col-span-full text-center">No cars found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
