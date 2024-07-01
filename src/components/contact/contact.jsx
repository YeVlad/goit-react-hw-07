import css from "./contact.module.css";

export default function Contact({ id, name, number, delContact }) {
  function onClick() {
    delContact(id);
  }
  return (
    <li className={css.contact}>
      <div className="forInfo">
        <p>{name}</p>
        <p>{number} </p>
      </div>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}
