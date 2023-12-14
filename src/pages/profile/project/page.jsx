import { Box, Typography } from "@mui/material";

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
                alignItems: "center",
                zIndex: "0",
            }}
        >
            <Box sx={{ width: { md: "70%", xs: "100%" } }}>
                {/* Education */}
                <Typography variant="h4">Website Blog:</Typography>
                <Box sx={{ paddingLeft: "5%", margin: "1rem 0px" }}>
                    <Typography>
                        Techniques: HTML ,CSS(Boostrap), javascript, C#(MVC), SQL-server.
                    </Typography>
                    <Typography>Group: 2.</Typography>
                    <Typography>
                        Function Description: CRUD users, posts, Search categories.
                    </Typography>
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
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
                <Box sx={{ paddingLeft: "5%", margin: "1rem 0px" }}>
                    <Typography>
                        Techniques: javascript(reactJS), sass, nodejs(expressJS), mongodb.
                    </Typography>
                    <Typography>Group: 4</Typography>
                    <Typography>
                        Function Description:CRUD users and products, Add product to cart,
                        Paypal payment, Filter products.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <GitHubIcon />:
                        <Box sx={{ marginLeft: "10px" }}>
                            <span style={{ color: "red", marginRight: "10px" }}>Error</span>
                            <a href="https://github.com/thag15/fruit_project">
                                https://github.com/thag15/fruit_project
                            </a>
                            <br />
                            <span style={{ color: "green", marginRight: "10px" }}>
                                Present
                            </span>
                            <a href="https://github.com/AndrewZKn/P_ElectricCommerce">
                                https://github.com/AndrewZKn/Healthy-Roo__
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectProfile;
