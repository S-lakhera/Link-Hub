import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";

const CreateLinkForm = ({ addLink }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addLink(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-[32px] p-8 shadow-lg h-full">
      <h2 className="text-2xl font-bold">
        Create New Link
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-4"
      >
        <input
          {...register("title", {
            required: true,
          })}
          placeholder="Title"
          className="
            w-full
            rounded-2xl
            border
            border-slate-400
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <input
          {...register("description")}
          placeholder="Description"
          className="
            w-full
            rounded-2xl
            border
            border-slate-400
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <input
          {...register("url", {
            required: true,
          })}
          placeholder="URL"
          className="
            w-full
            rounded-2xl
            border
            border-slate-400
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
      flex
      items-center
      gap-2
      rounded-full
      bg-slate-900
      hover:scale-105
      transition
      text-white
      px-6
      py-3
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
          >
            <Plus size={18} />

            {isSubmitting
              ? "Adding..."
              : "Add Link"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLinkForm;