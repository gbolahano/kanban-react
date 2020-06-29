import React from 'react';
import as from '../../assets/1.jpg';

const IssueCard = ({ showModal, issue, setSelectedIssue }) => {

  const type = issue => {
    switch (issue.type) {
      case 'bug':
        return (
          <span class="lnr icon-custom icon-custom-danger  lnr-warning"></span>
        )
      case 'task':
        return (
          <span class="lnr icon-custom icon-custom-success lnr-bookmark"></span>
        )
      case 'story':
        return (
          <span class="lnr icon-custom icon-custom-info lnr-bookmark"></span>
        )
      default:
        break;
    }
  }

  const priority = issue => {
    switch (issue.priority) {
      case 'highest':
        return (
          <span class="lnr icon-custom icon-custom-danger lnr-arrow-up"></span>
        )
      case 'high':
        return (
          <span class="lnr icon-custom icon-custom-danger lnr-arrow-up"></span>
        )
      case 'medium':
        return (
          <span class="lnr icon-custom icon-custom-medium lnr-arrow-up"></span>
        )
      case 'low':
        return (
          <span class="lnr icon-custom icon-custom-sucess icon-custom-medium lnr-arrow-down"></span>
        )
      case 'lowest':
        return (
          <span class="lnr icon-custom icon-custom-light lnr-arrow-down"></span>
        )
      default:
        break;
    }
  }

  const handleOnclick = (issue) => {
    showModal();
    setSelectedIssue(issue);
  }

  return (
    <div className="issue__card" onClick={() => handleOnclick(issue)}>
      <p className="issue__card__title">{issue.title}</p>
      <div className="issue__card__cta">
        <div className="issue__card__cta__icon">
          {type(issue)}
          {priority(issue)}
        </div>
        <div className="issue__card__cta__assignee">
          {
            issue.assignees.map(assignee => {
              return (
                <figure>
                  <img src={assignee.avatarUri} alt="avatar"/>
                </figure>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default IssueCard;