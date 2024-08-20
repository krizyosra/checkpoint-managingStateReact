import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditForm() {
  //pour récupérer les anciens données
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //  const data = JSON.parse(localStorage.getItem("data"))
  //  const task = data[id]
  //   console.log(task)

  //  setName(task.name)
  //  setDescription(task.Description)
  // }, [])

  //submit formulaire

  const saveEdit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    data[id] = { name, Description };
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={saveEdit}>
        <label>name</label>
        <input onChange={(e) => setName(e.target.value)} />
        <label>description</label>
        <input onChange={(e) => setDescription(e.target.value)} />
        <button>Save</button>
        <Link to={"/"}>
          <button>Return</button>
        </Link>
      </form>
    </div>
  );
}

export default EditForm;
