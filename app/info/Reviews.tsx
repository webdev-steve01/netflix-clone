import React from 'react'
type props = {
    reviews: any[]
}
function Reviews({reviews} : props) {
  return (
    <div>{/* Reviews */}
      <section className="py-4 text-white max-w-[1200px] mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
        {reviews?.length > 0 ? (
          <ul className="space-y-6">
            {reviews.map((review: any) => (
              <li
                key={review.id}
                className="bg-[#1c1c1c] p-4 rounded-lg shadow-md"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-semibold">
                    {review.author}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-100">
                  {review.content.length > 500
                    ? review.content.slice(0, 500) + "..."
                    : review.content}
                </p>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs mt-2 inline-block hover:underline"
                >
                  Read Full Review
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No reviews yet.</p>
        )}
      </section></div>
  )
}

export default Reviews