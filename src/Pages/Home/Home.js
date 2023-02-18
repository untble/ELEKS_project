import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import './Home.css';
import {Box, CssBaseline} from "@mui/material";

function Home() {
    return (
        <Box paddingX="30px">
            <CssBaseline />
                <Box display="flex">
                    <Filters />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Header />
                        <Breadcrumbs />
                        <Search />
                        <CardList />
                    </Box>
                </Box>
                {/*<Pagination />*/}
        </Box>
    );
}

export default Home;