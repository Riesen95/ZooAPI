import {Box, useTheme} from "@mui/material";

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                padding: '1rem',
                textAlign: 'center',
                boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            {/*<Typography variant="h4" sx={{ fontWeight: 600 }}>*/}
            {/*    Zoo-Logo*/}
            {/*</Typography>*/}
        </Box>
    );
};

export default Header;