import React from "react";
import { Title, Description, Date, CardDiv } from "./elements";

interface Props {
  title: string;
  image?: string;
  description?: string;
}

export const BasicCard: React.FC<Props> = ({
  title = "Example Title",
  image,
  description = "Say Something..."
}) => {
  return (
    <CardDiv>
      <Title>{title}</Title>
      <Date>9/9/19</Date>
      <Description>{description}</Description>
    </CardDiv>
  );
};
