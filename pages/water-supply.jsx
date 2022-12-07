import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Grid, Toolbar, Button, TextField } from '@mui/material';
import Link from 'next/link';
import { Visibility } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(no, TenantName, Address, Email, ContactNumber) {
    return { no, TenantName, Address, Email, ContactNumber };
}

const rows = [
    createData(1, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(2, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(3, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(4, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(5, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(6, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(7, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(8, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(9, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
    createData(10, 'Mr. J', 'dummy address goes here , 50 | B-12', 'demo@gmail.com', 'XXXXX-XXXXX'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function waterSupply() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (

        <Grid container spacing={2} justifyContent="center" >
            <Grid item lg={12} xs={12}>
                <Toolbar />
                <Toolbar />
                <h1>Request List</h1>
            </Grid>
            <Grid item lg={12} xs={12}>
                <TableContainer component={Paper}>

                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Phone Number </StyledTableCell>
                                <StyledTableCell align="right">Date/Time</StyledTableCell>
                                <StyledTableCell align="right">Property Name</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                                <TableRow key={row.no}>
                                    <TableCell style={{ width: 40 }} component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.TenantName}
                                    </TableCell>
                                    <TableCell component="th" scope="row" align="right">
                                        {row.Address}
                                    </TableCell>
                                    <TableCell component="th" scope="row" align="right">
                                        {row.Email}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.ContactNumber}
                                    </TableCell>
                                    <TableCell style={{ width: 60 }} align="right">
                                        <Link href={'/'} style={{textDecoration:"none"}}>
                                            <Button size='small' variant="text" sx={{textTransform: 'lowercase'}} endIcon={<Visibility />}>
                                                view
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={12}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>


    );
}