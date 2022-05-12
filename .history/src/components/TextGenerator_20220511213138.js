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
          <input type="number" min="1" />
          <input type="checkbox" /> Zacznij od "NASA kłamie..."
        </form>
      </div>
      <div></div>
    </Generator>
  );
};

const Generator = styled.div``;

export default TextGenerator;
