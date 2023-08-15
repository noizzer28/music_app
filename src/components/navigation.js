import React from "react"

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state =  {
      isActive: true,
    }
    this.hideSideBar  = this.hideSideBar.bind(this)
  }
  render() {
    return(          <nav className="main__nav nav">
    <div className="nav__logo logo">
      <img className="logo__image" src="./logo.png" alt="logo" />
    </div>
    <div className="nav__burger burger" onClick={this.hideSideBar}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
    {this.state.isActive ? "" :     <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">Главное</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Мой плейлист</a>
        </li>
        <li className="menu__item">
          <a href="../signin.html" className="menu__link">Войти</a>
        </li>
      </ul>
    </div> }

  </nav>)}

  hideSideBar () {
    this.setState({isActive: !this.state.isActive})
    console.log("clicked")
  }
  }
   


export default Nav