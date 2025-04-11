import { Container } from '@mui/material';
import UserList from '../components/UserList';
import { useUsers } from '../hooks/useUsers';

const Home = () => {
  const {
    users,
    filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages
  } = useUsers();

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <UserList 
        users={users}
        filteredUsers={filteredUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        loading={loading}
      />
    </Container>
  );
};

export default Home;