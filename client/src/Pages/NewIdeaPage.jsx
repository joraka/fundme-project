import { useState } from "react";

export default function NewIdeaPage() {
  const [formData, setFormData] = useState({
    project_info: "",
    target_amount: 0,
    collected_amount: 0,
    picture_url: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    fetch("http://localhost:3131/api/new-idea", {
      method: "POST",
      headers: {
        ...formData.getHeaders(),
      },
      body: formData,
    }).then((res) => {
      console.log({ res });
    });
  };

  return (
    <div>
      <h1>new idea page</h1>
      <form onSubmit={onFormSubmit} enctype="multipart/form-data">
        <div>
          description
          <textarea
            name="form_project_info"
            id="form_project_info"
            placeholder="Description"
            // onChange={(e) => setFormData((s) => ({ ...s, project_info: e.target.value }))}
          ></textarea>
        </div>
        <div>
          target amount in euros
          <input
            type="number"
            name="form_target_amount"
            id="form_target_amount"
            placeholder=""
            // onChange={(e) => setFormData((s) => ({ ...s, project_info: Number(e.target.value) }))}
          />
        </div>
        <div>
          collected amount in euros
          <input
            type="number"
            name="form_collected_amount"
            id="form_collected_amount"
            placeholder=""
            // onChange={(e) => setFormData((s) => ({ ...s, project_info: Number(e.target.value) }))}
          />
        </div>
        <div>
          <input type="file" id="form_image" name="form_image" accept="image/png, image/jpeg" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
