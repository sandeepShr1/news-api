import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        paddingTop:20,
        backgroundColor: 'primary'
    }
})

const NewsItem = (props) => {
    const classes = useStyles()
    const { news } = props;
    return (
        <Card className={classes.card} sx={{ maxWidth: 400 }} >
            <CardMedia
                component="img"
                height="140"
                image={news.urlToImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {news.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default NewsItem
