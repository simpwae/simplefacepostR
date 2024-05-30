import "./App.css";
function App(props) {
  return (
    <>
      <div className="main_dev">
        <div className="header1">
          <img src={props.src} alt="" className="img_1" />
          <div className="wri">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
          </div>
        </div>
        <p>{props.discrip}</p>
        <img src={props.src1} alt="" className="img_2" />
      </div>
    </>
  );
}

function Post() {
  return (
    <>
      <App
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR0IsY0jgvWRLSXxzlW4kcdost2GHeIQf5g&s"
        name="Aniya Daimon"
        date="2min ago"
        discrip="A bird so beautiful"
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34MZO4P5h3TEIuaD3EB4TYEuPgowKsmmznA&s"
      />
      <App
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR0IsY0jgvWRLSXxzlW4kcdost2GHeIQf5g&s"
        name="Aniya Daimon"
        date="2min ago"
        discrip="A bird so beautiful"
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34MZO4P5h3TEIuaD3EB4TYEuPgowKsmmznA&s"
      />
      <App
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR0IsY0jgvWRLSXxzlW4kcdost2GHeIQf5g&s"
        name="Aniya Daimon"
        date="2min ago"
        discrip="A bird so beautiful"
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34MZO4P5h3TEIuaD3EB4TYEuPgowKsmmznA&s"
      />
      <App
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR0IsY0jgvWRLSXxzlW4kcdost2GHeIQf5g&s"
        name="Aniya Daimon"
        date="2min ago"
        discrip="A bird so beautiful"
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34MZO4P5h3TEIuaD3EB4TYEuPgowKsmmznA&s"
      />
    </>
  );
}
export default Post;
