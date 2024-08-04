"use client";
import { Box, Stack, Typography, alpha } from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav>
        <Box
          sx={{
            height: { xs: "5vw", lg: "100vh" },
            width: { xs: "100%", lg: "10%" },
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: { xs: "center" },
            alignItems: "center",
            gap: 2,
            py: "30px",
          }}
          bgcolor={"primary.main"}
        >
          <Link href={"/"}>
            <HomeRoundedIcon
              sx={{
                color: "secondary.main",
                ":hover": {
                  bgcolor: alpha("#FFF", 0.5),
                },
              }}
            />
          </Link>
          <Link href={"#"}>
            <AssessmentRoundedIcon
              sx={{
                color: "secondary.main",
                ":hover": {
                  bgcolor: alpha("#FFF", 0.5),
                },
              }}
            />
          </Link>
          <Link href={"/camera"}>
            <CameraAltRoundedIcon
              sx={{
                color: "secondary.main",
                ":hover": {
                  bgcolor: alpha("#FFF", 0.5),
                },
              }}
            />
          </Link>

          <Link href={"/"}>
            <SettingsRoundedIcon
              sx={{
                color: "secondary.main",
                ":hover": {
                  bgcolor: alpha("#FFF", 0.5),
                },
              }}
            />
          </Link>
          <Link href={"/"}>
            <AccountCircleRoundedIcon
              sx={{
                color: "secondary.main",
                ":hover": {
                  bgcolor: alpha("#FFF", 0.5),
                },
              }}
            />
          </Link>
        </Box>
      </nav>
    </header>
  );
}

export default Navbar;
