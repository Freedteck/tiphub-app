"use client";

interface NewResourcesProps {
  closeForm: () => void;
  addResource: (newResource: { title: string; description: string; link: string; contributor: string }) => void;
}

const NewResources = ({ closeForm, addResource }: NewResourcesProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newResource = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      link: formData.get("link") as string,
      contributor: "0x0000...abcd",
    };
    addResource(newResource);
  };

  return (
    <div
      className="bg-black bg-opacity-50 absolute top-0 w-full left-0 h-screen flex flex-col items-center justify-center"
      onClick={closeForm}
    >
      <form
        className="bg-neutral shadow rounded-lg p-8 max-w-xl w-full flex flex-col gap-5"
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-2xl">Create new Resource</h2>
        <label className="flex flex-col gap-1">
          Title:
          <input
            type="text"
            name="title"
            placeholder="Title of the resource"
            className="p-3 border rounded-lg border-base-100 focus:outline-primary"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          Resource Link (Optional):
          <input
            type="url"
            name="link"
            placeholder="Enter resource link (optional)"
            className="p-3 border rounded-lg border-base-100 focus:outline-primary"
          />
        </label>
        <label className="flex flex-col gap-1">
          Description:
          <textarea
            name="description"
            rows={8}
            placeholder="Enter a description"
            className="p-3 border rounded-lg border-base-100 focus:outline-primary"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-primary text-primary-content hover:bg-primary-content hover:text-primary px-6 py-2 rounded-lg shadow"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewResources;
