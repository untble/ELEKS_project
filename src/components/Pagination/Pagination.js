import './Pagination.css'
import {Box, Stack} from "@mui/material";
import {Pagination as MuiPagination} from "@mui/material";

const Pagination = ({products, currentPage, pageCount, handlePageChange}) => {
    return (
        (products.length && <Box sx={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
            <Stack spacing={2}>
                <MuiPagination count={pageCount} page={currentPage} color="primary" onChange={handlePageChange}/>
            </Stack>
        </Box>)
    );
}

export default Pagination;