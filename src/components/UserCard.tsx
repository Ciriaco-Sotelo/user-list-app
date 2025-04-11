import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../services/userService';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 4
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {user.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Email:</strong> {user.email}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Compañía:</strong> {user.company.name}
        </Typography>
        
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button 
            component={Link}
            to={`/user/${user.id}`}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0'
              }
            }}
          >
            Ver Detalles
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;