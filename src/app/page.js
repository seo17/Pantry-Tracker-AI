import Navbar from "@/components/Navbar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import InventoryTable from "@/components/InventoryTable";
import AddItemDialog from "@/components/AddItemDialog";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.main",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          gap: "40px",
        }}
      >
        <Navbar />
        <Container>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography
              color={"primary.main"}
              sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
            >
              Inventory
            </Typography>

            <AddItemDialog />
          </Stack>
          <Box sx={{ width: "100%", mx: "auto", pt: "30px" }}>
            <InventoryTable />
          </Box>
        </Container>
      </Box>
    </>
  );
}
