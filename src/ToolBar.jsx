import React from 'react'
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class ToolBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exportDropdownOpen: false,
      clearDropdownOpen: false
    }

    this.toggleExportDropdown = this.toggleExportDropdown.bind(this)
    this.toggleClearDropdown = this.toggleClearDropdown.bind(this)
  }

  toggleExportDropdown() {
    this.setState((prevState) => ({
      exportDropdownOpen: !prevState.exportDropdownOpen
    }))
  }

  toggleClearDropdown() {
    this.setState((prevState) => ({
      clearDropdownOpen: !prevState.clearDropdownOpen
    }))
  }

  handleExportExcel(e) {
    document.querySelectorAll('.uniBR').forEach((val) => {
      val.setAttribute('style', 'mso-data-placement:same-cell')
    })
    const html =
      '<html><head><meta charset="utf-8"></head><body>' +
      document.getElementById('CustomTable').parentNode.innerHTML +
      '</body></html>'
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html))
    e.preventDefault()
  }

  handleExportPNG() {
    window.html2canvas(document.querySelectorAll('#CustomTable'), {
      onrendered: function (canvas) {
        //
      }
    })
    window.html2canvas(document.querySelectorAll('#CustomTable'), {
      onrendered: function (canvas) {
        window.Canvas2Image.saveAsPNG(canvas)
      }
    })
  }

  render() {
    const btnStyle = { cursor: 'pointer', marginBottom: '5px' }
    return (
      <div>
        <Button
          color="primary"
          size="sm"
          className="mr-1"
          style={btnStyle}
          onClick={this.props.onSave}
        >
          <i className="fa fa-floppy-o" aria-hidden="true"></i>{' '}
          <span className="d-none d-sm-inline">儲存</span>
        </Button>
        <Button
          color="light"
          size="sm"
          className="mr-1"
          style={btnStyle}
          onClick={this.props.onShare}
        >
          <i className="fa fa-share-square-o" aria-hidden="true"></i>{' '}
          <span className="d-none d-sm-inline">分享</span>
        </Button>
        <ButtonDropdown
          className="mr-1"
          isOpen={this.state.exportDropdownOpen}
          style={btnStyle}
          size="sm"
          toggle={this.toggleExportDropdown}
        >
          <DropdownToggle caret color="light">
            <i className="fa fa-download" aria-hidden="true"></i>{' '}
            <span className="d-none d-sm-inline">匯出</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.handleExportExcel}>
              <i className="fa fa-file-excel-o" aria-hidden="true"></i> .xls
            </DropdownItem>
            <DropdownItem onClick={this.handleExportPNG}>
              <i className="fa fa-file-image-o" aria-hidden="true"></i> .png
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <span className="ml-2 mr-2"></span>
        <ButtonDropdown
          className="mr-1"
          isOpen={this.state.clearDropdownOpen}
          style={btnStyle}
          size="sm"
          toggle={this.toggleClearDropdown}
        >
          <DropdownToggle caret color="light">
            <i className="fa fa-repeat" aria-hidden="true"></i>{' '}
            <span className="d-none d-sm-inline">清除</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.props.onReColor}>
              <i className="fa fa-magic" aria-hidden="true"></i> 標記
            </DropdownItem>
            <DropdownItem onClick={this.props.onReTable}>
              <i className="fa fa-table" aria-hidden="true"></i> 課表
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Button
          color="light"
          size="sm"
          className="mr-1"
          style={btnStyle}
          onClick={this.props.onClickCustom}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>{' '}
          <span className="d-none d-sm-inline">自訂時段</span>
        </Button>
      </div>
    )
  }
}
