import React, { useState } from 'react';
 
 
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#f39c12' : '#ccc', fontSize: '1.5em' }}>★</span>
    );
  }
  return stars;
};
 
 
const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};
 
const Rating = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'Rajesh', rating: 4, content: 'Best Service !', replies: [] },
    { id: 2, user: 'Bevin', rating: 2, content: 'Not what I expected.', replies: [] },
  ]);
 
  const [replyContent, setReplyContent] = useState('');
  const [currentReviewId, setCurrentReviewId] = useState(null);
 
  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };
 
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim() && currentReviewId !== null) {
      setReviews(reviews.map((review) =>
        review.id === currentReviewId
          ? { ...review, replies: [...review.replies, replyContent] }
          : review
      ));
      setReplyContent('');
      setCurrentReviewId(null);
    }
  };
 
  const averageRating = calculateAverageRating(reviews);
 
  return (
    <div style={{ margin: '0 auto', padding: '20px' }}>
      <h1>Ratings and Reviews</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Overall Rating</h2>
        <div>{renderStars(averageRating)}</div>
        <p>Average Rating: {averageRating} / 5</p>
      </div>
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
          <h3>{review.user}</h3>
          <div>{renderStars(review.rating)}</div>
          <p>{review.content}</p>
          {review.replies.length > 0 && (
            <div>
              <h4>Replies:</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {review.replies.map((reply, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{reply}</li>
                ))}
              </ul>
            </div>
          )}
          {currentReviewId === review.id ? (
            <form onSubmit={handleReplySubmit} style={{ marginTop: '10px' }}>
              <textarea
                value={replyContent}
                onChange={handleReplyChange}
                rows="4"
                cols="50"
                placeholder="Write your reply..."
                required
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <br />
              <button type="submit" style={{ marginRight: '10px',backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px" }}>Submit Reply</button>
              <button type="button" onClick={() => setCurrentReviewId(null)} style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}}>Cancel</button>
            </form>
          ) : (
            <button onClick={() => setCurrentReviewId(review.id)} style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}} >Reply</button>
          )}
        </div>
      ))}
    </div>
  );
};
 
export default Rating;