"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
  IconButton,
  TextField,
  Box,
} from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { deleteInventoryItem, getInventory } from "@/actions";

export default function InventoryTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleDelete = async (itemToDelete) => {
    await deleteInventoryItem(itemToDelete);
    const result = await getInventory();

    setRows(result);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchQuery) ||
      row.category.toLowerCase().includes(searchQuery)
    );
  });

  console.log("Filtered_row", filteredRows);

  useEffect(() => {
    async function getResult() {
      const result = await getInventory();
      console.log(result);

      setRows(result);
    }

    getResult();
  }, []);

  return (
    <Paper>
      <Box padding={2}>
        <TextField
          fullWidth
          label="Search Item..."
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>Name</TableCell>
              <TableCell sx={{ width: "20%" }}>Category</TableCell>
              <TableCell sx={{ width: "20%" }}>Quantity</TableCell>
              <TableCell sx={{ width: "20%" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "20%" }}>{row.name}</TableCell>
                  <TableCell sx={{ width: "20%" }}>{row.category}</TableCell>
                  <TableCell sx={{ width: "20%" }}>{row.quantity}</TableCell>
                  <TableCell sx={{ width: "10%" }}>
                    <IconButton
                      onClick={async () => await handleDelete(row.name)}
                    >
                      <DeleteOutlineRoundedIcon sx={{ color: "#b71c1c" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
