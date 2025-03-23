import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import filters from "@/data/filterData";

const FilterCard = () => {
  return (
    <div className="border-r border-gray-300 h-[80vh] overflow-y-auto p-4">
      <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5">
        Apply Filters
      </p>

      <div className="flex flex-col gap-5">
        {filters.map((obj, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">{obj.filterType}</h1>
              <RadioGroup>
                <div className="flex flex-col gap-2">
                  {obj.array.map((ele, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <RadioGroupItem key={index} value={ele} id={index} />
                        <Label className="text-gray-600">{ele}</Label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCard;
