import { Box, Typography } from "@mui/material";
const HomeProfile = () => {
    return (
        <Box
            sx={{
                height: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "12.5%",

            }}
        >
            <Box
                sx={{
                    width: { md: "70%", xs: "100%" },
                    height: "100%",
                    borderBottom: "1px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        Hi! My Name is Hồ Quốc Thắng
                    </Typography>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Welcome To My Portfolio
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default HomeProfile;
