import React from 'react'
import { gql, useQuery } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto(props) {
    const breed = props.breed;
    const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
        variables: { breed },
        // pollInterval: 500
        notifyOnNetworkStatusChange: true,
      });
      if (loading) return null;
      if (error) return `Error! ${error}`;
      return (
          <div>
              <img src={data.dog.displayImage} style={{ width: 200 }} />
              <button onClick={() => refetch()}>Refetch!</button>
          </div>
      );
}

export default DogPhoto;
