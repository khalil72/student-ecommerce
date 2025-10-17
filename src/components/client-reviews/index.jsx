import React from "react";
import { reviews } from "../../data";
import { BiScan, BiStar } from "react-icons/bi";

const ClientReviews = () => {
  const visible = (reviews || []).slice(0, 6);

  return (
    <div className="container py-3">
        <h4 className="title text-center"> Client Reviews</h4>
      <div className="row g-3">
        {visible.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-secondary mb-0">No reviews yet.</div>
          </div>
        ) : (
          visible.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.user?.avatar}
                      alt={item.user?.name}
                      width={56}
                      height={56}
                      className="rounded-circle me-3 object-fit-cover"
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{item.user?.name}</h6>
                      <small className="text-muted">
                        {new Date(item.date).toLocaleDateString()}
                      </small>
                    </div>

                    <div className="text-end ms-2">
                      <div className="small text-muted">
                        <i className="bi bi-hand-thumbs-up-fill"></i> {item.likes}
                      </div>
                    </div>
                  </div>

                  <h6 className="card-title mb-1">{item.title}</h6>

                  <div className="mb-2">
                    {/* stars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < Math.round(item.rating)
                            ? <BiStar />
                            : <BiScan />
                        }
                        aria-hidden
                      />
                    ))}
                    <small className="ms-2 text-muted">({item.rating})</small>
                  </div>

                  <p className="card-text text-truncate-3 mb-3" style={{ lineHeight: 1.3 }}>
                    {item.comment}
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <small className="text-muted">{/* optional tagline */}</small>
                    <button className="btn btn-sm btn-outline-primary">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientReviews;
