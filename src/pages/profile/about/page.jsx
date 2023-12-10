import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const AboutProfile = () => {
    // const education = [{ name: 'Education',}]

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
                    display: "flex",
                    alignItems: "center",
                    borderBottom: '1px solid #000'
                }}
            >
                <Box sx={{ width: '100%' }}>
                    {/* Education */}
                    <Typography variant="h4">Education:</Typography>
                    <Box sx={{ paddingLeft: "5%", margin: "1rem 0px", width: "100%" }}>
                        <Typography sx={{ width: "100%" }}>
                            Studying at NTTU University 2020-Present.
                        </Typography>
                        <Typography>Specialized: Software engineer.</Typography>
                        <Typography>Is a fourth year student.</Typography>
                    </Box>
                    {/* Contact */}
                    <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                        Contact info:
                    </Typography>
                    <Box sx={{ paddingLeft: "5%", margin: "1rem 0px" }}>
                        <Typography>
                            <PhoneIcon /> 0857511230
                        </Typography>
                        <Typography>
                            <EmailIcon /> hoquocthang150722@gmail.com
                        </Typography>
                        <Typography>
                            <GitHubIcon />{" "}
                            <span>
                                <a style={{ color: "#000" }} href="https://github.com/thag15">
                                    https://github.com/thag15
                                </a>
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutProfile;
