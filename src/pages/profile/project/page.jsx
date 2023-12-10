import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectProfile = () => {
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
                <Typography variant="h4" noWrap>
                    Website Blog:
                </Typography>
                <Box sx={{ paddingLeft: "10%", margin: "1rem 0px" }}>
                    <Typography variant="h6">
                        Techniques: HTML ,CSS(Boostrap), javascript, C#(MVC), SQL server
                    </Typography>
                    <Typography variant="h6" noWrap>
                        Group: 2
                    </Typography>
                    <Typography variant="h6" noWrap>
                        Description: Studying at NTTU University 2020-Present
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <GitHubIcon />{" "}
                        <a href="https://github.com/AndrewZKn/P_WebBlog">
                            https://github.com/AndrewZKn/P_WebBlog
                        </a>
                    </Typography>
                </Box>
                {/* Contact */}
                <Typography variant="h4" noWrap sx={{ marginBottom: "1rem" }}>
                    Website Dried Food
                </Typography>
                <Box sx={{ paddingLeft: "10%", margin: "1rem 0px" }}>
                    <Typography variant="h6">
                        Techniques: javascript(reactJS), sass, nodejs(expressJS), mongodb
                    </Typography>
                    <Typography variant="h6">Group: 4</Typography>
                    <Typography
                        variant="h6"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <GitHubIcon />:
                        <div style={{ marginLeft: "10px" }}>

                            <span style={{ color: "red", marginRight: '10px' }}>Error</span>
                            <a href="https://github.com/thag15/fruit_project">
                                https://github.com/thag15/fruit_project
                            </a>
                            <br />
                            <span style={{ color: "green", marginRight: '10px' }}>Present</span>
                            <a href="https://github.com/AndrewZKn/P_ElectricCommerce">
                                https://github.com/AndrewZKn/P_ElectricCommerce
                            </a>
                        </div>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectProfile;
