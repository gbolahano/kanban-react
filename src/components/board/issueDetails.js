import React from 'react';
import Modal from '../shared/modal';

const IssueDetails = () => {
  return (
    <Modal>
      <div className="ticket">
        <div className="ticket__bug__type">
          <select className="" name="" id="">
            <option value="">BUG-19249</option>
            <option value="">Story</option>
            <option value="">Task</option>
          </select>
        </div>
        <p className="ticket__title">{}</p>
        <div className="ticket__description">
          <h3>Description</h3>
          <textarea name="" id="" placeholder="Add description..." rows="15"></textarea>
        </div>
        <div className="ticket__comment">
          <h3>Comments</h3>
          <div className="ticket__comment__form">
            <img width="30px" height="30px" alt="as" />
            <textarea name="comment" placeholder="Add a commment..." id="" ></textarea>
            <button className="btn btn-success">Save</button>
          </div>
          <div className="ticket__comment__display">
            <img width="30px" height="30px" alt="as"/>
            <p className="ticket__comment__display__name">Lord Gaben</p>
            <p className="ticket__comment__display__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, consequuntur dolorem, delectus eveniet repellendus quos enim iste, voluptate vero ex debitis vel laborum cupiditate? Nisi repellendus ipsam alias incidunt?
            </p>
            <button className="btn btn-delete">Delete</button>
          </div>
          <div className="ticket__comment__display">
            <img width="30px" height="30px" alt="as"/>
            <p className="ticket__comment__display__name">Lord Gaben</p>
            <p className="ticket__comment__display__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, consequuntur dolorem, delectus eveniet repellendus quos enim iste, voluptate vero ex debitis vel laborum cupiditate? Nisi repellendus ipsam alias incidunt?
            </p>
            <button className="btn btn-delete">Delete</button>
          </div>
        </div>
      </div>
      <div className="assign">
        <div className="status">
          <h3 className="label-heading" htmlFor="">Status</h3>
          <select className="select" name="" id="">
            <option value="">Backlog</option>
            <option value="">Selected for development</option>
            <option value="">In progress</option>
            <option value="">Done</option>
          </select>
        </div>
        <div className="assignees">
          <h3 className="label-heading" htmlFor="">Assignees</h3>
          <select className="select" name="" id="">
            <option value="">Pickle Rickle</option>
            <option value="">Baby Yoda</option>
            <option value="">John Doe</option>
          </select>
        </div>
        <div className="priority">
          <h3 className="label-heading" htmlFor="">Priority</h3>
          <select className="select" name="" id="">
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
            <option value="">Lowest</option>
          </select>
        </div>
      </div>
    </Modal>
   );
}

export default IssueDetails;