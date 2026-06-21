import { X, Save } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditLinkModal = ({
  isOpen,
  onClose,
  link,
  onUpdate,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (link) {
      reset({
        title: link.title,
        description:
          link.description,
        url: link.url,
      });
    }
  }, [link, reset]);

  const onSubmit = async (
    data
  ) => {
    await onUpdate(
      link._id,
      data
    );

    onClose();
  };

  if (!isOpen || !link)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-4xl
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              font-sora
            "
          >
            Edit Link
          </h2>

          <button
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="p-6 space-y-4"
        >
          <input
            {...register(
              "title"
            )}
            placeholder="Title"
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              px-4
              py-3
            "
          />

          <input
            {...register(
              "description"
            )}
            placeholder="Description"
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              px-4
              py-3
            "
          />

          <input
            {...register(
              "url"
            )}
            placeholder="URL"
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              px-4
              py-3
            "
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="
                px-5
                py-3
                rounded-full
                border
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={
                isSubmitting
              }
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-900
                text-white
                px-5
                py-3
              "
            >
              <Save size={18} />
              Update Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLinkModal;