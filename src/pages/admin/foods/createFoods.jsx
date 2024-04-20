import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { foodApi } from "../../../redux/hook";
import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import { toast } from "react-toastify";

function CreateFoods() {
  const navigate = useNavigate();
  const [createFood, { isLoading }] = foodApi.useCreateFoodMutation();
  const { data } = foodApi.useGetCategoriesQuery();
  const [instructions, setInstructions] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);
  const { register, handleSubmit } = useForm();

  const categoriesOptions = data?.cartegories?.map((category) => ({
    value: category.id,
    label: category.type,
  }));
  const addInstruction = () => {
    setInstructions([...instructions, { id: uuidv4(), text: "" }]);
  };
  const removeInstruction = (id) => {
    setInstructions(
      instructions.filter((instruction) => instruction.id !== id)
    );
  };
  const handleInstructionChange = (id, text) => {
    setInstructions(
      instructions.map((instruction) =>
        instruction.id === id ? { ...instruction, text } : instruction
      )
    );
  };
  const addIngredient = () => {
    setIngredients([...ingredients, { id: uuidv4(), text: "" }]);
  };
  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((instruction) => instruction.id !== id));
  };
  const handleIngredientsChange = (id, text) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, text } : ingredient
      )
    );
  };

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    const imageFile = data.image[0];
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", imageFile);
    formData.append("instructions", JSON.stringify(instructions));
    formData.append("ingredients", JSON.stringify(ingredients));
    try {
      await createFood(formData);
      navigate("/admin/foods");
    } catch (error) {
      if (error.data) {
        toast.error(error.data);
      }
      console.error(error);
    }
  };
  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="py-5 text-4xl font-bold">
        Create a Food
        <Link to="/admin/foods" className="pl-10 text-sm font-normal underline">
          Go back
        </Link>
      </h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: true })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categoriesOptions?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/*Instructions*/}
        <div className="mb-4">
          <label
            htmlFor="instructions"
            className="block text-lg font-medium mb-2"
          >
            Instructions
          </label>
          {instructions.map((instruction) => (
            <div key={instruction.id} className="flex items-center mb-2">
              <input
                type="text"
                value={instruction.text}
                onChange={(e) =>
                  handleInstructionChange(instruction.id, e.target.value)
                }
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeInstruction(instruction.id)}
                className="ml-2 text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInstruction}
            className="bg-[#F43F5E] text-white rounded-md px-4 py-2"
          >
            Add Instruction
          </button>
        </div>
        {/*Ingredients*/}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium mb-2"
          >
            Ingredients
          </label>
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex items-center mb-2">
              <input
                type="text"
                value={ingredient.text}
                onChange={(e) =>
                  handleIngredientsChange(ingredient.id, e.target.value)
                }
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeIngredient(ingredient.id)}
                className="ml-2 text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addIngredient()}
            className="bg-[#F43F5E] text-white rounded-md px-4 py-2"
          >
            Add Ingredient
          </button>
        </div>
        <Button title="Create Food" loading={isLoading} />
      </form>
    </div>
  );
}

export default CreateFoods;
