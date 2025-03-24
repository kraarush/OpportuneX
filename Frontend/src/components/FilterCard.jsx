import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import filtersData from "@/data/filterData";

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div>
      <p className="text-lg sm:text-xl md:text-2xl font-medium ">
        Apply Filters
      </p>
      <hr className="mt-2 border border-gray-300" />
      <div className="my-2">
        <Button variant="ghost" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {filtersData.map((obj, fIndex) => (
          <div key={fIndex} className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">{obj.filterType}</h1>
            <RadioGroup
              value={selectedFilters[obj.filterType] || ""}
              onValueChange={(value) =>
                handleFilterChange(obj.filterType, value)
              }
              className="flex flex-col gap-1"
            >
              {obj.array.map((ele, index) => {
                const optionId = `filter-${fIndex}-option-${index}`;
                return (
                  <div key={optionId} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={ele}
                      id={optionId}
                      className="h-3 w-3"
                    />
                    <Label htmlFor={optionId} className="text-gray-700 text-sm">
                      {ele}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FilterCard;
