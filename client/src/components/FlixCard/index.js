import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class FlixCard extends React.Component {
    render() {
      const { item } = this.props;

      return(
        <Card 
            key={item._id} 
            id={item._id}
            variant="outlined"
            className="card"
        >
            <Link to={'/flix/' + item._id}>
                <CardContent>
                    <Typography color="textPrimary">
                        {item.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {item.category}
                    </Typography>
                </CardContent> 
            </Link>
            <CardActions>
                <Button
                    className="delete"
                    onClick={() => this.props.delete(item)}
                > 
                    Delete 
                </Button>
            </CardActions>
        </Card>
      ); 
    }
}

export default FlixCard;