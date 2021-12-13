import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import NewsItem from './NewsItem';
import { makeStyles } from '@mui/styles';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { SkipPreviousRounded, SkipNextRounded } from '@mui/icons-material';


const useStyles = makeStyles({
    col: {
        paddingLeft: 40,
        paddingTop: 30
    }
})

const News = () => {
    const classes = useStyles()
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);

    const prevBtnHandler = () => {
        setPage(page-1)
    }
    const nextBtnHandler = () => {
        setPage(page+1)
    }

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=78b9d77c7f0844b8a1a0dde14bc9dbf3&page=${page}&pageSize=8`;
        let data = await fetch(url);
        let parseData = await data.json();
        let results = parseData.articles;
        console.log(results)
        setNews(results)

    }

    useEffect(() => {
        fetchData()
    }
        , [])

    return (
        <div className={classes.col}>
            <Typography
                variant="h4"
                component="h6"
                align="center"
                color="textSecondary"
            >
                Todays Top-headlines.
            </Typography>
            {news.length === 0 ? "No news to display" : <div className="row justify-content-evenly">
                {news.map((news) => {
                    return <div className="col-md-3 my-2" key={news.title} >
                        <NewsItem news={news} />
                    </div>
                })}

            </div>}
            <Box
                sx={{
                    display: 'flex',
                    paddingTop: 5,
                    paddingBottom: 10,
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="contained" color="primary" aria-label="">
                    <Button disabled={page<1} onClick={() => prevBtnHandler()} startIcon={<SkipPreviousRounded />}>Prev</Button>
                    <Button onClick={() => nextBtnHandler()} endIcon={<SkipNextRounded />}>Next</Button>

                </ButtonGroup>
            </Box>


        </div>
    )
}

export default News
