import { Container, Box, useTheme } from '@mui/material';
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import backgroundImage from '../src/assets/zoo-background.jpg';

const Layout = ({ children }) => {
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            sx={{
                width: '1920px',
                height: '100vh',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                background: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            <Header />
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: theme.palette.background.default,
                    opacity: 0.9,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: '1920px',
                    }}
                >
                    {children}
                </Box>
            </Box>
            <Footer />
        </Container>
    );
};

//
// const Header = () => {
//     const theme = useTheme();
//     return (
//         <Box
//             sx={{
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//                 padding: '1rem',
//                 textAlign: 'center',
//                 boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
//             }}
//         >
//             {/*<Typography variant="h4" sx={{ fontWeight: 600 }}>*/}
//             {/*    Zoo-Logo*/}
//             {/*</Typography>*/}
//         </Box>
//     );
// };
//
// const Footer = () => {
//     const theme = useTheme();
//     return (
//         <Box
//             sx={{
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//                 padding: '1rem',
//                 textAlign: 'center',
//                 boxShadow: '0px -3px 10px rgba(0, 0, 0, 0.2)',
//             }}
//         >
//             <Typography>© 2023 ZooAPI. Alle Rechte vorbehalten.</Typography>
//         </Box>
//     );
// };

export default Layout;