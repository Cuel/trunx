import * as classname from 'classname'
import * as React from 'react'

interface LevelProps {
  isMobile?: boolean
}

interface LevelItemProps {
  isMobile?: boolean
}

class LevelItem extends React.Component<LevelItemProps> {
  render() {

    const className = classname(['level-item'], {
      'has-text-centered': hasTextCentered,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelLeft extends React.Component {
  render() {
    return (
      <div className="level-left">{this.props.children}</div>
    )
  }
}

class LevelRight extends React.Component {
  render() {
    return (
      <div className="level-right">{this.props.children}</div>
    )
  }
}

export default class Level extends React.Component<LevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  render() {
    const {
      isMobile,
    } = this.props

    const className = classname(['level'], {
      'is-mobile': isMobile,
    })

    return (
      <nav className={className}>{this.props.children}</nav>
    )
  }
}