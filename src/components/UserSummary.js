import { useState, useEffect } from "react";
function UserSummary(props) {
  const { name, email, location, picture } = props;
  const [showMore, setShow] = useState(false);
  console.log(showMore);
  if (props == null) {
    console.log("there is no user data");
  } else {
    return (
      <div>
        <button onClick={() => setShow(!showMore)}>Toggle</button>
        <span>
          {showMore ? (
            <>
              <h2>
                Name:{name.title}.{name.first}
                {name.last}
              </h2>
              <img src={picture.thumbnail} />
              <h3>email: {email}</h3>
              <p>
                location: {location.city} {location.state} {location.country}
              </p>
            </>
          ) : (
            <>
              <h2>
                Name:{name.title}.{name.first}
                {name.last}
              </h2>
              <h3>email: {email}</h3>
            </>
          )}
        </span>
      </div>
    );
  }
}
export default UserSummary;

//Adjust the component so that if showMore is true, then the user's name, email, street, city, state, and username are displayed. If showMore is false, just show the name and email as before
