import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("São Paulo, BR");
  const [animal, animalDropdown] = useDropdown("ANimal", "Dog", ANIMALS);
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <h1>{location}</h1>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.animal.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                    {animal}
                </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
            Breed
            <select
                id="breed"
                value={breed}
                onChange={e => setBreed(e.target.value)}
                onBlur={e => setBreed(e.target.value)}
                disabled={breeds.length === 0}
            >
                <option>All</option>
                {breeds.map(breedString => (
                    <option key={breedString} value={breedString}>
                        {breedString}
                    </option>
                ))}

            </select>

        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;