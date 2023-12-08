import { Typography, Box } from "@mui/material";
const Profile = () => {
    return (
        <Box sx={{ height: '88vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box >
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Hi! My Name is Hồ Quốc Thắng</Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>Welcome To My Portfolio</Typography>
            </Box>
        </Box>
    );
};

export default Profile;
