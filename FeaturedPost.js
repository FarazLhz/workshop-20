import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core"


const useStyles = makeStyles({
    title : {
        fontSize: 40,
        fontFamily: "Montserrat",
    },
    cover:{
        backgroundImage:`url(https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        backgroundPosition:"center",
        padding: "35px 25px",
    }
})

const FeaturedPost = () => {
    const classes = useStyles();
    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>Title of a longer featured blog post</Typography>
                <Typography varient="h5">
                    Multiple lines of text that form the lede, informing new readers
                    quickly and efficiently about what's most interesting in this post's
                    contents.
                </Typography>
            </CardContent>

            <CardActions>
                <Button varient="text" className={classes.btn}>
                    Read more..
                </Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost
