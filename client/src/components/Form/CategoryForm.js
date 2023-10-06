import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 py-3">
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
          New Category
        </label>
        <input
          type="text"
          id="category"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter new category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
