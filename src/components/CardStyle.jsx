import React from "react";
import styled from "styled-components";
const Card = styled.div`
  position: relative;
  width: 400px;
`;
const Card_Img_Wrap = styled.div`
  height: 400px;
  border-radius: 8px;
  width: 100%;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardContent = styled.div`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* display: flex; */
  /* justify-content: space-between;
  align-items: center; */
  position: absolute;
  width: 363px;
  border-radius: 20px;
  margin-bottom: 80px;
  /* top: 30%; */
  transform: translatex(20px);
  /* bottom: 0; */
  position: absolute;
  top: 370px;
  /* left: 25px; */
  /* transform: translatey(50%); */
`;
const Card_Wrap = styled.div`
  display: flex;
  /* column-gap: 12px; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Card_Wrap_Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Card_Flex_wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* column-gap: 20px; */
`;
const Card_Title = styled.h3`
  font-size: ${(props) => props.fontSize || "18px"}; ;
`;
const CardStyle = () => {
  return (
    <Card>
      <Card_Img_Wrap>
        <CardImg
          src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </Card_Img_Wrap>
      <CardContent>
        <Card_Wrap>
          <Card_Flex_wrap>
            <Card_Wrap_Img
              src="https://images.unsplash.com/photo-1655312329254-7288f580af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div>@zndrson</div>
          </Card_Flex_wrap>
          <div>
            <img src="./heart-icon.png" alt="" />
            <span>256</span>
          </div>
        </Card_Wrap>
        <CardBottom>
          <Card_Title>Cosmic Perspective</Card_Title>
          <span>12,000 PSL</span>
        </CardBottom>
      </CardContent>
    </Card>
  );
};

export default CardStyle;
