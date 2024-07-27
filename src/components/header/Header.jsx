import "./header.css";
export default function Header() {
  return (
    <header>
      <section className="container">
        <h5>hello, i am</h5>
        <h1>mohammad echaary</h1>
        <h5>a front end developer</h5>
        <div className="buttons">
          <button className="btn">download CV</button>
          <button className="btn btn-primary">lets talk</button>
        </div>
        <div className="picture">
          <img src="../../assets/me.png" alt="" />
        </div>
      </section>
    </header>
  );
}
