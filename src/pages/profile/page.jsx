import { Box, Button } from "@mui/material";

import AboutProfile from "./about/page";
import Skill from "./skill/page";
import ProjectProfile from './project/page'
import { Link as LinkScroll, scroller } from "react-scroll";
import HomeProfile from "./home/page";
const Profile = () => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuint",
        });
    };
    const focused = [
        { id: 1, name: "HOME", component: <HomeProfile /> },
        { id: 2, name: "ABOUT", component: <AboutProfile /> },
        { id: 3, name: "SKILL", component: <Skill /> },
        { id: 3, name: "Project", component: <ProjectProfile /> },

    ];
    return (
        <Box>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    position: "fixed",
                    border: "2px solid #000",
                    minWidth: "4%",
                    top: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "2",
                    borderRadius: '3em'
                }}
            >
                <Box sx={{ padding: "5px 5px" }}>
                    {focused.map((i) => (
                        <LinkScroll
                            key={i.id}
                            activeClass="active"
                            to={i.name}
                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToElement("home")}
                        >
                            <p
                                style={{
                                    color: "#000",
                                    textAlign: "center",
                                    margin: "20px 0px",
                                    fontWeight: 'bold'
                                }}
                            >
                                <Button sx={{ color: 'black' }}>
                                    {i.name}
                                </Button>
                            </p>
                        </LinkScroll>
                    ))}
                </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: "1" }}>
                {focused.map((i, index) => (
                    <>
                        {/* <Box sx={{ bgcolor: 'red', height: '64px' }}>halo</Box> */}
                        <Box key={index} name={i.name} sx={{ height: "calc(100vh - 66px)", }}>
                            {i.component}
                        </Box>
                    </>
                ))}
            </Box>
        </Box>
    );
};

export default Profile;
