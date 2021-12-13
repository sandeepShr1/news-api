import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import NewsItem from './NewsItem';
import { makeStyles } from '@mui/styles';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';



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
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);


    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=78b9d77c7f0844b8a1a0dde14bc9dbf3&page=${page + 1}&pageSize=8`;
        let data = await fetch(url);
        let parseData = await data.json();
        let results = parseData.articles;
        setNews(news.concat(results))
    };

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=78b9d77c7f0844b8a1a0dde14bc9dbf3&page=${page}&pageSize=8`;
            let data = await fetch(url);
            let parseData = await data.json();
            let results = parseData.articles;
            let totalResults = parseData.totalResults;
            console.log(parseData)
            setNews(results)
            setTotalResults(totalResults)
            setLoading(false)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
        , [])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={classes.col}>
            <Typography
                variant="h4"
                component="h6"
                align="center"
                color="textSecondary"
            >
                Todays Top-headlines.
                {loading && <Spinner />}
            </Typography>
            <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={true}
                loader={news.length === totalResults ? null : <Spinner />}
            >
                <div className="mx-4">
                    {news.length === 0 ? "No news to display" : <div className="row justify-content-evenly">
                        {news.map((news) => {
                            return <div className="col-md-6 col-lg-3 my-2" key={news.title} >
                                <NewsItem news={news} />
                            </div>
                        })}

                    </div>}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default News;
