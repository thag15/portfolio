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
            <Box sx={{ width: "50%", padding: "20px 0px" }}>
                {/* Education */}
                <Typography variant="h3" noWrap>
                    Education:
                </Typography>
                <Box sx={{ paddingLeft: "20%", margin: "1rem 0px" }}>
                    <Typography variant="h5" noWrap>
                        - Studying at NTTU University 2020-Present
                    </Typography>
                    <Typography variant="h5" noWrap>
                        - Specialized: IT
                    </Typography>
                    <Typography variant="h5" noWrap>
                        - Is a fourth year student.
                    </Typography>
                </Box>
                {/* Contact */}
                <Typography variant="h3" noWrap sx={{ marginBottom: "1rem" }}>
                    Contact info:
                </Typography>
                <Box sx={{ paddingLeft: "20%", margin: "1rem 0px" }}>
                    <Typography variant="h5" noWrap>
                        <PhoneIcon /> 0857511230
                    </Typography>
                    <Typography variant="h5" noWrap>
                        <EmailIcon /> hoquocthang150722@gmail.com
                    </Typography>
                    <Typography variant="h5" noWrap>
                        <GitHubIcon /> <span ><a style={{ color: '#000' }} href="https://github.com/thag15">https://github.com/thag15</a></span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutProfile;
