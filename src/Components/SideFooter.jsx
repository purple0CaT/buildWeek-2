import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
const SideFooter = () => {
  return (
    <>
      <footer className="">
        <div>
          <label for="dropdown-button-drop-up" className="mr-5 text-muted">
            <small>Select Language</small>
          </label>
          <DropdownButton
            as={ButtonGroup}
            key="up"
            id="dropdown-button-drop-up"
            drop="up"
            title="English(English)"
          >
            <Dropdown.Item eventKey="1">English</Dropdown.Item>
            <Dropdown.Item eventKey="2">Italian</Dropdown.Item>
            <Dropdown.Item eventKey="3">Turkish</Dropdown.Item>
          </DropdownButton>
        </div>
      </footer>
    </>
  );
};

export default SideFooter;
