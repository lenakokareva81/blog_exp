import styled from "styled-components";
import { Icon } from "../../../../components";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const PostCardContainer = ({
  className,
  id,
  title,
  publishedAt,
  commentsCount,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              {publishedAt && (
                <Icon
                  id="fa fa-calendar-o"
                  size="18px"
                  margin="0 10px 0 10px"
                  inactive={true}
                />
              )}

              {publishedAt}
            </div>
            <div className="comment-count">
              <Icon
                id="fa-comment-o"
                size="18px"
                margin="0 10px 0 10px"
                inactive={true}
              />
              {commentsCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  object-fit: cover;
  border: 1px solid black;
  & h4 {
    margin: 5px 0 0 0px;
  }
  & img {
    display: block;
    width: 100%;
    height: 150px;
  }
  & .post-card-footer {
    border-top: 1px solid black;
    padding: 5px;
  }
  & .post-card-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  & .published-at {
    display: flex;
  }
  & .comment-count {
    display: flex;
  }
`;
PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
