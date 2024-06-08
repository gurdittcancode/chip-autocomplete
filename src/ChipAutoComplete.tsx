import { FC } from "react";

interface ChipAutoCompleteProps {
  tags: string[];
}

const ChipAutoComplete: FC<ChipAutoCompleteProps> = ({ tags }) => {

    

    return (
        <div className="w-full max-w-2xl mx-auto mt-10">
          <div className="border p-2 rounded">
            <div className="flex flex-wrap">
              {selectedTags.map((tag, index) => (
                <div
                  key={index}
                  className="m-1 flex items-center bg-blue-100 text-blue-700 rounded px-2 py-1"
                >
                  {tag}
                  <button
                    className="ml-1 text-blue-500 hover:text-blue-700"
                    onClick={() => handleTagDelete(tag)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-grow p-2 border-none focus:outline-none"
                placeholder="Add your skills!"
              />
            </div>
          </div>
          {suggestions.length > 0 && (
            <div className="border border-t-0 p-2 rounded-b shadow-md">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleTagSelection(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    
};

export default ChipAutoComplete;
