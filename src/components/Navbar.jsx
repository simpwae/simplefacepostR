const Navbar = (props) => {
  return (
    <>
      <div>
        <div>
          <img src={props.src1} alt="" className="logo1" />
          <input type="text" name="" id="input" placeholder="Search 🔎" />
        </div>
        <div>
          <img src={props.src2} alt="" className="on1" />
          <img src={props.src3} alt="" className="on2" />
          <img src={props.src4} alt="" className="on3" />
          <img src={props.src5} alt="" className="on4" />
          <img src={props.src6} alt="" className="on5" />
        </div>
        <div>
          <img src={props.src7} alt="" className="Navlogo1" />
          <img src={props.src8} alt="" className="Navlogo2" />
          <img src={props.src9} alt="" className="Navlogo3" />
          <img src={props.src10} alt="" className="Navlogo4" />
        </div>
      </div>




      
    </>
  );
};
export default Navbar;
