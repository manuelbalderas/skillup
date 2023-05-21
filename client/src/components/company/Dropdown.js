import { useEffect, useState } from "react";
import styled from "styled-components";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeholder, options, onChange, value }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(value);
  const [selectedValue, setSelectedValue] = useState(value || "");

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeholder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option);
  };

  return (
    <Container>
      <Input onClick={handleInputClick}>
        {showMenu && (
          <Menu>
            {options.map((option) => (
              <Item onClick={() => onItemClick(option)}>{option.label}</Item>
            ))}
          </Menu>
        )}
        <SelectedValue>{getDisplay()}</SelectedValue>
        <Tools>
          <Tool>
            <Icon />
          </Tool>
        </Tools>
      </Input>
    </Container>
  );
};

const Container = styled.div`
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  width: 410px;
  height: 32px;
  margin-top: 10px;
  text-align: left;
  position: relative;
  justify-content: space-between;
`;

const Input = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const Menu = styled.div`
  position: absolute;
  transform: translate(-8px, 60px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: auto;
  max-height: 150px;
  background-color: #fff;
`;

const Item = styled.div`
  &:hover {
    background-color: #9fc3f870;
  }
`;

const SelectedValue = styled.div`
  width: 40vh;
  font-weight: 400;
  font-size: 18px;
`;

const Tools = styled.div``;

const Tool = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
`;

export default Dropdown;
