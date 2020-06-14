import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
export default function Header(props) {
  const { setIsDarkMode, isDarkMode } = props;
  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Gilad Gray"
      />
    </div>
  );
}
