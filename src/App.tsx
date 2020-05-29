import React from "react";
import Card from "./component/card";

import styled from "styled-components";

const CardContainer = styled.div`
  display: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <CardContainer>
        <Card
          rank={"HOT"}
          image={
            "https:image-notepet.akamaized.net/resize/620x-/seimage/20191104%2F37e8c0695e528ba8e32577e6c71221d7.jpg"
          }
        />
        <Card
          rank={"HOT"}
          image={"https://img.sta1.com/_up/store/2020/05/04/1588563909084.jpg"}
          title="사뿐"
          age={"10대, 20대, 30대"}
          description="슈즈"
        />
        <Card
          rank={"HOT"}
          image={"https://img.sta1.com/_up/store/2020/01/23/1579748891347.jpg"}
          title="베니토"
          age={"20대, 30대"}
          description="럭셔리, 명품, 페미닌"
        />
        <Card
          rank={"HOT"}
          image={"https://img.sta1.com/_up/store/2020/04/03/1585884760828.jpg"}
          title="히프나틱"
          age={"10대, 20대"}
          description="러블리, 섹시"
        />
      </CardContainer>
    </div>
  );
}

export default App;
