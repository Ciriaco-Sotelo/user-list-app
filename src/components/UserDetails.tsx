import { User } from '../services/userService';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {user.name}
        </Typography>
        
        <List>
          <ListItem>
            <ListItemText primary="Username" secondary={user.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Teléfono" secondary={user.phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sitio web" secondary={user.website} />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Dirección" 
              secondary={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`} 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Compañía" 
              secondary={`${user.company.name} - ${user.company.catchPhrase}`} 
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default UserDetails;