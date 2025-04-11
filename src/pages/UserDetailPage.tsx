import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, User } from '../services/userService';
import UserDetails from '../components/UserDetails';
import { Container, CircularProgress, Alert } from '@mui/material';

const UserDetailPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!userId) return;
        const data = await getUserById(parseInt(userId));
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el usuario');
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="warning">Usuario no encontrado</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <UserDetails user={user} />
    </Container>
  );
};

export default UserDetailPage;