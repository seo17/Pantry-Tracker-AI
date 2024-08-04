import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function ItemForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder="Milk"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="quantity" required>
          Quantity
        </FormLabel>
        <OutlinedInput
          id="quantity"
          name="quantity"
          type="number"
          placeholder="10"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="category" required>
          Category
        </FormLabel>
        <OutlinedInput
          id="category"
          name="category"
          type="text"
          placeholder="Beverages"
          required
        />
      </FormGrid>
    </Grid>
  );
}
