import PropTypes from 'prop-types'

function Header({text , bgColor , textColor}) 
{
  const headeStyles = {
    backgroundColor : bgColor,
    color : textColor,
  }
  return (
   <header style = {headeStyles}>
        <div className='container'>
            <h2> {text} </h2>
        </div>
   </header>
  )
}

Header.defaultProps = {
  text : 'Feed back APP',
  bgColor : 'rgba(0,0,0,5)',
  textColor : '#ff6a95',
}

Header.propTypes = {
  text : PropTypes.string,
  bgColor : PropTypes.string,
  textColor : PropTypes.string,
}

export  default Header