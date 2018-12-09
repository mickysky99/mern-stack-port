import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import BuildingImg from './../assets/images/Building.jpg'

const styles = theme => ({
  card: {
    maxWidth: 1600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary,
    fontSize: 10
  },
  media: {
    minHeight: 500
  }
})

class Home extends Component {
  render() {
    const {classes} = this.props
    return (
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
            Home
          </Typography>
          <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells"/>
          
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to my home page.
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
