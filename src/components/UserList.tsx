import { 
    Grid, 
    TextField, 
    Pagination, 
    Box, 
    Typography,
    CircularProgress
  } from '@mui/material';
  import { User } from '../services/userService';
  import UserCard from './UserCard';
  
  interface UserListProps {
    users: User[];
    filteredUsers: User[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
    loading: boolean;
  }
  
  const UserList: React.FC<UserListProps> = ({
    users,
    filteredUsers,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    loading
  }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (/[<>]/.test(value)) {
        alert('Caracteres no permitidos');
        return;
      }
      setSearchTerm(value);
      setCurrentPage(1);
    };
  
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };
  
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
  
    return (
      <Box>
        <TextField
          label="Buscar usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingrese nombre de usuario"
        />
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Mostrando {users.length} de {filteredUsers.length} usuarios
        </Typography>
  
        <Grid container spacing={3}>
          {users.map(user => (
            <Grid item xs={12} sm={6} md={3} key={user.id}> {/* Ajuste para 4 columnas */}
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
  
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              showFirstButton
              showLastButton
              siblingCount={1}
              boundaryCount={1}
            />
          </Box>
        )}
      </Box>
    );
  };
  
  export default UserList;