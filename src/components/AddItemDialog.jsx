"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import ItemForm from "./ItemForm";
import { addInventoryItem } from "@/actions";

export default function AddItemDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ControlPointRoundedIcon />}
        sx={{ width: "max-content", height: "max-content" }}
        onClick={handleClickOpen}
      >
        New Item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            await addInventoryItem(formJson);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Add Item to Inventory</DialogTitle>
        <DialogContent>
          <ItemForm />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "max-content", height: "max-content" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
