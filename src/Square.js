import "./css_files/square.css";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  function isValidColor(colorValue) {
    if (!colorValue) {
      return false;
    }
    let s = new Option().style;
    s.color = colorValue;

    return s.color == colorValue.toLowerCase();
  }

  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000000" : "#FFFFFF",
      }}
    >
      <p>
        {isValidColor(colorValue)
          ? colorValue.toLowerCase()
          : "No Valid Color Entered"}
      </p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "No Valid Color Entered",
};

export default Square;
