import React from 'react'
import TagsInput from 'react-tagsinput'
import { ButtonGroup, Button } from 'reactstrap'

import './CourseReviewFilter.css'

export default class CourseReviewFilter extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <h5>搜尋課程</h5>
        <TagsInput
          className="form-control"
          id="ExchangeSetting__inputWant"
          value={this.props.filterTags}
          onChange={this.props.onFilter}
          onlyUnique
        />
        <div className="mt-2">
          <ButtonGroup size="sm">
            <Button
              className={this.props.sortType === 1 ? 'active' : ''}
              onClick={() => this.props.onChangeSortType(1)}
            >
              時間優先
            </Button>{' '}
            <Button
              className={this.props.sortType === 2 ? 'active' : ''}
              onClick={() => this.props.onChangeSortType(2)}
            >
              評價優先
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
