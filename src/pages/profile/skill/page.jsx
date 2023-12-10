import { Box, Typography } from "@mui/material";
import { skills } from "../../../api/mockdata";
const Skill = () => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "12.5%",
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "70%" },
                    borderBottom: "1px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    {skills.map((i, index) => (
                        <Box key={index}>
                            <Box
                                sx={{ display: "flex", alignItems: "center", padding: "10px" }}
                            >
                                <Typography variant="h4" sx={{ display: "inline-block" }}>
                                    {i.name}
                                </Typography>
                                {i.icon?.map((i, index) => (
                                    <span key={index}>{i.name}</span>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skill;
