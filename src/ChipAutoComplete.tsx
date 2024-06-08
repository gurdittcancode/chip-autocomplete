import { FC, useState } from "react";

interface ChipAutoCompleteProps {
  tags: string[];
}

const ChipAutoComplete: FC<ChipAutoCompleteProps> = ({ tags }) => {
  const [input, setInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    const matchingTags = tags.filter(
      (tag) =>
        tag.toLowerCase().includes(value.toLowerCase()) &&
        !selectedTags.includes(tag)
    );

    setSuggestions(matchingTags);
  };

  const handleTagSelection = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
    setInput("");
    setSuggestions([]);
  };

  const handleTagDelete = (tag: string) => {
    setSelectedTags(selectedTags.filter((t: string) => t !== tag));
  };

  return (
    <div className="w-full max-w-2xl mx-auto ">
      <div className="w-full mt-10 border rounded-3xl bg-gray-200">
        <div className="border p-2 rounded-3xl">
          <div className="flex flex-wrap">
            {selectedTags.map((tag, index) => (
              <div
                key={index}
                className="m-1 flex items-center px-2 py-1.5 border bg-white rounded-xl shadow-md"
              >
                {tag}
                <button className="ml-1 " onClick={() => handleTagDelete(tag)}>
                  &times;
                </button>
              </div>
            ))}
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow p-2 border-none focus:outline-none bg-transparent"
              placeholder="Add your skills!"
            />
          </div>
        </div>
      </div>
      <div className="border border-none rounded-3xl">
        {suggestions.length > 0 && (
          <div className="border border-t-0 rounded-3xl p-2 bg-white rounded-b shadow-md">
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
      <span className="text-gray-300">
        Enter a comma separated list and enjoy
      </span>
    </div>
  );
};

export default ChipAutoComplete;
