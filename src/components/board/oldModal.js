<Modal show={show} handleClose={hideModal}>
<div className="ticket">
  <div className="ticket__bug__type">
    <select className="" value={selectedIssue.type}>
      <option value="bug">BUG</option>
      <option value="task">Task</option>
      <option value="story">Story</option>
    </select>
  </div>
  <p className="ticket__title">{selectedIssue.title}</p>
  <div className="ticket__description">
    <h3>Description</h3>
    {/* <textarea name="" id="" placeholder="Add description..." rows="10" value={selectedIssue.description}></textarea> */}
    {/* <ReactQuill className="editor" value={selectedIssue.description} onChange={handleIssueContentChange} /> */}
    <ReactQuill className="editor" value={selectedIssue.description} />
  </div>
  <div className="ticket__comment">
    <h3>Comments</h3>
    <div className="ticket__comment__form">
      <img src={as} width="30px" height="30px" alt="as" />
      <textarea name="comment" placeholder="Add a commment..." id="" ></textarea>
      <button className="btn btn-success">Save</button>
    </div>
    {
      selectedIssue.comments ? selectedIssue.comments.map(comment => {
        return (
          <div className="ticket__comment__display">
            <div className="top">
              <img src={comment.user.avatarUri} width="30px" height="30px" alt="as"/>
              <p className="ticket__comment__display__name">{comment.user.name}</p>
            </div>
            <div className="holder">
              <p className="ticket__comment__display__text">
                {comment.body}
              </p>
              <button className="btn btn-delete">Delete</button>
            </div>
          </div>
        )
      }) : null
    }
  </div>
</div>
<div className="assign">
  <div className="status">
    <h3 className="label-heading" htmlFor="">Status</h3>
    {/* <select className="select" name="" id="" value={selectedIssue.status}>
      <option value="backlog">Backlog</option>
      <option value="development">Selected for development</option>
      <option value="progress">In progress</option>
      <option value="done">Done</option>
    </select> */}
    <CustomSelect
      data={[
        {
          value: 'backlog',
          label:'Backlog'
        },
        {
          value: 'development',
          label:'Selected for development'
        },
        {
          value: 'progress',
          label:'Progress'
        },
        {
          value: 'done',
          label:'Done'
        }
      ]}
      selected={status}
      handleChange={handleStatusChange}
    />
  </div>
  <div className="assignees">
    <h3 className="label-heading" htmlFor="">Assignees</h3>
    {/* <select className="select" name="" id="">
      <option value="John Doe">John Doe</option>
      <option value="Avery Spectre">Avery Spectre</option>
      <option value="Tyler Nun">Tyler Nun</option>
    </select> */}
    <CustomSelect
      assignees={selectedIssue.assignees ? selectedIssue.assignees : ''}
      selected={selected}
      handleChange={handleChange}
    />
    {/* {console.log(selectedIssue.assignees ? selectedIssue.assignees.map(assignee => {
      return {
        value: assignee.id,
        label: assignee.name
      }
    }) : '')} */}
  </div>
  <div className="assignees">
    <h3 className="label-heading" htmlFor="">Reporter</h3>
    <select className="select" name="" id="" value={selectedIssue.reporter ? selectedIssue.reporter.name: ''}>
      <option value="John Doe">John Doe</option>
      <option value="Avery Spectre">Avery Spectre</option>
      <option value="Tyler Nun">Tyler Nun</option>
    </select>
  </div>
  <div className="priority">
    <h3 className="label-heading" htmlFor="">Priority</h3>
    <select className="select" name="" id="" value={selectedIssue.priority}>
      <option value="highest">Highest</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
      <option value="lowest">Lowest</option>
    </select>
  </div>
</div>
</Modal>
