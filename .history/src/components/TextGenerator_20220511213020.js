import React from "react";
import styled from "styled-components";

const TextGenerator = () => {
  return (
    <Generator>
      <div>
        <h2>Jaki ma być twój płaskoziemca?</h2>
        <form>
          <select>
            <option>Mieszany</option>
            <option>Pesudonaukowy</option>
            <option>Fanatyk religijny</option>
          </select>
          <input type="number" value="1" min="1" />
        </form>
      </div>
      <div></div>
    </Generator>
  );
};

const Generator = styled.div``;

export default TextGenerator;
