/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="mt-10 bg-slate-400 md:w-2/3 mx-auto py-10">
            <h1 className="text-2xl font-semibold">Add Items</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-2/3 mx-auto mt-4 space-y-3">
                    <input {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" name="name" />
                    {
                        errors.name && <p className="text-red-500">Name is required!</p>
                    }
                    <div className="flex justify-evenly gap-3">
                        <select {...register('category', { required: true })} className="select select-bordered w-full max-w-xs" name="category">
                            <option selected>Category</option>
                            <option>Dessert</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Pizza</option>
                        </select>
                        {
                            errors.category && <p className="text-red-500">Category is required!</p>
                        }
                        <input {...register('price', { required: true })} type="text" placeholder="Price" className="input input-bordered w-full" name="price" />
                        {
                            errors.price && <p className="text-red-500">Price is required!</p>
                        }
                    </div>
                    <textarea {...register('recipe', { required: true })} className="md:w-full h-[200px] textarea textarea-bordered resize-none" placeholder="Recipe" name="recipe"></textarea>
                    {
                        errors.recipe && <p className="text-red-500">Recipe is required!</p>
                    }
                    <input type="file" {...register('image', { required: true })} className="file-input justify-start" name="image" />
                    {
                        errors.image && <p className="text-red-500">Image is required!</p>
                    }
                    <div>
                        <button className="btn flex gap-2 mx-auto bg-yellow-600"><FaUtensils className="text-2xl" /> Add Items</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddItems;