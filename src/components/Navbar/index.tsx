import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

function NavbarCustom() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
}

export default NavbarCustom
