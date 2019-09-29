import React from "react";
import { Title, Description, Date, CardDiv, Image } from "./elements";
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { EditButton } from "../Buttons/EditButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ListenButton } from "../Buttons/ListenButton";

interface Props {
  title: string;
  image?: string;
  description?: string;
}

export const BasicCard: React.FC<Props> = ({
  title = "Example Title",
  image,
  description = "this song is gonna rock!",
}) => {
  return (
    <Container>
      <Card>
        <CardHeader title={title} subheader={<Date>9/9/19</Date>} />
        <CardMedia image={image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <ListenButton />
          <EditButton />
          <DeleteButton />
        </CardActions>
      </Card>
    </Container>
  );
};
