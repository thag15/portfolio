import { Box, Typography } from "@mui/material";

const NavProfile = ({ about, skill }) => {
    const scrollToSection = (eRef) => {
        window.scrollTo({
            top: eRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                position: "fixed",
                border: "2px solid #000",
                minWidth: "4%",
                borderRadius: "3em",
                top: "40%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ padding: "20px 5px", }}>
                <Typography sx={{ margin: '10px 0px' }} variant="h6" onClick={() => scrollToSection()}>Home</Typography>
                <Typography sx={{ margin: '10px 0px' }} variant="h6" onClick={() => scrollToSection(about)}>About</Typography>
                <Typography sx={{ margin: '10px 0px' }} variant="h6" onClick={() => scrollToSection(skill)}>Skill</Typography>
            </Box>
        </Box>
    );
};

export default NavProfile;
